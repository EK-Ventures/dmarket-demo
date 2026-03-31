<script setup>
import logoLight from '~/assets/img/logo-light.svg'

const isScrolled = ref(false)
const isMobileOpen = ref(false)

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For traders', href: '#for-traders' },
  { label: 'Validation', href: '#validation' },
  { label: 'For investors', href: '#for-investors' },
  { label: 'Team', href: '#team' },
]

function closeMenu() {
  isMobileOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.07)]'
        : 'bg-white',
    ]"
  >
    <div class="max-w-7xl mx-auto px-5 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-[72px]">

        <!-- Logo -->
        <a href="/" class="flex-shrink-0" aria-label="d'Market home">
          <img
            :src="logoLight"
            alt="d'Market"
            class="h-7 lg:h-8 w-auto"
          />
        </a>

        <!-- Desktop Nav Links -->
        <nav class="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="px-3.5 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-50 transition-all duration-150"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Desktop CTAs -->
        <div class="hidden lg:flex items-center gap-2.5">
          <a
            href="#investor"
            class="px-4 py-2 text-sm font-semibold text-charcoal-700 border border-neutral-200 hover:border-charcoal-400 hover:text-charcoal-900 rounded-xl transition-all duration-150 whitespace-nowrap"
          >
            Investor / NED interest
          </a>
          <a
            href="#register"
            class="px-4 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors duration-150 shadow-sm whitespace-nowrap"
          >
            Register interest
          </a>
        </div>

        <!-- Mobile: CTA + Hamburger -->
        <div class="lg:hidden flex items-center gap-2">
          <a
            href="#register"
            class="px-3.5 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors duration-150"
          >
            Register
          </a>
          <button
            type="button"
            class="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 transition-colors duration-150"
            :aria-label="isMobileOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="isMobileOpen"
            @click="isMobileOpen = !isMobileOpen"
          >
            <svg
              v-if="!isMobileOpen"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-if="isMobileOpen"
        class="lg:hidden bg-white border-t border-neutral-100 shadow-lg"
      >
        <!-- Nav links -->
        <nav class="px-5 py-3 space-y-0.5" aria-label="Mobile navigation">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="flex items-center px-3 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors duration-150"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Investor CTA -->
        <div class="px-5 pb-5 pt-2 border-t border-neutral-100">
          <a
            href="#investor"
            class="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-charcoal-700 border border-neutral-200 hover:border-charcoal-400 rounded-xl transition-all duration-150"
            @click="closeMenu"
          >
            Investor / NED interest
          </a>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Spacer to prevent content from hiding behind fixed nav -->
  <div class="h-16 lg:h-[72px]" aria-hidden="true" />
</template>
