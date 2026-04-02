<script setup lang="ts">
import videoThumbnail from '~/assets/img/photo/young-black-african-businesswoman-local-market-with-smartphone.jpg'

const quotes = [
  'I can sell more if more people know what I have today.',
  'Trust is the main issue. People need to know who they are buying from.',
  'We already use our phones for business. We need something built for our market.',
]
</script>

<template>
  <section id="validation" class="bg-white py-24 lg:py-32">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Headline + intro -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight mb-5">
          Built from real conversations in-market
        </h2>
        <p class="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
          d'Market is being shaped by direct engagement with informal traders, buyers and local stakeholders across target territories. The need is consistent: more visibility, more trust, and better ways to grow income through mobile.
        </p>
      </div>

      <!-- Video block -->
      <div class="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
        <img
          :src="videoThumbnail"
          alt="Market trader using a smartphone - still from field validation interviews"
          class="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <!-- Dim overlay -->
        <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200" aria-hidden="true" />
        <!-- Play button -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <UIcon name="i-heroicons-play-solid" class="size-7 text-orange-500 translate-x-0.5" />
          </div>
        </div>
      </div>

      <!-- Watch link -->
      <p class="text-center text-xs text-charcoal-400 mt-3">
        Video coming soon - field interviews with traders and buyers across target markets
      </p>

      <!-- Quotes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
        <blockquote
          v-for="quote in quotes"
          :key="quote"
          class="bg-warm-grey rounded-2xl p-6"
        >
          <span class="block text-5xl leading-none text-orange-300 font-serif mb-3" aria-hidden="true">"</span>
          <p class="text-charcoal-700 italic leading-relaxed text-sm sm:text-base">
            {{ quote }}
          </p>
        </blockquote>
      </div>

      <!-- Attribution -->
      <p class="text-center text-xs text-charcoal-400 italic mt-10">
        Insights drawn from primary market interviews and partner engagement.
      </p>

    </div>
  </section>
</template>
