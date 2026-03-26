<script setup lang="ts">
const features = [
  'Ratings and reviews',
  'Verified trader profiles',
  'Integrity-led incentives',
  'Visibility for reliable sellers',
  'Transparent trading history signals',
]
</script>

<template>
  <section id="trust" class="bg-warm-grey py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: copy -->
        <div class="space-y-6">
          <h2 class="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
            Trust is part of the product
          </h2>
          <p class="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            In fragmented local markets, trust matters as much as discovery. d'Market is designed to help reliable traders build reputation and help buyers make better decisions.
          </p>

          <!-- Feature list -->
          <ul class="space-y-3 pt-2">
            <li
              v-for="feature in features"
              :key="feature"
              class="flex items-center gap-3"
            >
              <UIcon name="i-heroicons-check-circle" class="size-5 text-green-500 flex-shrink-0" />
              <span class="text-charcoal-700 font-medium text-sm sm:text-base">{{ feature }}</span>
            </li>
          </ul>

          <!-- Closing line -->
          <p class="text-charcoal-500 italic text-sm sm:text-base border-t border-charcoal-200 pt-6 mt-6">
            The goal is simple: reward consistency, reduce uncertainty, and make local trade easier to trust.
          </p>
        </div>

        <!-- Right: trust card mockup -->
        <div class="relative flex items-center justify-center py-8">

          <!-- Background card (depth effect) -->
          <div
            class="absolute inset-0 bg-white rounded-2xl shadow-sm rotate-2 translate-y-3 opacity-40"
            aria-hidden="true"
          />

          <!-- Main card -->
          <div class="relative bg-white rounded-2xl shadow-md p-6 w-full max-w-sm">

            <!-- Trader header -->
            <div class="flex items-center gap-4 mb-5">
              <div class="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <span class="text-orange-600 font-bold text-lg">A</span>
              </div>
              <div>
                <p class="font-semibold text-charcoal-900">Amara's Fresh Produce</p>
                <p class="text-xs text-charcoal-400">Lagos Market, Nigeria</p>
              </div>
            </div>

            <!-- Rating row -->
            <div class="flex items-center gap-2 mb-3">
              <div class="flex items-center gap-0.5">
                <UIcon
                  v-for="i in 5"
                  :key="i"
                  name="i-heroicons-star-solid"
                  class="size-4 text-orange-400"
                />
              </div>
              <span class="text-sm font-semibold text-charcoal-900">4.9</span>
              <span class="text-xs text-charcoal-400">(128 reviews)</span>
            </div>

            <!-- Verified badge -->
            <div class="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              <UIcon name="i-heroicons-check-badge" class="size-3.5" />
              Verified trader
            </div>

            <!-- Stats -->
            <div class="border-t border-charcoal-100 pt-4 space-y-2.5">
              <div class="flex items-center gap-2.5 text-sm text-charcoal-600">
                <UIcon name="i-heroicons-arrow-path" class="size-4 text-charcoal-300 flex-shrink-0" />
                <span>247 completed trades</span>
              </div>
              <div class="flex items-center gap-2.5 text-sm text-charcoal-600">
                <UIcon name="i-heroicons-calendar-days" class="size-4 text-charcoal-300 flex-shrink-0" />
                <span>Member since January 2024</span>
              </div>
              <div class="flex items-start gap-2.5 text-sm text-charcoal-500 italic">
                <UIcon name="i-heroicons-chat-bubble-left" class="size-4 text-charcoal-300 flex-shrink-0 mt-0.5" />
                <span>"Always fresh produce, very reliable. Will buy again."</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
