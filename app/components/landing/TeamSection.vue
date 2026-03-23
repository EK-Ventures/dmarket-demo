<template>
  <section id="about" class="bg-cream">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

      <!-- Label + Headline -->
      <p class="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-terracotta-500">
        The Team
      </p>
      <h2 class="text-center text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
        Founded by People Who Know This Market.
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-navy-600">
        We've worked in, researched, and built for Sub-Saharan markets. This isn't a hypothesis — it's lived experience.
      </p>

      <!-- Team grid -->
      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="member in team"
          :key="member.name"
          class="group flex flex-col items-start rounded-2xl bg-white p-8 ring-1 ring-navy-100 transition-shadow hover:shadow-md"
        >
          <!-- Avatar -->
          <div class="relative mb-6">
            <div
              class="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full ring-4 ring-cream"
              :class="member.avatarBg"
            >
              <!-- Swap for NuxtImg when photo assets are ready -->
              <span class="text-2xl font-extrabold text-white">{{ initials(member.name) }}</span>
            </div>
            <!-- LinkedIn badge -->
            <a
              v-if="member.linkedin"
              :href="member.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-navy-700 text-white ring-2 ring-cream transition-colors hover:bg-navy-900"
              :aria-label="`${member.name} on LinkedIn`"
            >
              <!-- LinkedIn icon -->
              <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <!-- Name + title -->
          <p class="text-base font-bold text-navy-900">{{ member.name }}</p>
          <p class="mt-0.5 text-sm font-medium text-terracotta-500">{{ member.title }}</p>

          <!-- Bio -->
          <p class="mt-4 text-sm leading-relaxed text-navy-600">{{ member.bio }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
function initials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

const team = [
  {
    name: 'Founder Name',
    title: 'CEO & Co-Founder',
    bio: 'Background in [relevant field]. Previously [relevant experience]. Deep roots in Sub-Saharan markets through [connection]. Based in London.',
    linkedin: '#',
    avatarBg: 'bg-navy-900',
  },
  {
    name: 'Founder Name',
    title: 'CTO & Co-Founder',
    bio: 'Background in [relevant field]. Previously [relevant experience]. Deep roots in Sub-Saharan markets through [connection]. Based in London.',
    linkedin: '#',
    avatarBg: 'bg-terracotta-500',
  },
  {
    name: 'Advisor Name',
    title: 'Strategic Advisor',
    bio: 'Background in [relevant field]. Previously [relevant experience]. Deep roots in Sub-Saharan markets through [connection]. Based in London.',
    linkedin: '#',
    avatarBg: 'bg-navy-700',
  },
]
</script>
