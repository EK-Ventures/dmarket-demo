<script setup lang="ts">
import heroPhoto from '~/assets/img/photo/excited-african-market-woman-using-mobile-phone.jpg'
</script>

<template>
  <section class="relative min-h-screen flex items-center bg-white pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-20 lg:py-28">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left: copy -->
        <div class="space-y-7 lg:space-y-8">

          <!-- Eyebrow -->
          <p class="text-green-600 font-medium italic text-sm sm:text-base">
            Mobile marketplace for local trade across Sub-Saharan Africa
          </p>

          <!-- Headline -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal-900 tracking-tight leading-[1.05]">
            Buy local.<br>Sell big.
          </h1>

          <!-- Supporting copy -->
          <p class="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-lg">
            Designed for informal traders and everyday buyers, d'Market helps people discover nearby products and services, build trust through reputation, and grow local trade through mobile-first commerce.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="#register"
              class="inline-flex justify-center items-center px-6 py-3 rounded-xl text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-150"
            >
              Register your interest
            </a>
            <button
              type="button"
              class="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-charcoal-700 border border-charcoal-200 hover:bg-charcoal-50 transition-colors duration-150"
            >
              <UIcon name="i-heroicons-play-circle" class="size-5 text-orange-500" />
              Watch validation video
            </button>
          </div>

          <!-- Trust signals -->
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-charcoal-400 pt-1">
            <span>UK-based venture</span>
            <span aria-hidden="true">·</span>
            <span>Research-led</span>
            <span aria-hidden="true">·</span>
            <span>SEIS Advance Assurance granted</span>
          </div>

        </div>

        <!-- Right: photo -->
        <div class="relative order-first lg:order-last">
          <!-- Offset accent block -->
          <div class="absolute inset-0 bg-orange-500 rounded-3xl translate-x-4 translate-y-4 opacity-15" aria-hidden="true" />
          <!-- Photo -->
          <img
            :src="heroPhoto"
            alt="A market trader in Sub-Saharan Africa using her mobile phone to connect with buyers"
            class="relative w-full h-72 sm:h-96 lg:h-[580px] object-cover rounded-3xl shadow-md"
          />
        </div>

      </div>
    </div>
  </section>
</template>
