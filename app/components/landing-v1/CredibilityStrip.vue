<script setup lang="ts">
const signals = [
  {
    icon: 'i-heroicons-building-office-2',
    label: 'UK-based company',
  },
  {
    icon: 'i-heroicons-users',
    label: 'Experienced founding team',
  },
  {
    icon: 'i-heroicons-clipboard-document-check',
    label: 'Primary market validation completed',
  },
  {
    icon: 'i-heroicons-globe-alt',
    label: 'Built for scalable multi-country rollout',
  },
  {
    icon: 'i-heroicons-shield-check',
    label: 'SEIS Advance Assurance granted',
  },
]
</script>

<template>
  <section class="bg-warm-grey border-y border-charcoal-100 py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6"
        role="list"
      >
        <li
          v-for="signal in signals"
          :key="signal.label"
          class="flex flex-col items-center text-center"
        >
          <div class="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
            <UIcon :name="signal.icon" class="size-5 text-orange-500" />
          </div>
          <p class="text-sm font-semibold text-charcoal-700 mt-3 leading-snug">
            {{ signal.label }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
