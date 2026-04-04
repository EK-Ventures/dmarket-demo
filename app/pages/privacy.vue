<script setup>
useSeoMeta({
  title: "Privacy Policy — d'Market",
  description: "Privacy policy for d'Market, the mobile marketplace for local trade across Sub-Saharan Africa.",
  ogTitle: "Privacy Policy — d'Market",
  ogDescription: "Privacy policy for d'Market, the mobile marketplace for local trade across Sub-Saharan Africa.",
  ogUrl: 'https://dev.getondamarket.com/privacy',
  ogType: 'website',
  ogSiteName: "d'Market",
})

useHead({
  link: [{ rel: 'canonical', href: 'https://dev.getondamarket.com/privacy' }],
})
</script>

<template>
  <div class="min-h-screen bg-charcoal-950 text-white">
    <div class="max-w-3xl mx-auto px-5 lg:px-8 py-24">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-150 mb-12">
        ← Back to d'Market
      </NuxtLink>
      <h1 class="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
      <p class="text-neutral-400 text-base leading-relaxed mb-8">
        Our full privacy policy is being finalised ahead of launch. If you have any questions about how we handle your data in the meantime, please get in touch.
      </p>
      <a href="mailto:hello@getondamarket.com" class="text-brand-orange hover:underline">
        hello@getondamarket.com
      </a>
    </div>
  </div>
</template>
