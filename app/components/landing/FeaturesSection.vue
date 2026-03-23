<template>
  <section id="features" class="bg-warm-grey">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

      <!-- Label + Headline -->
      <p class="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-terracotta-500">
        Built for Real Markets
      </p>
      <h2 class="text-center text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
        Every Feature Earned from the Ground Up.
      </h2>

      <!-- Bento grid -->
      <div class="mt-16 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <!-- ── HERO CARD: Real-Time Discovery (2 cols × 2 rows) ── -->
        <div
          class="relative overflow-hidden rounded-2xl bg-navy-900 p-8 sm:col-span-2 lg:col-span-2 lg:row-span-2"
          :style="{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '22px 22px' }"
        >
          <!-- Watermark globe icon -->
          <svg
            class="pointer-events-none absolute -bottom-6 -right-6 h-56 w-56 text-white opacity-[0.04]"
            fill="none" viewBox="0 0 24 24" stroke-width="0.6" stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>

          <div class="relative flex h-full flex-col justify-between gap-8">
            <!-- Icon -->
            <div class="relative w-fit">
              <div class="absolute inset-0 animate-ping rounded-full bg-terracotta-500 opacity-20" />
              <div class="relative flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-500/20 ring-1 ring-terracotta-400/40">
                <svg class="h-7 w-7 text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
              </div>
            </div>

            <!-- Content -->
            <div>
              <span class="mb-3 inline-block rounded-full bg-terracotta-500/15 px-3 py-1 text-xs font-semibold text-terracotta-300 ring-1 ring-terracotta-500/20">
                Core Feature
              </span>
              <h3 class="text-2xl font-extrabold leading-snug text-white lg:text-3xl">
                Real-Time Local Discovery
              </h3>
              <p class="mt-3 max-w-md text-base leading-relaxed text-navy-300">
                Buyers find your products as you list them — no waiting, no lag. Every listing is surfaced to nearby buyers the moment it goes live, powered by intelligent location matching.
              </p>
            </div>

            <!-- Stat strip -->
            <div class="flex flex-wrap gap-6 border-t border-white/10 pt-6">
              <div>
                <p class="text-2xl font-extrabold text-white">&lt;2s</p>
                <p class="text-xs text-navy-400">Average listing latency</p>
              </div>
              <div>
                <p class="text-2xl font-extrabold text-white">Local-first</p>
                <p class="text-xs text-navy-400">Radius-based matching</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Dynamic Pricing ── -->
        <div class="flex flex-col gap-5 rounded-2xl bg-cream p-7 ring-1 ring-navy-100">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 ring-1 ring-navy-100">
            <svg class="h-5 w-5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
          </div>
          <!-- Mini bar chart decoration -->
          <svg class="h-8 w-full text-navy-100" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true">
            <rect x="0"  y="18" width="12" height="14" rx="2" fill="currentColor" />
            <rect x="16" y="10" width="12" height="22" rx="2" fill="currentColor" />
            <rect x="32" y="14" width="12" height="18" rx="2" fill="currentColor" />
            <rect x="48" y="4"  width="12" height="28" rx="2" class="text-terracotta-200" fill="currentColor" />
            <rect x="64" y="8"  width="12" height="24" rx="2" fill="currentColor" />
            <rect x="80" y="12" width="12" height="20" rx="2" fill="currentColor" />
            <rect x="96" y="6"  width="12" height="26" rx="2" fill="currentColor" />
            <rect x="112" y="2" width="12" height="30" rx="2" class="text-terracotta-300" fill="currentColor" />
          </svg>
          <div>
            <h3 class="text-base font-bold text-navy-900">Dynamic Pricing Intelligence</h3>
            <p class="mt-2 text-sm leading-relaxed text-navy-600">Smart pricing suggestions reduce spoilage and maximise margins.</p>
          </div>
        </div>

        <!-- ── Ratings & Trust ── -->
        <div class="flex flex-col gap-5 rounded-2xl bg-cream p-7 ring-1 ring-navy-100">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 ring-1 ring-navy-100">
            <svg class="h-5 w-5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </div>
          <!-- Star row decoration -->
          <div class="flex gap-1" aria-hidden="true">
            <span v-for="i in 5" :key="i" class="text-gold-400 text-lg">★</span>
          </div>
          <div>
            <h3 class="text-base font-bold text-navy-900">Ratings & Trust Layer</h3>
            <p class="mt-2 text-sm leading-relaxed text-navy-600">Every transaction builds a reputation. Integrity is rewarded.</p>
          </div>
        </div>

        <!-- ── Multi-Country ── -->
        <div class="flex flex-col gap-5 rounded-2xl bg-cream p-7 ring-1 ring-navy-100">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 ring-1 ring-navy-100">
            <svg class="h-5 w-5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-navy-900">Multi-Country Architecture</h3>
          <p class="text-sm leading-relaxed text-navy-600">Built to scale across borders from day one — not retrofitted later.</p>
        </div>

        <!-- ── Offline-Resilient ── -->
        <div class="flex flex-col gap-5 rounded-2xl bg-cream p-7 ring-1 ring-navy-100">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 ring-1 ring-navy-100">
            <svg class="h-5 w-5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-navy-900">Offline-Resilient Design</h3>
          <p class="text-sm leading-relaxed text-navy-600">Low-bandwidth first. Works on entry-level smartphones.</p>
        </div>

        <!-- ── ACCENT CARD: Incentive Structures (terracotta) ── -->
        <div class="relative overflow-hidden rounded-2xl bg-terracotta-500 p-7">
          <!-- Watermark trophy -->
          <svg
            class="pointer-events-none absolute -bottom-4 -right-4 h-36 w-36 text-white opacity-10"
            fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
          </svg>
          <div class="relative flex h-full flex-col gap-5">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
              <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
              </svg>
            </div>
            <div>
              <h3 class="text-base font-bold text-white">Incentive Structures</h3>
              <p class="mt-2 text-sm leading-relaxed text-terracotta-100">Traders who maintain high standards unlock higher visibility and rewards.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
