<template>
  <footer class="bg-navy-950">
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">

      <!-- Top row -->
      <div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">

        <!-- Logo + tagline -->
        <div class="flex-shrink-0">
          <a href="/" aria-label="d'Market home">
            <span class="text-xl font-extrabold tracking-tight text-white">
              d<span class="text-terracotta-400">'</span>Market
            </span>
          </a>
          <p class="mt-2 max-w-xs text-xs leading-relaxed text-navy-500">
            Mobile-first marketplace connecting Sub-Saharan traders with buyers through real-time discovery and intelligent matching.
          </p>
        </div>

        <!-- Nav columns -->
        <div class="grid grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-16">
          <div>
            <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-navy-400">Platform</p>
            <ul class="space-y-2.5" role="list">
              <li v-for="link in platformLinks" :key="link.label">
                <a :href="link.href" class="text-sm text-navy-400 transition-colors hover:text-white">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-navy-400">Company</p>
            <ul class="space-y-2.5" role="list">
              <li v-for="link in companyLinks" :key="link.label">
                <a :href="link.href" class="text-sm text-navy-400 transition-colors hover:text-white">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Divider -->
      <div class="my-10 h-px bg-navy-800" aria-hidden="true" />

      <!-- Bottom row -->
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <!-- Legal -->
        <div class="space-y-1">
          <p class="text-xs text-navy-500">
            © {{ currentYear }} d'Market Ltd. Registered in England & Wales. Company No. XXXXXXXX
          </p>
          <div class="flex gap-4">
            <a href="/privacy" class="text-xs text-navy-600 transition-colors hover:text-navy-400">Privacy Policy</a>
            <a href="/terms" class="text-xs text-navy-600 transition-colors hover:text-navy-400">Terms of Use</a>
          </div>
        </div>

        <!-- Social -->
        <div class="flex items-center gap-3">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-8 w-8 items-center justify-center rounded-full bg-navy-800 text-navy-400 transition-colors hover:bg-navy-700 hover:text-white"
            :aria-label="social.label"
          >
            <component :is="social.icon" class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const currentYear = new Date().getFullYear()

const platformLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Traders', href: '#for-traders' },
  { label: 'For Investors', href: '#for-investors' },
  { label: 'Register Interest', href: '#register-interest' },
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'The Team', href: '#about' },
  { label: 'Investment', href: '#investment' },
  { label: 'Contact', href: '#register-interest' },
]

function svgIcon(paths: string[]) {
  return defineComponent({
    render: () => h(
      'svg',
      { fill: 'currentColor', viewBox: '0 0 24 24' },
      paths.map(d => h('path', { d })),
    ),
  })
}

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: svgIcon(['M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z']),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: svgIcon(['M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z']),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: svgIcon(['M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z']),
  },
]
</script>
