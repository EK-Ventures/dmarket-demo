<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'
import photoThumbnail from '~/assets/img/photo/young-black-african-businesswoman-local-market-smiling-browsing-online-using-smartphone-checking-reading-news-online-holding-apple.jpg'

const { containerRef } = useScrollReveal()

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
  <section ref="containerRef" class="bg-warm-grey py-12 lg:py-16" id="validation">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center reveal mb-8">
        <h2 class="text-3xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-[1.08]">
          Built from real conversations in-market
        </h2>
        <p class="mt-5 text-lg text-neutral-700 leading-relaxed">
          d'Market is being shaped by direct engagement with informal traders, buyers and local stakeholders across target territories. The need is consistent: more visibility, more trust, and better ways to grow income through mobile.
        </p>
      </div>

      <!-- Video + Quotes -->
      <div class="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-8 items-start max-w-3xl mx-auto">

        <!-- YouTube Short -->
        <div class="reveal w-full max-w-[260px] mx-auto lg:mx-0">
          <div class="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-charcoal-900 group cursor-pointer">
            <!-- Thumbnail -->
            <img
              :src="photoThumbnail"
              alt="African businesswoman at a local market smiling while using a smartphone - field validation interview still"
              class="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-65 transition-opacity duration-300"
            />
            <!-- Dark overlay -->
            <div class="absolute inset-0 bg-charcoal-950/40" />
            <!-- Play button -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-16 h-16 rounded-full bg-white/95 group-hover:bg-white group-hover:scale-110 flex items-center justify-center shadow-2xl transition-all duration-300">
                <svg class="w-6 h-6 text-charcoal-900 ml-1" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
                  <path d="M0 0l20 12L0 24V0z" />
                </svg>
              </div>
            </div>
            <!-- Label -->
            <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p class="text-white text-xs font-semibold">Market validation interviews</p>
              <p class="text-white/70 text-xs mt-0.5">Primary research across target territories</p>
            </div>
          </div>
        </div>

        <!-- Quotes -->
        <div class="flex flex-col justify-between gap-2 h-full">
        <blockquote
          v-for="(quote, i) in quotes"
          :key="quote.text"
          class="reveal bg-white rounded-xl p-5 py-6 border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          :style="{ transitionDelay: (i + 1) * 120 + 'ms' }"
        >
          <!-- Large quote mark -->
          <span class="block text-3xl font-black text-orange-200 leading-none mb-1" aria-hidden="true">"</span>
          <p class="text-neutral-800 text-sm font-medium leading-relaxed -mt-1 italic">
            {{ quote.text }}
          </p>
          <footer class="mt-2 text-xs text-neutral-500 font-medium">
            {{ quote.source }}
          </footer>
        </blockquote>
        </div>

      </div>

    </div>
  </section>
</template>
