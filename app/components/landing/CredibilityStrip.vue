<script setup lang="ts">
const signals = [
  'UK-based company',
  'Experienced founding team',
  'Primary market validation completed',
  'Built for scalable multi-country rollout',
  'SEIS Advance Assurance granted',
]
</script>

<template>
  <section class="bg-warm-grey border-y border-charcoal-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <ul class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3" role="list">
        <li
          v-for="(signal, index) in signals"
          :key="signal"
          class="flex items-center gap-6"
        >
          <span
            v-if="index > 0"
            class="hidden sm:block h-3.5 w-px bg-charcoal-200"
            aria-hidden="true"
          />
          <span class="text-sm font-medium text-charcoal-600 flex items-center gap-1.5">
            <span class="text-orange-500 font-bold" aria-hidden="true">—</span>
            {{ signal }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>
