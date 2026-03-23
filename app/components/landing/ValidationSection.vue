<template>
  <section id="validation" class="relative overflow-hidden bg-navy-900">

    <!-- Subtle dot texture -->
    <div
      class="pointer-events-none absolute inset-0"
      :style="{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

      <!-- Label -->
      <p class="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-terracotta-400">
        Validation
      </p>

      <!-- Headline -->
      <h2 class="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Built on Evidence. Designed for People.
      </h2>

      <!-- Hero stat -->
      <div class="mx-auto mt-16 max-w-2xl text-center">
        <p class="text-7xl font-extrabold tracking-tight text-white sm:text-8xl lg:text-9xl">
          87<span class="text-terracotta-400">%</span>
        </p>
        <p class="mt-4 text-lg font-medium text-navy-300">
          of traders we spoke to had no digital sales channel of any kind.
        </p>
        <p class="mt-2 text-sm text-navy-500">
          — d'Market Market Research Survey, 2024
        </p>
      </div>

      <!-- Divider -->
      <div class="mx-auto mt-16 h-px max-w-xs bg-gradient-to-r from-transparent via-navy-600 to-transparent" aria-hidden="true" />

      <!-- Quote cards -->
      <div class="mt-16 grid gap-6 sm:grid-cols-2">

        <!-- Quote 1: Trader voice -->
        <figure class="flex flex-col rounded-2xl bg-navy-800/60 p-8 ring-1 ring-white/10 backdrop-blur-sm">
          <!-- Decorative quote mark -->
          <span class="mb-4 font-serif text-5xl leading-none text-terracotta-500/60" aria-hidden="true">"</span>
          <blockquote class="flex-1">
            <p class="text-base leading-relaxed text-navy-200">
              If something like this existed, I would use it every day. Every trader I know would.
            </p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-500/20 ring-1 ring-terracotta-500/30">
              <svg class="h-4 w-4 text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-white">Market trader</p>
              <p class="text-xs text-navy-400">Lagos, Nigeria · Research interview, 2024</p>
            </div>
          </figcaption>
        </figure>

        <!-- Quote 2: Demand-side / buyer voice -->
        <figure class="flex flex-col rounded-2xl bg-navy-800/60 p-8 ring-1 ring-white/10 backdrop-blur-sm">
          <span class="mb-4 font-serif text-5xl leading-none text-terracotta-500/60" aria-hidden="true">"</span>
          <blockquote class="flex-1">
            <p class="text-base leading-relaxed text-navy-200">
              Finding reliable local suppliers is our biggest operational challenge. A trusted platform would change everything.
            </p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-500/20 ring-1 ring-terracotta-500/30">
              <svg class="h-4 w-4 text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-white">SME buyer</p>
              <p class="text-xs text-navy-400">Nairobi, Kenya · Research interview, 2024</p>
            </div>
          </figcaption>
        </figure>

      </div>

      <!-- Research callout -->
      <p class="mx-auto mt-12 max-w-xl text-center text-sm italic leading-relaxed text-navy-500">
        Our platform design is grounded in direct fieldwork conducted across multiple markets in Sub-Saharan Africa.
        We didn't build a product and then look for a market.
      </p>

    </div>
  </section>
</template>
