<template>
  <section aria-label="Credibility signals" class="border-y border-navy-100 bg-cream">
    <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <ul
        class="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between"
        role="list"
      >
        <li
          v-for="badge in badges"
          :key="badge.label"
          class="flex items-center gap-3"
        >
          <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy-50 ring-1 ring-navy-100">
            <component :is="badge.icon" class="h-4 w-4 text-navy-600" aria-hidden="true" />
          </div>
          <div>
            <p class="text-xs font-semibold text-navy-800">{{ badge.label }}</p>
            <p class="text-xs text-navy-400">{{ badge.sub }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

function icon(d: string | string[]) {
  const paths = Array.isArray(d) ? d : [d]
  return defineComponent({
    render: () => h(
      'svg',
      { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' },
      paths.map(p => h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: p })),
    ),
  })
}

const badges = [
  {
    label: 'UK Registered',
    sub: 'England & Wales',
    icon: icon([
      'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21',
    ]),
  },
  {
    label: 'SEIS Eligible',
    sub: 'Advance assurance in progress',
    icon: icon([
      'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
    ]),
  },
  {
    label: 'Direct Fieldwork',
    sub: 'Multiple Sub-Saharan markets',
    icon: icon([
      'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
      'M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
    ]),
  },
  {
    label: 'Early Waitlist',
    sub: 'Traders registered & growing',
    icon: icon([
      'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
    ]),
  },
  {
    label: 'Experienced Team',
    sub: 'Commercial & technical depth',
    icon: icon([
      'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605',
    ]),
  },
]
</script>
