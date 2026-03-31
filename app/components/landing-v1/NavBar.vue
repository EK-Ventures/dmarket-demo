<script setup lang="ts">
import logoLight from '~/assets/img/logo-light.svg'

const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For traders', href: '#for-traders' },
  { label: 'Validation', href: '#validation' },
  { label: 'For investors', href: '#investors' },
  { label: 'Team', href: '#team' },
]

onMounted(() => {
  const handler = () => { scrolled.value = window.scrollY > 8 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-200 backdrop-blur-sm"
    :class="scrolled ? 'bg-white shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <a href="/" class="flex-shrink-0">
          <img :src="logoLight" alt="d'Market" class="h-8 w-auto" />
        </a>

        <!-- Desktop nav links -->
        <nav class="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-charcoal-700 hover:text-charcoal-900 transition-colors duration-150"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Desktop CTAs -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            href="#register"
            class="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-150"
          >
            Register interest
          </a>
          <a
            href="#investors"
            class="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium text-charcoal-800 border border-charcoal-200 hover:bg-charcoal-50 transition-colors duration-150"
          >
            Investor / NED interest
          </a>
        </div>

        <!-- Mobile: primary CTA + hamburger -->
        <div class="flex lg:hidden items-center gap-2">
          <a
            href="#register"
            class="inline-flex items-center px-3.5 py-2 rounded-xl text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-150"
          >
            Register interest
          </a>
          <button
            type="button"
            class="p-2 rounded-lg text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-50 transition-colors"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="menuOpen"
            @click="menuOpen = !menuOpen"
          >
            <UIcon
              :name="menuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
              class="size-5"
            />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-1 opacity-0"
    >
      <div v-if="menuOpen" class="lg:hidden bg-white border-t border-charcoal-100 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-0.5">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block px-3 py-2.5 rounded-lg text-sm font-medium text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-50 transition-colors"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>
          <div class="flex flex-col gap-2 pt-3 pb-1 border-t border-charcoal-100 mt-2">
            <a
              href="#investors"
              class="inline-flex justify-center items-center px-4 py-2.5 rounded-xl text-sm font-medium text-charcoal-800 border border-charcoal-200 hover:bg-charcoal-50 transition-colors"
              @click="menuOpen = false"
            >
              Investor / NED interest
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
