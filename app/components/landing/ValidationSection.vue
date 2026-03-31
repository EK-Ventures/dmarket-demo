<script setup>
import photoThumbnail from '~/assets/img/photo/young-black-african-businesswoman-local-market-smiling-browsing-online-using-smartphone-checking-reading-news-online-holding-apple.jpg'

const quotes = [
  {
    text: 'I can sell more if more people know what I have today.',
    source: 'Market trader, West Africa',
  },
  {
    text: 'Trust is the main issue. People need to know who they are buying from.',
    source: 'Local buyer, East Africa',
  },
  {
    text: 'We already use our phones for business. We need something built for our market.',
    source: 'Informal trader, Sub-Saharan Africa',
  },
]
</script>

<template>
  <section class="bg-warm-grey py-20 lg:py-28" id="validation">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

      <!-- Header -->
      <div class="max-w-3xl mb-12">
        <p class="text-xs font-bold tracking-[0.12em] uppercase text-charcoal-500 mb-4">
          Field validation
        </p>
        <h2 class="text-3xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-[1.08]">
          Built from real conversations in-market
        </h2>
        <p class="mt-5 text-lg text-neutral-700 leading-relaxed">
          d'Market is being shaped by direct engagement with informal traders, buyers and local stakeholders across target territories. The need is consistent: more visibility, more trust, and better ways to grow income through mobile.
        </p>
      </div>

      <!-- Two-column: video + quotes -->
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8 items-start">

        <!-- Video placeholder -->
        <div class="relative rounded-2xl overflow-hidden bg-charcoal-900 shadow-xl group cursor-pointer aspect-video lg:aspect-auto lg:h-full lg:min-h-[340px]">
          <!-- Thumbnail photo -->
          <img
            :src="photoThumbnail"
            alt="African businesswoman at a local market smiling while using a smartphone — field validation interview still"
            class="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-65 transition-opacity duration-300"
          />

          <!-- Dark overlay -->
          <div class="absolute inset-0 bg-charcoal-950/40" />

          <!-- Play button -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 rounded-full bg-white/95 group-hover:bg-white group-hover:scale-105 flex items-center justify-center shadow-2xl transition-all duration-200">
              <svg class="w-6 h-6 text-charcoal-900 ml-1" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
                <path d="M0 0l20 12L0 24V0z" />
              </svg>
            </div>
          </div>

          <!-- Label -->
          <div class="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
            <p class="text-white text-sm font-semibold">Market validation interviews</p>
            <p class="text-white/80 text-sm mt-0.5">Primary research across target territories</p>
          </div>
        </div>

        <!-- Quotes -->
        <div class="flex flex-col gap-4">
          <blockquote
            v-for="quote in quotes"
            :key="quote.text"
            class="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
          >
            <!-- Large quote mark -->
            <span class="block text-4xl font-black text-orange-200 leading-none mb-2" aria-hidden="true">"</span>
            <p class="text-neutral-800 text-base font-medium leading-relaxed -mt-2">
              {{ quote.text }}
            </p>
            <footer class="mt-3 text-sm text-neutral-500 font-medium">
              {{ quote.source }}
            </footer>
          </blockquote>
        </div>

      </div>

      <!-- CTA + attribution row -->
      <div class="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <a
          href="#validation"
          class="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-neutral-900 border border-neutral-400 hover:border-neutral-700 hover:bg-white rounded-xl transition-all duration-150 self-start"
        >
          <span class="w-6 h-6 rounded-full bg-charcoal-100 flex items-center justify-center">
            <svg class="w-2.5 h-2.5 text-charcoal-700 ml-px" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
              <path d="M0 0l10 6L0 12V0z" />
            </svg>
          </span>
          Watch the validation video
        </a>
        <p class="text-sm text-neutral-500 italic max-w-xs sm:text-right">
          Insights drawn from primary market interviews and partner engagement.
        </p>
      </div>

    </div>
  </section>
</template>
