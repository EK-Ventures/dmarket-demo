<script setup lang="ts">
import photoFreshProduce from '~/assets/img/photo/attractive-african-saleswoman-fruit-stand-with-folded-arms.jpg'
import photoGoods from '~/assets/img/photo/african-market-man-selling-fruits-items-counting-money.jpg'
import photoServices from '~/assets/img/photo/medium-shot-man-holding-plants.jpg'

const categories = [
  {
    photo: photoFreshProduce,
    tag: 'Fresh produce',
    title: 'For market sellers',
    body: 'Managing perishable stock and daily demand, reaching more buyers nearby.',
    alt: 'African saleswoman at a fruit stand with folded arms, confident and ready to trade',
  },
  {
    photo: photoGoods,
    tag: 'Goods',
    title: 'For everyday essentials',
    body: 'Household items, packaged products and everyday essentials, made easy to find.',
    alt: 'African market vendor counting money while selling fruit and goods',
  },
  {
    photo: photoServices,
    tag: 'Handyman & local services',
    title: 'For trusted local services',
    body: 'Neighbourhood services people need quickly, from trusted community providers.',
    alt: 'Local service provider holding plants, representing community trade and services',
  },
]
</script>

<template>
  <section class="bg-white py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Headline -->
      <div class="text-center max-w-xl mx-auto mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
          One platform. Everyday local commerce.
        </h2>
      </div>

      <!-- Photo cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        <div
          v-for="cat in categories"
          :key="cat.tag"
          class="relative aspect-[3/4] rounded-2xl overflow-hidden"
        >
          <!-- Photo -->
          <img
            :src="cat.photo"
            :alt="cat.alt"
            class="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          <!-- Gradient overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
            aria-hidden="true"
          />

          <!-- Text -->
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <span class="text-xs font-semibold uppercase tracking-widest text-orange-400 block mb-1.5">
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

      <!-- Supporting line -->
      <p class="text-center text-sm text-charcoal-500 italic mt-12">
        Built for the way communities already trade — with better visibility, trust and reach.
      </p>

    </div>
  </section>
</template>
