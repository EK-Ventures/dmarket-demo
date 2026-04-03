<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import photoThumbnailAvif from '~/assets/img/photo/young-black-african-businesswoman-local-market-with-smartphone.avif'
import photoThumbnailWebp from '~/assets/img/photo/young-black-african-businesswoman-local-market-with-smartphone.webp'
import photoThumbnailJpg  from '~/assets/img/photo/young-black-african-businesswoman-local-market-with-smartphone.jpg'

const { containerRef } = useScrollReveal()
const showModal = useState('validationModal', () => false)

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
          <div class="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-charcoal-900 group cursor-pointer" @click="showModal = true">
            <!-- Thumbnail -->
            <picture class="absolute inset-0 w-full h-full">
              <source :srcset="photoThumbnailAvif" type="image/avif" />
              <source :srcset="photoThumbnailWebp" type="image/webp" />
              <img
                :src="photoThumbnailJpg"
                alt="African market seller with a client, showcasing local trade - field validation interview still"
                class="w-full h-full object-cover opacity-55 group-hover:opacity-65 transition-opacity duration-300"
              />
            </picture>
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

  <!-- Video modal -->
  <Teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      @click.self="showModal = false"
    >
      <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-black" style="width:320px;height:568px">
        <iframe
          width="320"
          height="568"
          class="block"
          src="https://www.youtube.com/embed/D16a_Q3AJ4Y?autoplay=1"
          allow="autoplay; encrypted-media"
          allowfullscreen
          frameborder="0"
        />
        <button
          class="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          aria-label="Close video"
          @click="showModal = false"
        >
          <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </Teleport>
</template>
