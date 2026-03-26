<template>
  <section id="register" class="bg-charcoal-900 py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Headline -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Join d'Market early
        </h2>
      </div>

      <!-- Two panels -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        <!-- Trader panel (primary) -->
        <div class="bg-orange-500 rounded-2xl p-8 lg:p-10 flex flex-col">
          <div class="flex items-center gap-2 mb-6">
            <div class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/20">
              <UIcon name="i-heroicons-storefront" class="size-5 text-white" />
            </div>
            <span class="text-xs font-semibold tracking-widest uppercase text-white/70">
              For traders and partners
            </span>
          </div>
          <p class="text-white text-base sm:text-lg leading-relaxed flex-1 mb-8">
            Be among the first to hear when d'Market launches in your market.
          </p>
          <a
            href="mailto:hello@dmarket.app?subject=Trader Interest"
            class="inline-flex justify-center items-center px-6 py-3 rounded-xl text-sm font-medium bg-white text-orange-600 hover:bg-orange-50 transition-colors duration-150"
          >
            Register your interest
          </a>
        </div>

        <!-- Investor panel (understated) -->
        <div class="bg-white/10 border border-white/20 rounded-2xl p-8 lg:p-10 flex flex-col">
          <div class="flex items-center gap-2 mb-6">
            <div class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10">
              <UIcon name="i-heroicons-banknotes" class="size-5 text-white/70" />
            </div>
            <span class="text-xs font-semibold tracking-widest uppercase text-white/50">
              For investors and NEDs
            </span>
          </div>
          <p class="text-white/80 text-base sm:text-lg leading-relaxed flex-1 mb-6">
            We are engaging aligned investors and experienced advisors for the next stage of growth.
          </p>
          <div class="space-y-3">
            <a
              href="mailto:hello@dmarket.app?subject=Investor Interest"
              class="inline-flex justify-center items-center w-full px-6 py-3 rounded-xl text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition-colors duration-150"
            >
              Investor / NED interest
            </a>
            <p class="flex items-center justify-center gap-1.5 text-xs text-white/40">
              <UIcon name="i-heroicons-shield-check" class="size-3.5" />
              SEIS Advance Assurance granted
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
