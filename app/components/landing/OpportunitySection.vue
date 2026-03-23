<template>
  <section id="opportunity" class="bg-warm-grey">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

      <!-- Label -->
      <p class="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-terracotta-500">
        The Opportunity
      </p>

      <!-- Headline -->
      <h2 class="mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
        £2 trillion in informal trade. Almost none of it digital.
      </h2>

      <!-- Body -->
      <div class="mx-auto mt-8 max-w-2xl text-center">
        <p class="text-lg leading-relaxed text-navy-700">
          Sub-Saharan Africa's informal economy is one of the largest untapped markets on earth —
          yet most of it runs on word-of-mouth, physical proximity, and cash. Traders have limited
          reach. Buyers have limited discovery. And spoilage, pricing inefficiency, and trust gaps
          cost billions annually.
        </p>
        <p class="mt-5 text-lg font-semibold text-navy-900">
          d'Market was built to change that.
        </p>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid gap-px overflow-hidden rounded-2xl bg-navy-200 sm:grid-cols-3">
        <div
          v-for="stat in stats"
          :key="stat.value"
          class="flex flex-col items-center bg-warm-grey px-8 py-10 text-center"
        >
          <span class="text-5xl font-extrabold tracking-tight text-navy-900 lg:text-6xl">
            {{ stat.value }}
          </span>
          <span class="mt-3 text-sm font-medium leading-snug text-navy-600">
            {{ stat.label }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    value: '£2T',
    label: 'Sub-Saharan informal GDP — largely untouched by digital commerce',
  },
  {
    value: '600M+',
    label: 'Informal workers across the continent with no scalable sales channel',
  },
  {
    value: '72%',
    label: 'Of traders cite trust as the primary barrier to selling online',
  },
]
</script>
