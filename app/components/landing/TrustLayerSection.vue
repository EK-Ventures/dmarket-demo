<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

const { containerRef } = useScrollReveal()

const features = [
  {
    title: 'Ratings and reviews',
    body: 'Buyers rate every transaction, building a visible track record for each trader over time.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />',
  },
  {
    title: 'Verified trader profiles',
    body: 'Identity and business checks create a baseline of accountability, so buyers know who they are dealing with.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />',
  },
  {
    title: 'Integrity-led incentives',
    body: 'Traders who consistently deliver are rewarded with higher visibility and platform benefits — aligning incentives with good behaviour.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />',
  },
  {
    title: 'Visibility for reliable sellers',
    body: 'Reputation directly influences discoverability — the more consistently you trade, the more buyers can find you.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />',
  },
  {
    title: 'Transparent trading history',
    body: 'Buyers can see a trader\'s activity history before engaging — reducing uncertainty and building confidence in local commerce.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />',
  },
]
</script>

<template>
  <section ref="containerRef" class="bg-charcoal-950 py-20 lg:py-28" id="for-traders">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

        <!-- ── Left: Copy ── -->
        <div class="reveal reveal-left lg:sticky lg:top-28">
          <p class="text-xs font-bold tracking-[0.12em] uppercase text-charcoal-400 mb-4">
            Trust layer
          </p>
          <h2 class="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
            Trust is part of the product
          </h2>
          <p class="mt-5 text-lg text-charcoal-200 leading-relaxed">
            In fragmented local markets, trust matters as much as discovery. d'Market is designed to help reliable traders build reputation and help buyers make better decisions.
          </p>

          <!-- Closing line -->
          <p class="mt-8 text-sm text-charcoal-400 leading-relaxed border-l-2 border-charcoal-700 pl-4 italic">
            The goal is simple: reward consistency, reduce uncertainty, and make local trade easier to trust.
          </p>
        </div>

        <!-- ── Right: Trust feature rows ── -->
        <div class="flex flex-col divide-y divide-charcoal-800/60">
          <div
            v-for="(feature, i) in features"
            :key="feature.title"
            class="reveal flex items-start gap-5 py-6 first:pt-0 last:pb-0"
            :style="{ transitionDelay: i * 100 + 'ms' }"
          >
            <!-- Icon -->
            <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center mt-0.5">
              <svg
                class="w-8 h-8 text-charcoal-300"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                v-html="feature.icon"
              />
            </div>
            <!-- Content -->
            <div>
              <h3 class="text-base font-bold text-white leading-snug">{{ feature.title }}</h3>
              <p class="mt-1.5 text-sm text-charcoal-400 leading-relaxed">{{ feature.body }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
