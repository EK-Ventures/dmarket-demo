<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

const { containerRef } = useScrollReveal()

const pillars = [
  {
    title: 'Sell locally',
    body: 'Help informal traders reach more buyers nearby - without logistics complexity or expensive infrastructure.',
    accent: 'orange',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />`,
  },
  {
    title: 'Find what\'s available',
    body: 'Real-time local discovery for goods and services - so buyers know what\'s available nearby, right now.',
    accent: 'teal',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />`,
  },
  {
    title: 'Build reputation',
    body: 'Ratings, reviews and integrity incentives create trust - so reliable traders stand out and grow.',
    accent: 'green',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />`,
  },
]

const accentMap = {
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    icon: 'text-orange-500',
  },
  teal: {
    bg: 'bg-charcoal-50',
    border: 'border-charcoal-100',
    icon: 'text-charcoal-500',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-100',
    icon: 'text-green-600',
  },
}
</script>

<template>
  <section ref="containerRef" class="bg-white py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center reveal">

        <h2 class="text-3xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-[1.08]">
          A marketplace built for real-world local trade
        </h2>
        <p class="mt-5 text-lg text-neutral-700 leading-relaxed">
          d'Market is not a traditional ecommerce or logistics-heavy delivery platform. It helps people discover nearby sellers, products and services in real time - so digital discovery leads to trusted local, in-person trade.
        </p>
      </div>

      <!-- Pillar cards -->
      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <div
          v-for="(pillar, i) in pillars"
          :key="pillar.title"
          class="reveal group relative rounded-2xl border border-neutral-200 bg-white p-7 lg:p-8 shadow-sm hover:shadow-lg hover:border-neutral-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          :style="{ transitionDelay: i * 120 + 'ms' }"
        >

          <!-- Icon -->
          <div
            class="w-16 h-16 rounded-2xl border flex items-center justify-center mb-7"
            :class="[accentMap[pillar.accent].bg, accentMap[pillar.accent].border]"
          >
            <svg
              class="w-8 h-8"
              :class="accentMap[pillar.accent].icon"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              v-html="pillar.icon"
            />
          </div>

          <!-- Title -->
          <h3 class="text-lg font-bold text-charcoal-950 leading-snug">
            {{ pillar.title }}
          </h3>

          <!-- Body -->
          <p class="mt-2.5 text-base text-neutral-700 leading-relaxed">
            {{ pillar.body }}
          </p>

        </div>
      </div>

    </div>
  </section>
</template>
