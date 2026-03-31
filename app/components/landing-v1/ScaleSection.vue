<script setup lang="ts">
const blocks = [
  {
    icon: 'i-heroicons-globe-alt',
    title: 'Multi-country architecture',
    body: 'Designed from day one to scale across markets and territories without rebuilding core infrastructure.',
  },
  {
    icon: 'i-heroicons-currency-dollar',
    title: 'Subscription-led revenue model',
    body: 'Traders subscribe for visibility and features. Free onboarding lowers the barrier to entry and accelerates adoption.',
  },
  {
    icon: 'i-heroicons-arrow-trending-up',
    title: 'Community impact built into growth',
    body: 'Impact is a structural outcome of the model — not a marketing layer. Growth directly benefits the communities it serves.',
  },
]
</script>

<template>
  <section class="bg-white py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Intro -->
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight mb-5">
          Commercially built. Socially meaningful.
        </h2>
        <p class="text-base sm:text-lg text-charcoal-600 leading-relaxed">
          d'Market is designed as a scalable marketplace business, not a charity model. Revenue is driven through a subscription-led approach for traders, with a free onboarding period to encourage adoption. Social impact is built in through community benefit mechanisms, aligning growth with local uplift.
        </p>
      </div>

      <!-- Divider -->
      <hr class="border-charcoal-100 mt-14 mb-12" />

      <!-- Three blocks -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        <div v-for="block in blocks" :key="block.title">
          <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-charcoal-50 mb-5">
            <UIcon :name="block.icon" class="size-5 text-charcoal-500" />
          </div>
          <h3 class="text-base font-semibold text-charcoal-900 mb-2">
            {{ block.title }}
          </h3>
          <p class="text-sm text-charcoal-500 leading-relaxed">
            {{ block.body }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
