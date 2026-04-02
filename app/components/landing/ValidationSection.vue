<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

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
          <div class="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-charcoal-900">
            <!-- TODO: replace VIDEO_ID with the actual YouTube Short video ID -->
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1"
              title="Market validation interviews"
              class="absolute inset-0 w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>

        <!-- Quotes -->
        <div class="flex flex-col justify-between gap-4 lg:gap-5 h-full">
        <blockquote
          v-for="(quote, i) in quotes"
          :key="quote.text"
          class="reveal bg-white rounded-xl p-4 border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
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
