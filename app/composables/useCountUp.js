import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Animates an array of numeric string values (e.g. ['1.2bn', '660m', '~460m'])
 * from 0 to their target when the container enters the viewport.
 *
 * Usage:
 *   const { animated, containerRef } = useCountUp(['1.2bn', '660m', '~460m'])
 *   // In template: ref="containerRef", display animated[0], animated[1], …
 */
export function useCountUp(values, duration = 1800) {
  const animated = ref([...values])
  const containerRef = ref(null)
  let observer = null
  let rafId = null

  const parsed = values.map((val) => {
    const str = String(val).trim()
    const hasApprox = str.startsWith('~')
    const prefix = hasApprox ? '~' : ''
    const rest = hasApprox ? str.slice(1) : str
    const match = rest.match(/^([\d.]+)(.*)$/)
    if (!match) return { prefix: '', number: 0, suffix: val, decimals: 0 }
    const numStr = match[1]
    return {
      prefix,
      number: parseFloat(numStr),
      suffix: match[2] || '',
      decimals: (numStr.split('.')[1] || '').length,
    }
  })

  onMounted(() => {
    // Show zeros initially
    animated.value = parsed.map(({ prefix, suffix }) => `${prefix}0${suffix}`)

    observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()

        const start = performance.now()

        function step(now) {
          const t = Math.min((now - start) / duration, 1)
          const e = 1 - Math.pow(1 - t, 3) // ease-out cubic

          animated.value = parsed.map(({ prefix, number, suffix, decimals }) => {
            const cur = number * e
            const formatted = decimals > 0 ? cur.toFixed(decimals) : Math.round(cur).toString()
            return `${prefix}${formatted}${suffix}`
          })

          if (t < 1) {
            rafId = requestAnimationFrame(step)
          }
        }

        rafId = requestAnimationFrame(step)
      },
      { threshold: 0.25 },
    )

    if (containerRef.value) observer.observe(containerRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
    if (rafId) cancelAnimationFrame(rafId)
  })

  return { animated, containerRef }
}
