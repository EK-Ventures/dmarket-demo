<script setup lang="ts">
import logoDark from '~/assets/img/logo-dark.svg'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For traders', href: '#for-traders' },
  { label: 'Validation', href: '#validation' },
  { label: 'For investors', href: '#investors' },
  { label: 'Contact', href: 'mailto:hello@dmarket.app' },
]
</script>

<template>
  <footer class="bg-charcoal-950 py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Main columns -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

        <!-- Left: brand -->
        <div class="space-y-4">
          <img :src="logoDark" alt="d'Market" class="h-7 w-auto" />
          <p class="text-green-400 italic text-sm font-medium">
            Buy local. Sell big.
          </p>
          <p class="text-white/50 text-sm leading-relaxed max-w-xs">
            d'Market is a UK-based venture building trusted digital infrastructure for local trade across Sub-Saharan Africa.
          </p>
        </div>

        <!-- Middle: navigation -->
        <div>
          <p class="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
            Navigation
          </p>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Right: contact & legal -->
        <div>
          <p class="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
            Contact & Legal
          </p>
          <div class="space-y-3">
            <a
              href="mailto:hello@dmarket.app"
              class="block text-sm text-white/60 hover:text-white transition-colors duration-150"
            >
              hello@dmarket.app
            </a>
            <p class="text-sm text-white/40">DaMarket Ltd</p>
            <p class="text-sm text-white/40">Company No. 16491954</p>
            <div class="flex gap-4 pt-1">
              <a href="#" class="text-sm text-white/40 hover:text-white/70 transition-colors duration-150">Privacy</a>
              <a href="#" class="text-sm text-white/40 hover:text-white/70 transition-colors duration-150">Terms</a>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p class="text-xs text-white/30">
          © 2025 DaMarket Ltd. All rights reserved.
        </p>
        <p class="text-xs text-white/20">
          UK-based venture
        </p>
      </div>

    </div>
  </footer>
</template>
