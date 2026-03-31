<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'
import { useCountUp } from '~/composables/useCountUp'

const { containerRef } = useScrollReveal()

const statValues = ['1.2bn', '660m', '~460m']
const { animated: animatedStats, containerRef: statsRef } = useCountUp(statValues)

const stats = [
  {
    label: 'Population across Sub-Saharan Africa',
    note: 'One of the fastest-growing and youngest consumer markets in the world.',
    featured: true,
  },
  {
    label: 'Workers in the informal economy',
    note: 'The majority of daily trade happens outside formal digital infrastructure.',
    featured: false,
  },
  {
    label: 'Smartphone users and growing',
    note: 'Mobile-first behaviour is already the norm — the infrastructure gap is the opportunity.',
    featured: false,
  },
]

const tags = [
  'High-growth market',
  'Mobile-first behaviour',
  'Underserved by existing platforms',
  'Pre-seed stage',
]
</script>

<template>
  <section ref="containerRef" class="bg-white py-20 lg:py-28" id="for-investors">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">
      <div class="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-center">

        <!-- ── Left: Narrative ── -->
        <div class="reveal reveal-left">
          <p class="text-xs font-bold tracking-[0.12em] uppercase text-charcoal-500 mb-4">
            Why this market, why now
          </p>
          <h2 class="text-3xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-[1.08]">
            A large market with everyday demand
          </h2>
          <p class="mt-5 text-lg text-neutral-700 leading-relaxed max-w-xl">
            Africa's informal economy is vast, mobile-first and increasingly digital. Yet local trade remains fragmented, low-visibility and trust-constrained. d'Market is built to serve that gap with a model designed for repeat local use, scalable across markets and categories.
          </p>

          <!-- Supporting signal row -->
          <div class="mt-10 flex flex-wrap gap-3">
            <span
              v-for="tag in tags"
              :key="tag"
              class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-charcoal-50 text-charcoal-700 border border-charcoal-100"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- ── Right: Stat tiles ── -->
        <div ref="statsRef" class="flex flex-col gap-4">
          <div
            v-for="(stat, i) in stats"
            :key="statValues[i]"
            class="reveal relative rounded-2xl border p-6 overflow-hidden hover:-translate-y-0.5 transition-all duration-300"
            :class="stat.featured
              ? 'bg-charcoal-950 border-charcoal-800'
              : 'bg-white border-neutral-200 shadow-sm hover:shadow-md'"
            :style="{ transitionDelay: i * 120 + 'ms' }"
          >
            <!-- Subtle top accent line -->
            <div
              class="absolute top-0 left-6 w-8 h-0.5 rounded-full"
              :class="stat.featured ? 'bg-orange-500' : 'bg-charcoal-200'"
            />

            <p
              class="text-4xl lg:text-5xl font-black tracking-tight leading-none tabular-nums"
              :class="stat.featured ? 'text-white' : 'text-charcoal-950'"
            >
              {{ animatedStats[i] }}
            </p>
            <p
              class="mt-2 text-base font-semibold"
              :class="stat.featured ? 'text-charcoal-200' : 'text-neutral-700'"
            >
              {{ stat.label }}
            </p>
            <p
              class="mt-1.5 text-sm leading-relaxed"
              :class="stat.featured ? 'text-charcoal-400' : 'text-neutral-600'"
            >
              {{ stat.note }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
