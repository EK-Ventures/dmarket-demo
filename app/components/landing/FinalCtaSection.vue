<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

const { containerRef } = useScrollReveal()
</script>

<template>
  <section ref="containerRef" class="bg-warm-grey py-20 lg:py-28" id="register">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

      <!-- Header -->
      <div class="max-w-xl mx-auto text-center reveal mb-12">
        <h2 class="text-3xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-[1.08]">
          Join d'Market early
        </h2>
      </div>

      <!-- Two cards -->
      <div class="grid sm:grid-cols-2 gap-4 lg:gap-5">

        <!-- Trader card - primary -->
        <div class="reveal relative bg-orange-500 rounded-2xl p-8 lg:p-10 overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300" style="transition-delay: 100ms;">
          <!-- Subtle background texture -->
          <div
            class="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style="background: radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%); transform: translate(30%, -30%);"
          />

          <p class="text-xs font-bold tracking-[0.12em] uppercase text-orange-100 mb-5">
            For traders &amp; partners
          </p>
          <h3 class="text-2xl lg:text-3xl font-extrabold text-white leading-snug">
            Be among the first
          </h3>
          <p class="mt-3 text-base text-orange-100 leading-relaxed flex-1">
            Be among the first to hear when d'Market launches in your market. Register now to stay informed and secure your early access.
          </p>
          <div class="mt-8">
            <a
              href="/register-interest"
              class="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold bg-white text-orange-600 hover:bg-orange-50 rounded-xl transition-colors duration-150 shadow-sm"
            >
              Register your interest
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Investor card - secondary -->
        <div id="investor" class="reveal relative bg-charcoal-950 rounded-2xl p-8 lg:p-10 overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300" style="transition-delay: 200ms;">
          <!-- Subtle glow -->
          <div
            class="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style="background: radial-gradient(ellipse, rgba(45,137,149,0.08) 0%, transparent 70%); transform: translate(30%, -30%);"
          />

          <p class="text-xs font-bold tracking-[0.12em] uppercase text-charcoal-200 mb-5">
            For investors &amp; NEDs
          </p>
          <h3 class="text-2xl lg:text-3xl font-extrabold text-white leading-snug">
            Engage at the right stage
          </h3>
          <p class="mt-3 text-base text-charcoal-200 leading-relaxed flex-1">
            We are engaging aligned investors and experienced advisors for the next stage of growth. If you share our conviction in local African commerce, we'd like to hear from you.
          </p>
          <div class="mt-8 flex flex-col gap-3">
            <!-- SEIS reassurance -->
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 12 12" aria-hidden="true">
                <polyline points="2 6 5 9 10 3" />
              </svg>
              <span class="text-md text-charcoal-400">SEIS Advance Assurance granted</span>
            </div>
            <a
              href="/investor-interest"
              class="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold bg-charcoal-500 hover:bg-charcoal-400 text-white rounded-xl transition-all duration-150 self-start shadow-lg shadow-charcoal-500/30"
            >
              Investor / NED interest
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>

          </div>
        </div>

      </div>

    </div>

  </section>
</template>
