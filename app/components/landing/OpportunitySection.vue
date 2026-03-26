<script setup lang="ts">
const stats = [
  { number: '1.2bn', label: 'Population across Sub-Saharan Africa' },
  { number: '660m', label: 'Informal economy workers' },
  { number: '460m+', label: 'Smartphone users and growing' },
]
</script>

<template>
  <section id="investors" class="bg-warm-grey py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: narrative -->
        <div class="space-y-6">
          <p class="text-green-600 font-medium italic text-sm">
            The opportunity
          </p>
          <h2 class="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
            A large market with everyday demand
          </h2>
          <p class="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Africa's informal economy is vast, mobile-first and increasingly digital. Yet local trade remains fragmented, low-visibility and trust-constrained. d'Market is built to serve that gap with a model designed for repeat local use, scalable across markets and categories.
          </p>
        </div>

        <!-- Right: stat tiles -->
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          <div
            v-for="stat in stats"
            :key="stat.number"
            class="bg-white rounded-2xl px-6 py-5 flex items-center gap-5 shadow-sm"
          >
            <!-- Orange accent bar -->
            <div class="w-1 self-stretch rounded-full bg-orange-500 flex-shrink-0" aria-hidden="true" />
            <!-- Stat content -->
            <div>
              <p class="text-3xl font-bold text-charcoal-900 tracking-tight leading-none mb-1">
                {{ stat.number }}
              </p>
              <p class="text-sm text-charcoal-500 leading-snug">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
