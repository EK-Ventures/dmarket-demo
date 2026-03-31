import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Lightweight scroll-reveal using native IntersectionObserver.
 * Place `ref="containerRef"` on the wrapper element.
 * Add class `reveal` (+ optional inline `transition-delay`) on child elements.
 * When each child enters the viewport it gets `is-visible` added.
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -48px 0px' } = options
  const containerRef = ref(null)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    if (containerRef.value) {
      containerRef.value.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
        observer.observe(el)
      })
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { containerRef }
}
