<script setup lang="ts">
const capabilities = [
  {
    icon: 'i-heroicons-presentation-chart-line',
    label: 'Strategic leadership and enterprise transformation experience',
  },
  {
    icon: 'i-heroicons-cog-6-tooth',
    label: 'Operational experience in complex, high-volume environments',
  },
  {
    icon: 'i-heroicons-cpu-chip',
    label: 'Technology, fintech and startup execution capability',
  },
  {
    icon: 'i-heroicons-globe-europe-africa',
    label: 'Cross-regional perspective with UK-based governance discipline',
  },
]
</script>

<template>
  <section id="team" class="bg-warm-grey py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: copy -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight mb-6">
            Built with execution discipline
          </h2>
          <p class="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            d'Market is being developed by a leadership team with experience across strategy, operations, technology and scale execution, supported by networks spanning Africa, the UK and Europe. The business is being shaped with a clear focus on practical delivery, responsible growth and long-term market credibility.
          </p>
          <div class="border-t border-charcoal-200 mt-10 pt-8 space-y-2">
            <p class="text-charcoal-500 italic text-sm sm:text-base">
              A UK-based venture with regional understanding and a disciplined approach to scale.
            </p>
            <p class="text-sm font-medium text-charcoal-700">
              Now engaging aligned investors, strategic partners and non-executive support.
            </p>
          </div>
        </div>

        <!-- Right: 2×2 capability grid -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="cap in capabilities"
            :key="cap.label"
            class="bg-white rounded-2xl p-5 shadow-sm"
          >
            <div class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-charcoal-50">
              <UIcon :name="cap.icon" class="size-5 text-charcoal-400" />
            </div>
            <p class="text-sm font-medium text-charcoal-700 leading-snug mt-3">
              {{ cap.label }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
