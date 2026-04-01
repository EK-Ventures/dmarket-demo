<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

const { containerRef } = useScrollReveal()

const blocks = [
  {
    title: 'Multi-country architecture',
    body: 'Built from day one to operate across multiple territories - with localisation, language and market-specific configuration designed into the platform architecture.',
    tag: 'Scalable by design',
    tagStyle: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    dotColor: 'bg-neutral-500',
    iconBg: 'bg-neutral-100',
    iconColor: 'text-neutral-600',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253" />',
  },
  {
    title: 'Subscription-led revenue model',
    body: 'Traders access d\'Market free during onboarding, then move to a flat subscription that covers all core features - creating a predictable, recurring revenue base as the platform scales.',
    tag: 'Recurring revenue',
    tagStyle: 'bg-orange-50 text-orange-600 border-orange-100',
    dotColor: 'bg-orange-400',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />',
  },
  {
    title: 'Community impact built into growth',
    body: 'Social impact is a result of commercial success, not a separate goal. Community benefit mechanisms are aligned with platform growth - better trade outcomes for users directly strengthen d\'Market\'s market position.',
    tag: 'Impact-aligned',
    tagStyle: 'bg-green-50 text-green-700 border-green-100',
    dotColor: 'bg-green-500',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />',
  },
]
</script>

<template>
  <section ref="containerRef" class="relative overflow-hidden bg-warm-grey pt-20 pb-28 lg:pt-28 lg:pb-36">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center reveal mb-16">

        <h2 class="text-3xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-[1.08]">
          Commercially built.<br />Socially meaningful.
        </h2>
        <p class="mt-5 text-lg text-neutral-700 leading-relaxed">
          d'Market is designed as a scalable marketplace business, not a charity model. Revenue is driven through a subscription-led approach for traders, with a free onboarding period to encourage adoption. Social impact is built in through community benefit mechanisms, aligning growth with local uplift.
        </p>
      </div>

      <!-- Three structured blocks -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200">

        <div
          v-for="(block, i) in blocks"
          :key="block.title"
          class="reveal bg-white p-7 lg:p-8 flex flex-col gap-5 hover:bg-neutral-50 transition-colors duration-200"
          :class="i === 0 ? 'rounded-l-2xl' : i === 2 ? 'rounded-r-2xl' : ''"
          :style="{ transitionDelay: i * 120 + 'ms' }"
        >
          <!-- Icon -->
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center"
            :class="block.iconBg"
          >
            <svg
              class="w-8 h-8"
              :class="block.iconColor"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              v-html="block.icon"
            />
          </div>

          <!-- Number label -->
          <span class="text-xs font-bold tracking-[0.12em] uppercase text-neutral-500">
            0{{ i + 1 }}
          </span>

          <!-- Content -->
          <div>
            <h3 class="text-base font-bold text-charcoal-950 leading-snug">
              {{ block.title }}
            </h3>
            <p class="mt-2 text-base text-neutral-700 leading-relaxed">
              {{ block.body }}
            </p>
          </div>

          <!-- Signal tag -->
          <div class="mt-auto">
            <span
              class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full border"
              :class="block.tagStyle"
            >
              <span class="w-1 h-1 rounded-full flex-shrink-0" :class="block.dotColor" />
              {{ block.tag }}
            </span>
          </div>
        </div>

      </div>

    </div>

    <!-- Bottom separator: warm-grey → charcoal-950 (V-peak) -->
    <div class="absolute bottom-0 inset-x-0 h-16 lg:h-20 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <polygon points="0,0 720,50 1440,0 1440,80 0,80" fill="#051315"/>
      </svg>
    </div>
  </section>
</template>
