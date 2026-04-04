<script setup>
useSeoMeta({
  title: "Terms of Use — d'Market",
  description: "Terms of use for d'Market, the mobile marketplace for local trade across Sub-Saharan Africa.",
  ogTitle: "Terms of Use — d'Market",
  ogDescription: "Terms of use for d'Market, the mobile marketplace for local trade across Sub-Saharan Africa.",
  ogUrl: 'https://dev.getondamarket.com/terms',
  ogType: 'website',
  ogSiteName: "d'Market",
})

useHead({
  link: [{ rel: 'canonical', href: 'https://dev.getondamarket.com/terms' }],
})
</script>

<template>
  <div class="min-h-screen bg-charcoal-950 text-white">
    <div class="max-w-3xl mx-auto px-5 lg:px-8 py-24">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-150 mb-12">
        ← Back to d'Market
      </NuxtLink>
      <h1 class="text-3xl font-bold text-white mb-6">Terms of Use</h1>
      <p class="text-neutral-400 text-base leading-relaxed mb-8">
        Our full terms of use are being finalised ahead of launch. If you have any questions in the meantime, please get in touch.
      </p>
      <a href="mailto:hello@getondamarket.com" class="text-brand-orange hover:underline">
        hello@getondamarket.com
      </a>
    </div>
  </div>
</template>
