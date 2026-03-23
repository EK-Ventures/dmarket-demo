<script setup lang="ts">
const isScrolled = ref(false)
const isMobileOpen = ref(false)

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Traders',  href: '#for-traders' },
  { label: 'For Investors', href: '#for-investors' },
  { label: 'About',        href: '#about' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 8
}

function closeMenu() {
  isMobileOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300"
    :class="isScrolled ? 'shadow-sm' : ''"
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

      <!-- Logo -->
      <a href="/" class="flex-shrink-0" aria-label="d'Market home">
        <span class="text-xl font-extrabold tracking-tight text-navy-900">
          d<span class="text-terracotta-500">'</span>Market
        </span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden items-center gap-8 lg:flex" role="list">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-navy-700 transition-colors hover:text-terracotta-500"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <div class="hidden lg:block">
        <a
          href="#register-interest"
          class="inline-flex items-center rounded-md bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-500"
        >
          Register Interest
        </a>
      </div>

      <!-- Mobile: hamburger -->
      <button
        class="flex items-center justify-center rounded-md p-2 text-navy-700 transition-colors hover:bg-warm-grey lg:hidden"
        :aria-expanded="isMobileOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation"
        @click="isMobileOpen = !isMobileOpen"
      >
        <svg v-if="!isMobileOpen" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-if="isMobileOpen"
        id="mobile-menu"
        class="border-t border-navy-100 bg-white px-6 pb-6 pt-4 lg:hidden"
      >
        <ul class="flex flex-col gap-1" role="list">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-md px-3 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-warm-grey hover:text-navy-900"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <div class="mt-4 border-t border-navy-100 pt-4">
          <a
            href="#register-interest"
            class="block rounded-md bg-terracotta-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-terracotta-600"
            @click="closeMenu"
          >
            Register Interest
          </a>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Spacer so page content doesn't sit under the fixed nav -->
  <div class="h-[73px]" aria-hidden="true" />
</template>
