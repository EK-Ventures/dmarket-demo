<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

const { containerRef } = useScrollReveal()

const steps = [
  {
    label: 'Step 01',
    title: 'List what you sell or offer',
    body: 'Fresh produce, household goods, or local services — add your listing in minutes.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" />',
  },
  {
    label: 'Step 02',
    title: 'Get discovered nearby',
    body: 'Buyers can see what\'s available around them in real time, right on their phone.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />',
  },
  {
    label: 'Step 03',
    title: 'Match, connect and trade',
    body: 'Smart matching helps connect supply, demand and availability across your local area.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />',
  },
  {
    label: 'Step 04',
    title: 'Build trust as you grow',
    body: 'Ratings, reviews and reliability signals help consistent traders stand out and grow.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />',
  },
]
</script>

<template>
  <section ref="containerRef" id="how-it-works" class="bg-warm-grey py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center reveal">
        <p class="text-xs font-bold tracking-[0.12em] uppercase text-charcoal-500 mb-4">
          How it works
        </p>
        <h2 class="text-3xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-[1.08]">
          Simple to use. Built for everyday trade.
        </h2>
      </div>

      <!-- Steps grid -->
      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        <div
          v-for="(step, i) in steps"
          :key="step.label"
          class="reveal relative bg-white rounded-2xl shadow-md p-6 lg:p-7 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          :style="{ transitionDelay: i * 110 + 'ms' }"
        >
          <div class="absolute top-0 inset-x-0 h-0.5 bg-orange-500" />
          <p class="text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-5">{{ step.label }}</p>
          <div class="w-16 h-16 rounded-2xl bg-warm-grey flex items-center justify-center mb-6">
            <svg
              class="w-8 h-8 text-charcoal-600"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              v-html="step.icon"
            />
          </div>
          <h3 class="text-base font-bold text-charcoal-950 leading-snug">{{ step.title }}</h3>
          <p class="mt-2 text-base text-neutral-700 leading-relaxed">{{ step.body }}</p>
        </div>
      </div>

      <!-- Microcopy -->
      <p class="reveal mt-10 text-base text-neutral-600 text-center" style="transition-delay: 450ms;">
        Designed for mobile-first markets and everyday users.
      </p>

    </div>
  </section>
</template>
