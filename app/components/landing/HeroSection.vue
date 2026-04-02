<script setup>
import photoMainAvif from '~/assets/img/photo/excited-african-market-woman-using-mobile-phone.avif'
import photoMainWebp from '~/assets/img/photo/excited-african-market-woman-using-mobile-phone.webp'
import photoMain from '~/assets/img/photo/excited-african-market-woman-using-mobile-phone.jpg'
import photoCountingMoneyAvif from '~/assets/img/photo/african-market-man-selling-fruits-items-counting-money.avif'
import photoCountingMoneyWebp from '~/assets/img/photo/african-market-man-selling-fruits-items-counting-money.webp'
import photoCountingMoney from '~/assets/img/photo/african-market-man-selling-fruits-items-counting-money.jpg'
import photoSaleswomanAvif from '~/assets/img/photo/african-market-selling-with-client.avif'
import photoSaleswomanWebp from '~/assets/img/photo/african-market-selling-with-client.webp'
import photoSaleswoman from '~/assets/img/photo/african-market-selling-with-client.jpg'
</script>

<template>
  <section class="relative bg-[#123940] overflow-hidden">

    <!-- Ambient background glows -->
    <div
      class="hero-glow-pulse absolute top-0 right-0 w-[900px] h-[600px] rounded-full blur-[140px] pointer-events-none"
      style="background: radial-gradient(ellipse, rgba(244,128,17,0.09) 0%, transparent 70%); transform: translate(30%, -20%);"
    />
    <div
      class="hero-glow-pulse absolute bottom-0 left-0 w-[700px] h-[500px] rounded-full blur-[120px] pointer-events-none"
      style="background: radial-gradient(ellipse, rgba(45,137,149,0.10) 0%, transparent 70%); transform: translate(-30%, 20%); animation-delay: 2s;"
    />

    <!-- Content - extra pb to clear the diagonal separator -->
    <div class="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 lg:pt-28 pb-32 lg:pb-40">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- ── Left: Copy ── -->
        <div>



          <!-- Headline -->
          <h1 class="hero-anim-2 text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.03] mb-8">
            Buy local -<br />Sell big
          </h1>

          <!-- Eyebrow -->
          <div class="hero-anim-1 inline-flex items-center gap-2 py-1.5  mb-2">
            <span class="text-white text-xl font-bold tracking-wider leading-none">
              Mobile marketplace for local trade across Africa
            </span>
          </div>

          <!-- Body -->
          <p class="hero-anim-3 text-lg text-neutral-200 leading-relaxed max-w-lg">
            Designed for informal traders and everyday buyers, d'Market helps people discover nearby products and services, build trust through reputation, and grow local trade through mobile-first commerce.
          </p>

          <!-- CTAs -->
          <div class="hero-anim-4 mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#register"
              class="inline-flex items-center px-6 py-3 text-base font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Register your interest
            </a>
            <a
              href="#validation"
              class="inline-flex items-center gap-2.5 px-5 py-3 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/40 hover:border-white/70 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                <svg class="w-2.5 h-2.5 text-white ml-px" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                  <path d="M0 0l10 6L0 12V0z" />
                </svg>
              </span>
              Watch validation video
            </a>
          </div>

          <!-- Trust signals -->
          <div class="hero-anim-5 mt-9 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span class="text-sm font-medium text-neutral-300">UK-based venture</span>
            <span class="w-1 h-1 rounded-full bg-neutral-600 flex-shrink-0" />
            <span class="text-sm font-medium text-neutral-300">Research-led</span>
            <span class="w-1 h-1 rounded-full bg-neutral-600 flex-shrink-0" />
            <span class="text-sm font-medium text-neutral-300">SEIS Advance Assurance granted</span>
          </div>

        </div>

        <!-- ── Right: Photo collage (desktop) ── -->
        <div class="hero-anim-photo hidden lg:block">
          <div class="relative flex gap-3 h-[560px]">
            <!-- Main tall photo -->
            <div class="relative flex-[1.1] rounded-2xl overflow-hidden ring-1 ring-white/[0.08] shadow-2xl">
              <picture class="w-full h-full">
                <source :srcset="photoMainAvif" type="image/avif" />
                <source :srcset="photoMainWebp" type="image/webp" />
                <img
                  :src="photoMain"
                  alt="Female market trader smiling while using a mobile phone at a vibrant local market stall, warm natural light"
                  class="w-full h-full object-cover"
                />
              </picture>
              <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
            <!-- Right column: two stacked photos, offset down -->
            <div class="flex-1 flex flex-col gap-3 pt-10">
              <div class="flex-1 rounded-2xl overflow-hidden ring-1 ring-white/[0.08] shadow-2xl">
                <picture class="w-full h-full">
                  <source :srcset="photoCountingMoneyAvif" type="image/avif" />
                  <source :srcset="photoCountingMoneyWebp" type="image/webp" />
                  <img
                    :src="photoCountingMoney"
                    alt="Male market vendor counting money beside a colourful fruit display, authentic local market scene"
                    class="w-full h-full object-cover"
                  />
                </picture>
              </div>
              <div class="flex-1 rounded-2xl overflow-hidden ring-1 ring-white/[0.08] shadow-2xl">
                <picture class="w-full h-full">
                  <source :srcset="photoSaleswomanAvif" type="image/avif" />
                  <source :srcset="photoSaleswomanWebp" type="image/webp" />
                  <img
                    :src="photoSaleswoman"
                    alt="African market seller with a client at a local market stall"
                    class="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Mobile: Single photo below copy ── -->
        <div class="lg:hidden mt-2">
          <div class="rounded-2xl overflow-hidden ring-1 ring-white/[0.08] shadow-2xl aspect-[4/3]">
            <picture class="w-full h-full">
              <source :srcset="photoMainAvif" type="image/avif" />
              <source :srcset="photoMainWebp" type="image/webp" />
              <img
                :src="photoMain"
                alt="Female market trader using a mobile phone at a local market stall"
                class="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>

      </div>
    </div>

    <!-- ── Diagonal separator → warm-grey ── -->
    <div class="absolute bottom-0 inset-x-0 h-16 lg:h-20 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <polygon points="0,60 1440,0 1440,80 0,80" fill="#f5f3ef"/>
      </svg>
    </div>

  </section>
</template>
