<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

const signals = [
  'UK-based company',
  'Experienced founding team',
  'Primary market validation completed',
  'Built for scalable multi-country rollout',
  'SEIS Advance Assurance granted',
]

const { containerRef } = useScrollReveal()
</script>

<template>
  <section ref="containerRef" class="bg-warm-grey -mt-px" aria-label="Credibility signals">
    <div class="max-w-7xl mx-auto px-5 lg:px-8 py-5 lg:py-6">
      <div class="reveal flex flex-wrap justify-center items-center gap-x-0 gap-y-3">

        <template v-for="(signal, i) in signals" :key="signal">

          <div class="flex items-center gap-2.5 px-4 lg:px-5">
            <!-- Checkmark icon -->
            <svg
              class="w-5 h-5 text-charcoal-500 flex-shrink-0"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="2 7 6 11 12 3" />
            </svg>
            <span class="text-sm font-medium text-charcoal-800 whitespace-nowrap">{{ signal }}</span>
          </div>

          <!-- Vertical divider between items (desktop only) -->
          <span
            v-if="i < signals.length - 1"
            class="hidden lg:block w-px h-3.5 bg-neutral-300 flex-shrink-0"
            aria-hidden="true"
          />

        </template>

      </div>
    </div>

  </section>
</template>
