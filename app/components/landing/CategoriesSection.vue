<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

import photoProduce from '~/assets/img/photo/women-shopping-fruit-market.jpg'
import photoGoods from '~/assets/img/photo/medium-shot-woman-holding-plate.jpg'
import photoServices from '~/assets/img/photo/happy-african-market-woman-using-her-phone-points-it.jpg'

const { containerRef } = useScrollReveal()

const categories = [
  {
    title: 'Fresh produce',
    body: 'For market sellers managing perishable stock and daily demand.',
    photo: photoProduce,
    alt: 'Women browsing fresh fruit and vegetables at a vibrant outdoor market stall - warm, natural light',
  },
  {
    title: 'Goods',
    body: 'For household items, packaged products and everyday essentials.',
    photo: photoGoods,
    alt: 'African woman holding everyday household goods at a local market - authentic, documentary style',
  },
  {
    title: 'Handyman & local services',
    body: 'For trusted neighbourhood services people need quickly.',
    photo: photoServices,
    alt: 'African market woman using a mobile phone and pointing at the camera - engaging, connected, local commerce',
  },
]
</script>

<template>
  <section ref="containerRef" class="relative overflow-hidden bg-white pt-20 pb-28 lg:pt-28 lg:pb-36">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

      <!-- Header -->
      <div class="reveal flex flex-col items-center text-center gap-6 mb-12">
        <div>
          <h2 class="text-3xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-[1.08]">
            One platform.<br />Everyday local commerce.
          </h2>
        </div>
        <p class="text-sm text-neutral-500 max-w-xs leading-relaxed">
          Built for the way communities already trade - with better visibility, trust and reach.
        </p>
      </div>

      <!-- Category cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        <div
          v-for="(cat, i) in categories"
          :key="cat.title"
          class="reveal group relative rounded-2xl overflow-hidden bg-neutral-100"
          style="height: 420px;"
          :style="{ transitionDelay: i * 120 + 'ms' }"
        >
          <!-- Photo -->
          <img
            :src="cat.photo"
            :alt="cat.alt"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          <!-- Content -->
          <div class="absolute inset-x-0 bottom-0 p-6 lg:p-7">
            <h3 class="text-xl font-bold text-white leading-snug">
              {{ cat.title }}
            </h3>
            <p class="mt-1.5 text-sm text-white/75 leading-relaxed">
              {{ cat.body }}
            </p>
          </div>

        </div>
      </div>

    </div>

    <!-- Bottom separator: white → charcoal-950 -->
    <div class="absolute bottom-0 inset-x-0 h-16 lg:h-20 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <polygon points="0,0 1440,50 1440,80 0,80" fill="#051315"/>
      </svg>
    </div>
  </section>
</template>
