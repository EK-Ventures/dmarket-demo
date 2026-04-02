<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

import photoProduceAvif from '~/assets/img/photo/women-shopping-fruit-market.avif'
import photoProduceWebp from '~/assets/img/photo/women-shopping-fruit-market.webp'
import photoProduce from '~/assets/img/photo/women-shopping-fruit-market.jpg'
import photoGoods from '~/assets/img/photo/medium-shot-woman-holding-plate.jpg'
import photoServices from '~/assets/img/photo/happy-african-market-woman-using-her-phone-points-it.jpg'

const { containerRef } = useScrollReveal()

const categories = [
  {
    photoAvif: photoProduceAvif,
    photoWebp: photoProduceWebp,
    photo: photoProduce,
    tag: 'Fresh produce',
    title: 'For market sellers',
    body: 'Managing perishable stock and daily demand, reaching more buyers nearby.',
    alt: 'African saleswoman at a fruit stand with folded arms, confident and ready to trade',
  },
  {
    photoAvif: null,
    photoWebp: null,
    photo: photoGoods,
    tag: 'Goods',
    title: 'For everyday essentials',
    body: 'Household items, packaged products and everyday essentials, made easy to find.',
    alt: 'African market vendor counting money while selling fruit and goods',
  },
  {
    photoAvif: null,
    photoWebp: null,
    photo: photoServices,
    tag: 'Handyman & local services',
    title: 'For trusted local services',
    body: 'Neighbourhood services people need quickly, from trusted community providers.',
    alt: 'Local service provider holding plants, representing community trade and services',
  },
]
</script>

<template>
  <section ref="containerRef" class="bg-white py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

      <!-- Header -->
      <div class="reveal flex flex-col items-center text-center gap-6 mb-12">
        <div>
          <h2 class="text-3xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-[1.08]">
            One platform.<br />Everyday local commerce.
          </h2>
        </div>
        <p class="text-lg text-neutral-500 max-w-lg leading-relaxed">
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
          <picture class="absolute inset-0 w-full h-full">
            <source v-if="cat.photoAvif" :srcset="cat.photoAvif" type="image/avif" />
            <source v-if="cat.photoWebp" :srcset="cat.photoWebp" type="image/webp" />
            <img
              :src="cat.photo"
              :alt="cat.alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
          </picture>

          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          <!-- Content -->
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <span class="inline-block px-3 py-1 rounded-full bg-orange-500 text-white text-sm font-semibold mb-3">
              {{ cat.tag }}
            </span>
            <h3 class="text-xl font-bold text-white mb-1.5">
              {{ cat.title }}
            </h3>
            <p class="text-sm text-white/75 leading-relaxed">
              {{ cat.body }}
            </p>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>
