<script setup>
import logoDark from '~/assets/img/logo-dark.svg'

const navLinks = [
  {label: 'How it works', href: '#how-it-works'},
  {label: 'For traders', href: '#for-traders'},
  {label: 'Validation', href: '#validation'},
  {label: 'For investors', href: '#for-investors'},
  {label: 'Contact', href: 'mailto:hello@dmarket.app'},
]
</script>

<template>
  <footer class="bg-charcoal-950 pt-16 lg:pt-20 pb-8">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

      <!-- Main footer grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr] gap-12 lg:gap-16 pb-12 border-b border-neutral-800">

        <!-- Col 1: Brand -->
        <div>
          <img
              :src="logoDark"
              alt="d'Market"
              class="h-7 w-auto mb-5"
          />
          <p class="text-base font-semibold text-white mb-3">
            Buy local. Sell big.
          </p>
          <p class="text-base text-neutral-400 leading-relaxed max-w-xs">
            d'Market is a UK-based venture building trusted digital infrastructure for local trade across Sub-Saharan
            Africa.
          </p>
        </div>

        <!-- Col 2: Navigation -->
        <div>
          <p class="text-xs font-bold tracking-[0.12em] uppercase text-neutral-500 mb-5">
            Navigation
          </p>
          <nav aria-label="Footer navigation">
            <ul class="space-y-3">
              <li v-for="link in navLinks" :key="link.href">
                <a
                    :href="link.href"
                    class="text-base text-neutral-300 hover:text-white transition-colors duration-150"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Col 3: Contact & Legal -->
        <div>
          <p class="text-xs font-bold tracking-[0.12em] uppercase text-neutral-500 mb-5">
            Contact &amp; Legal
          </p>
          <div class="space-y-3">
            <a
                href="mailto:hello@dmarket.app"
                class="block text-base text-neutral-300 hover:text-white transition-colors duration-150"
            >
              hello@getondamarket.com
            </a>
            <div class="pt-1 space-y-1.5">
              <p class="text-base text-neutral-400">DaMarket Ltd</p>
              <p class="text-sm text-neutral-500">Company No. 16491954</p>
            </div>
            <p class="text-sm text-neutral-500">
              Registered in England &amp; Wales
            </p>
          </div>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p class="text-sm text-neutral-400">
          © 2026 DaMarket Ltd. All rights reserved.
        </p>
        <div class="flex items-center gap-4 pt-1">
          <a href="#" class="text-sm text-neutral-400 hover:text-white transition-colors duration-150">Privacy</a>
          <a href="#" class="text-sm text-neutral-400 hover:text-white transition-colors duration-150">Terms</a>
        </div>
      </div>

    </div>
  </footer>
</template>
