<template>
  <section id="who-its-for" aria-label="Who d'Market is for">
    <div class="grid lg:grid-cols-2">

      <!-- ── LEFT: Traders ── -->
      <div id="for-traders" class="relative flex flex-col justify-between overflow-hidden bg-terracotta-500 px-8 py-16 lg:px-16 lg:py-24">

        <!-- Background photo (swap src when asset is ready) -->
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <!-- Placeholder: replace with NuxtImg when photo asset is ready -->
          <div class="h-full w-full bg-terracotta-600 opacity-40" />
        </div>

        <!-- Subtle dot overlay -->
        <div
          class="pointer-events-none absolute inset-0"
          :style="{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }"
          aria-hidden="true"
        />

        <!-- Content -->
        <div class="relative">
          <p class="mb-6 text-xs font-semibold uppercase tracking-widest text-terracotta-100">
            For Traders
          </p>
          <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Grow Your Business Beyond Your Postcode.
          </h2>
          <p class="mt-6 max-w-md text-lg leading-relaxed text-terracotta-100">
            List your goods, reach new buyers, and build a reputation that works for you — all from your phone. No shop front required.
          </p>

          <div class="mt-10">
            <a
              href="#register-interest"
              class="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-terracotta-600 shadow-sm transition-colors hover:bg-terracotta-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join as a Trader
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Bottom proof strip -->
        <div class="relative mt-16 flex flex-wrap gap-8 border-t border-white/20 pt-8">
          <div>
            <p class="text-2xl font-extrabold text-white">Free</p>
            <p class="text-xs text-terracotta-200">To list and get started</p>
          </div>
          <div>
            <p class="text-2xl font-extrabold text-white">Mobile-first</p>
            <p class="text-xs text-terracotta-200">Works on any smartphone</p>
          </div>
          <div>
            <p class="text-2xl font-extrabold text-white">Any category</p>
            <p class="text-xs text-terracotta-200">Produce, goods, services</p>
          </div>
        </div>

      </div>

      <!-- ── RIGHT: Investors ── -->
      <div id="for-investors" class="relative flex flex-col justify-between overflow-hidden bg-navy-900 px-8 py-16 lg:px-16 lg:py-24">

        <!-- Faint grid lines decoration -->
        <svg
          class="pointer-events-none absolute inset-0 h-full w-full text-white opacity-[0.03]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="investor-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#investor-grid)" />
        </svg>

        <!-- Content -->
        <div class="relative">
          <p class="mb-6 text-xs font-semibold uppercase tracking-widest text-terracotta-400">
            For Investors
          </p>
          <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Back the Infrastructure Layer of African Commerce.
          </h2>
          <p class="mt-6 max-w-md text-lg leading-relaxed text-navy-300">
            d'Market is seeking pre-seed investment from experienced individuals and institutions who understand the long-term opportunity in Sub-Saharan digital trade.
          </p>
          <p class="mt-4 max-w-md text-base leading-relaxed text-navy-400">
            The most compelling opportunities are rarely the most familiar ones.
          </p>

          <div class="mt-10">
            <a
              href="#register-interest"
              class="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Investor Enquiries
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Bottom signal strip -->
        <div class="relative mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8">
          <div>
            <p class="text-2xl font-extrabold text-white">Pre-seed</p>
            <p class="text-xs text-navy-400">Round currently open</p>
          </div>
          <div>
            <p class="text-2xl font-extrabold text-white">SEIS</p>
            <p class="text-xs text-navy-400">Advance assurance in progress</p>
          </div>
          <div>
            <p class="text-2xl font-extrabold text-white">UK Ltd</p>
            <p class="text-xs text-navy-400">Registered in England & Wales</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
