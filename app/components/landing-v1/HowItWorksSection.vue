<script setup lang="ts">
const steps = [
  {
    icon: 'i-heroicons-pencil-square',
    title: 'List what you sell or offer',
    body: 'Fresh produce, household goods, or local services.',
  },
  {
    icon: 'i-heroicons-signal',
    title: 'Get discovered nearby',
    body: 'Buyers can see what\'s available around them in real time.',
  },
  {
    icon: 'i-heroicons-arrows-right-left',
    title: 'Match, connect and trade',
    body: 'Smart matching helps connect supply, demand and availability.',
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Build trust as you grow',
    body: 'Ratings, reviews and reliability signals help good traders stand out.',
  },
]
</script>

<template>
  <section id="how-it-works" class="bg-warm-grey py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Headline -->
      <div class="text-center max-w-xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
          Simple to use.<br class="sm:hidden"> Built for everyday trade.
        </h2>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Connector line - desktop only -->
        <div
          class="hidden md:block absolute top-[2.875rem] left-[14%] right-[14%] h-px bg-charcoal-200"
          aria-hidden="true"
        />

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="relative bg-white rounded-2xl p-6 text-center shadow-sm"
          >
            <!-- Step number badge -->
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-orange-500 text-white text-sm font-bold mb-5 ring-4 ring-warm-grey">
              {{ index + 1 }}
            </div>

            <!-- Icon -->
            <div class="flex justify-center mb-3">
              <UIcon :name="step.icon" class="size-6 text-charcoal-300" />
            </div>

            <!-- Text -->
            <h3 class="text-base font-semibold text-charcoal-900 mb-2">
              {{ step.title }}
            </h3>
            <p class="text-sm text-charcoal-500 leading-relaxed">
              {{ step.body }}
            </p>
          </div>
        </div>
      </div>

      <!-- Microcopy -->
      <p class="text-center text-sm text-charcoal-400 italic mt-10">
        Designed for mobile-first markets and everyday users.
      </p>

    </div>
  </section>
</template>
