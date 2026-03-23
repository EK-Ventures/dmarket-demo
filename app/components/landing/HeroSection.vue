<script setup lang="ts">
// Set to true and provide src when video asset is ready
const videoSrc = ''
const hasVideo = computed(() => !!videoSrc)
</script>

<template>
  <section class="bg-cream">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div class="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">

        <!-- Copy -->
        <div class="max-w-2xl">

          <!-- Eyebrow -->
          <p class="mb-5 text-xs font-semibold uppercase tracking-widest text-terracotta-500">
            Early Access Now Open
          </p>

          <!-- H1 -->
          <h1 class="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            Where Local Markets Become Global Commerce.
          </h1>

          <!-- Subheadline -->
          <p class="mt-6 text-lg leading-relaxed text-navy-700 sm:text-xl">
            d'Market is a mobile-first marketplace connecting Sub-Saharan traders with buyers —
            through real-time discovery, intelligent matching, and tools built for how African
            trade actually works.
          </p>

          <!-- CTAs -->
          <div class="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#register-interest"
              class="inline-flex items-center rounded-md bg-terracotta-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-500"
            >
              Join as a Trader
            </a>
            <a
              href="#register-interest"
              class="inline-flex items-center rounded-md border border-navy-300 px-6 py-3.5 text-sm font-semibold text-navy-700 transition-colors hover:border-navy-500 hover:text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500"
            >
              Investor Enquiries
            </a>
          </div>

          <!-- Micro-copy -->
          <p class="mt-4 text-sm text-navy-500">
            No commitment required. We'll be in touch directly.
          </p>
        </div>

        <!-- Media -->
        <div class="w-full lg:w-[520px] xl:w-[580px]">
          <div class="relative overflow-hidden rounded-2xl bg-navy-900 shadow-2xl" style="aspect-ratio: 4/3;">

            <!-- Video (when asset is ready) -->
            <video
              v-if="hasVideo"
              :src="videoSrc"
              autoplay
              muted
              loop
              playsinline
              class="absolute inset-0 h-full w-full object-cover"
            />

            <!-- Placeholder (remove when video is ready) -->
            <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-navy-900 p-8">
              <!-- Play icon hint -->
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                <svg class="h-7 w-7 translate-x-0.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p class="max-w-xs text-center text-sm leading-relaxed text-white/60">
                High-res video · Lagos market trader at a stall, using a smartphone · natural light, vibrant colour
              </p>
            </div>

            <!-- Overlay gradient — keeps edges clean -->
            <div class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>

          <!-- Caption below media -->
          <p class="mt-3 text-center text-xs text-navy-400">
            Real traders. Real markets. Real time.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
