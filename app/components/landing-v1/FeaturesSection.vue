<script setup lang="ts">
const cards = [
  {
    icon: 'i-heroicons-map-pin',
    title: 'Sell locally',
    body: 'Help informal traders reach more buyers nearby - without complicated logistics or upfront costs.',
  },
  {
    icon: 'i-heroicons-magnifying-glass',
    title: 'Find what\'s available',
    body: 'Real-time local discovery for goods and services. See what\'s near you, right now.',
  },
  {
    icon: 'i-heroicons-star',
    title: 'Build reputation',
    body: 'Ratings, reviews and integrity incentives create trust between traders and buyers over time.',
  },
]
</script>

<template>
  <section id="for-traders" class="bg-white py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Intro block -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight mb-5">
          A marketplace built for real-world local trade
        </h2>
        <p class="text-base sm:text-lg text-charcoal-600 leading-relaxed">
          d'Market is not a traditional ecommerce or logistics-heavy delivery platform. It helps people discover nearby sellers, products and services in real time, so digital discovery leads to trusted local, in-person trade.
        </p>
      </div>

      <!-- Three cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="card in cards"
          :key="card.title"
          class="bg-white border border-charcoal-100 rounded-2xl p-8 shadow-sm"
        >
          <!-- Icon -->
          <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-orange-50 mb-5">
            <UIcon :name="card.icon" class="size-5 text-orange-500" />
          </div>

          <!-- Text -->
          <h3 class="text-lg font-semibold text-charcoal-900 mb-2">
            {{ card.title }}
          </h3>
          <p class="text-charcoal-600 leading-relaxed text-sm sm:text-base">
            {{ card.body }}
          </p>
        </article>
      </div>

    </div>
  </section>
</template>
