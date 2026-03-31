<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

const { containerRef } = useScrollReveal()

const capabilities = [
  {
    title: 'Strategic leadership & enterprise transformation',
    body: 'Experience leading complex, multi-stakeholder programmes across large organisations and emerging market environments.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />',
  },
  {
    title: 'Operational experience in complex environments',
    body: 'Hands-on delivery experience in high-volume, high-stakes operations where execution rigour and accountability directly determine outcomes.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />',
  },
  {
    title: 'Technology, fintech & startup execution',
    body: 'Direct experience building and scaling technology products, with fintech and mobile-first platform exposure across African and European markets.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />',
  },
  {
    title: 'Cross-regional perspective, UK governance',
    body: 'Networks and working experience spanning Sub-Saharan Africa, the UK and Europe - combined with a UK-incorporated governance structure and regulatory discipline.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253" />',
  },
]
</script>

<template>
  <section ref="containerRef" class="bg-charcoal-950 py-20 lg:py-28" id="team">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

        <!-- ── Left: Copy ── -->
        <div class="reveal reveal-left lg:sticky lg:top-28">

          <h2 class="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
            Built with execution discipline
          </h2>
          <p class="mt-5 text-lg text-charcoal-200 leading-relaxed">
            d'Market is being developed by a leadership team with experience across strategy, operations, technology and scale execution, supported by networks spanning Africa, the UK and Europe.
          </p>
          <p class="mt-4 text-lg text-charcoal-200 leading-relaxed">
            The business is being shaped with a clear focus on practical delivery, responsible growth and long-term market credibility.
          </p>

          <!-- Divider -->
          <div class="mt-10 pt-10 border-t border-charcoal-800 space-y-3">
            <p class="text-sm text-charcoal-400 leading-relaxed">
              A UK-based venture with regional understanding and a disciplined approach to scale.
            </p>
            <p class="text-sm font-semibold text-charcoal-200">
              Now engaging aligned investors, strategic partners and non-executive support.
            </p>
          </div>
        </div>

        <!-- ── Right: 2×2 Capability grid ── -->
        <div class="grid sm:grid-cols-2 gap-4">
          <div
            v-for="(cap, i) in capabilities"
            :key="cap.title"
            class="reveal bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 hover:border-charcoal-600 hover:-translate-y-1 transition-all duration-300"
            :style="{ transitionDelay: i * 100 + 'ms' }"
          >
            <!-- Icon -->
            <div class="w-16 h-16 rounded-2xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center mb-5">
              <svg
                class="w-8 h-8 text-charcoal-300"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                v-html="cap.icon"
              />
            </div>
            <h3 class="text-sm font-bold text-white leading-snug">{{ cap.title }}</h3>
            <p class="mt-2 text-sm text-charcoal-400 leading-relaxed">{{ cap.body }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
