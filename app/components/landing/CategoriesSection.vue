<script setup>
import photoProduce from '~/assets/img/photo/women-shopping-fruit-market.jpg'
import photoGoods from '~/assets/img/photo/medium-shot-woman-holding-plate.jpg'
import photoServices from '~/assets/img/photo/happy-african-market-woman-using-her-phone-points-it.jpg'

const categories = [
  {
    title: 'Fresh produce',
    body: 'For market sellers managing perishable stock and daily demand.',
    photo: photoProduce,
    alt: 'Women browsing fresh fruit and vegetables at a vibrant outdoor market stall — warm, natural light',
  },
  {
    title: 'Goods',
    body: 'For household items, packaged products and everyday essentials.',
    photo: photoGoods,
    alt: 'African woman holding everyday household goods at a local market — authentic, documentary style',
  },
  {
    title: 'Handyman & local services',
    body: 'For trusted neighbourhood services people need quickly.',
    photo: photoServices,
    alt: 'African market woman using a mobile phone and pointing at the camera — engaging, connected, local commerce',
  },
]
</script>

<template>
  <section class="bg-white py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

      <!-- Header -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div class="max-w-xl">
          <p class="text-xs font-bold tracking-[0.12em] uppercase text-charcoal-500 mb-4">
            Marketplace categories
          </p>
          <h2 class="text-3xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-[1.08]">
            One platform.<br />Everyday local commerce.
          </h2>
        </div>
        <p class="text-sm text-neutral-500 max-w-xs lg:text-right leading-relaxed lg:pb-1">
          Built for the way communities already trade — with better visibility, trust and reach.
        </p>
      </div>

      <!-- Category cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        <div
          v-for="cat in categories"
          :key="cat.title"
          class="group relative rounded-2xl overflow-hidden bg-neutral-100"
          style="height: 400px;"
        >
          <!-- Photo -->
          <img
            :src="cat.photo"
            :alt="cat.alt"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

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
  </section>
</template>
