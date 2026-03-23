<template>
  <section id="how-it-works" class="bg-cream">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

      <!-- Label -->
      <p class="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-terracotta-500">
        How It Works
      </p>

      <!-- Headline -->
      <h2 class="text-center text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
        Simple for Traders. Powerful for Commerce.
      </h2>

      <!-- Steps -->
      <div class="mt-16 grid gap-8 sm:grid-cols-3 lg:gap-12">
        <div
          v-for="step in steps"
          :key="step.number"
          class="flex flex-col items-start"
        >
          <!-- Icon container -->
          <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 ring-1 ring-navy-100">
            <component :is="step.icon" class="h-7 w-7 text-navy-700" aria-hidden="true" />
          </div>

          <!-- Step number + heading -->
          <div class="mt-6 flex items-baseline gap-3">
            <span class="text-xs font-bold tabular-nums text-terracotta-500">
              0{{ step.number }}
            </span>
            <h3 class="text-lg font-bold text-navy-900">
              {{ step.heading }}
            </h3>
          </div>

          <!-- Description -->
          <p class="mt-3 text-base leading-relaxed text-navy-600">
            {{ step.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

// Inline SVG icon components — no icon library dependency
const IconCamera = defineComponent({
  render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z' }),
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z' }),
  ]),
})

const IconRadar = defineComponent({
  render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' }),
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z' }),
  ]),
})

const IconStar = defineComponent({
  render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z' }),
  ]),
})

const steps = [
  {
    number: 1,
    icon: IconCamera,
    heading: 'List Your Goods',
    description: 'Take a photo, set your price, go live in minutes. d\'Market is built for low-bandwidth environments — it works where you work.',
  },
  {
    number: 2,
    icon: IconRadar,
    heading: 'Get Discovered',
    description: 'Buyers nearby find your products in real time. Our intelligent matching surfaces your listings to the right people at the right moment.',
  },
  {
    number: 3,
    icon: IconStar,
    heading: 'Build Your Reputation',
    description: 'Every sale builds your rating. Ratings build trust. Trust builds a business.',
  },
]
</script>
