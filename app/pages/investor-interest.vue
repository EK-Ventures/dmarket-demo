<script setup>
import logoLight from '~/assets/img/logo-light.svg'
import logoDark from '~/assets/img/logo-dark.svg'
import { useScrollReveal } from '~/composables/useScrollReveal'

useHead({
  title: "Investor & NED Interest — d'Market",
  meta: [
    {
      name: 'description',
      content: "Register your interest as an investor, NED or strategic supporter for d'Market's pre-seed SEIS round.",
    },
  ],
})

const { containerRef } = useScrollReveal()

const geographies = [
  'United Kingdom', 'Europe', 'United States', 'Middle East',
  'Africa', 'Asia-Pacific', 'Other',
]

const interestTypes = [
  'Investor',
  'Angel investor',
  'Strategic investor',
  'Non-executive director (NED)',
  'Advisor',
  'Strategic partner',
  'Other',
]

const nextStepOptions = [
  'Introductory meeting with the team',
  'Investor materials / deck',
  'Pre-seed SEIS round information',
  'NED / advisory discussion',
  'General updates as d\'Market develops',
]

const form = reactive({
  name: '',
  organisation: '',
  role: '',
  email: '',
  phone: '',
  interestType: '',
  geography: '',
  whyInterested: '',
  nextSteps: [],
  linkedIn: '',
})

const errors = reactive({})
const submitted = ref(false)
const submitting = ref(false)

function validate() {
  const e = {}
  if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
  if (!form.interestType) e.interestType = 'Please select your nature of interest.'
  if (!form.geography) e.geography = 'Please select your geography.'
  if (!form.whyInterested.trim() || form.whyInterested.trim().length < 20) e.whyInterested = 'Please share a little more — at least a sentence.'
  if (!form.nextSteps.length) e.nextSteps = 'Please select at least one next step.'
  Object.keys(errors).forEach(k => delete errors[k])
  Object.assign(errors, e)
  return Object.keys(e).length === 0
}

async function submit() {
  if (!validate()) return
  submitting.value = true
  await new Promise(r => setTimeout(r, 700))
  submitting.value = false
  submitted.value = true
  await nextTick()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const firstName = computed(() => form.name.trim().split(' ')[0] || 'there')
</script>

<template>
  <div>

    <!-- ─── HEADER ────────────────────────────────────────────── -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.07)]">
      <div class="max-w-5xl mx-auto px-5 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-[72px]">
          <a href="/" aria-label="d'Market home" class="flex-shrink-0">
            <img :src="logoLight" alt="d'Market" class="h-7 lg:h-8 w-auto" />
          </a>
          <a
            href="/"
            class="flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-charcoal-950 transition-colors duration-150"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to home
          </a>
        </div>
      </div>
    </header>

    <main ref="containerRef">

      <!-- ─── HERO ───────────────────────────────────────────── -->
      <section class="bg-[#123940] py-8 lg:py-10 relative overflow-hidden">
        <div
          class="absolute inset-0 pointer-events-none opacity-[0.03]"
          style="background-image: url('/img/background-pattern.png'); background-size: 320px;"
          aria-hidden="true"
        />
        <div
          class="absolute top-0 right-0 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style="background: radial-gradient(ellipse, rgba(244,128,17,0.09) 0%, transparent 70%); transform: translate(30%, -20%);"
          aria-hidden="true"
        />
        <div
          class="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style="background: radial-gradient(ellipse, rgba(45,137,149,0.10) 0%, transparent 70%); transform: translate(-30%, 20%);"
          aria-hidden="true"
        />
        <div class="relative max-w-5xl mx-auto px-5 lg:px-8">
          <div class="max-w-2xl reveal">
            <p class="text-xs font-bold tracking-[0.12em] uppercase text-orange-400 mb-2">
              Investor &amp; NED Interest &nbsp;·&nbsp; Pre-Seed SEIS Round
            </p>
            <h1 class="text-2xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.08]">
              Register investor / NED interest.
            </h1>
            <p class="mt-3 text-sm text-charcoal-300 leading-relaxed max-w-xl">
              d'Market is engaging aligned investors, non-executive directors and strategic supporters as it
              progresses through its pre-seed SEIS round. If you are considering involvement at this stage,
              we'd like to hear from you.
            </p>
            <div class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span class="text-xs text-charcoal-400">UK-based venture</span>
              <span class="w-1 h-1 rounded-full bg-charcoal-700 flex-shrink-0" aria-hidden="true" />
              <span class="text-xs text-charcoal-400">Research-led</span>
              <span class="w-1 h-1 rounded-full bg-charcoal-700 flex-shrink-0" aria-hidden="true" />
              <span class="text-xs text-charcoal-400">SEIS Advance Assurance granted</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── CONTEXT STRIP ─────────────────────────────────── -->
      <section class="bg-charcoal-900 py-5 lg:py-6">
        <div class="max-w-5xl mx-auto px-5 lg:px-8">
          <ul class="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-8 lg:gap-12">
            <li class="flex items-center gap-2.5">
              <svg class="w-4 h-4 flex-shrink-0" style="color: rgba(45,137,149,0.7);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.96 8.96 0 0 0 .284 2.253" />
              </svg>
              <span class="text-xs font-medium text-charcoal-200">Mobile-first marketplace for local trade across Sub-Saharan Africa</span>
            </li>
            <li class="hidden sm:block text-charcoal-600" aria-hidden="true">·</li>
            <li class="flex items-center gap-2.5">
              <svg class="w-4 h-4 flex-shrink-0" style="color: rgba(45,137,149,0.7);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <span class="text-xs font-medium text-charcoal-200">Built for informal traders and real-world commerce</span>
            </li>
            <li class="hidden sm:block text-charcoal-600" aria-hidden="true">·</li>
            <li class="flex items-center gap-2.5">
              <svg class="w-4 h-4 flex-shrink-0" style="color: rgba(45,137,149,0.7);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
              <span class="text-xs font-medium text-charcoal-200">Pre-launch business with scalable commercial potential</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- ─── FORM ───────────────────────────────────────────── -->
      <section class="bg-warm-grey py-16 lg:py-20">
        <div class="max-w-2xl mx-auto px-5 lg:px-8">

          <!-- Section heading -->
          <div class="reveal text-center mb-8">
            <h2 class="text-2xl lg:text-3xl font-extrabold text-charcoal-950 tracking-tight">
              Tell us about your interest.
            </h2>
            <p class="mt-2 text-base text-neutral-500">
              We only ask what's relevant at this stage.
            </p>
          </div>

          <!-- Form card -->
          <div class="reveal bg-white rounded-2xl border border-neutral-200 shadow-sm p-7 lg:p-10">

            <!-- SUCCESS STATE -->
            <Transition
              enter-active-class="transition-opacity duration-400 ease-out"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
            >
              <div v-if="submitted" class="text-center py-6" aria-live="polite">
                <div class="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mx-auto mb-6">
                  <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 class="text-2xl lg:text-3xl font-extrabold text-charcoal-950 tracking-tight">
                  Thank you, {{ firstName }}.
                </h3>
                <p class="mt-4 text-base text-neutral-700 leading-relaxed max-w-md mx-auto">
                  We've received your expression of interest. A member of the d'Market team will review
                  your submission and follow up where appropriate. We look forward to exploring whether
                  there's alignment.
                </p>
                <p class="mt-5 text-sm text-charcoal-400 italic">
                  — The d'Market team
                </p>
                <a
                  href="/"
                  class="inline-flex items-center gap-1.5 mt-8 text-sm font-medium text-charcoal-500 hover:text-charcoal-950 transition-colors duration-150"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  Back to d'Market home
                </a>
              </div>
            </Transition>

            <!-- FORM FIELDS -->
            <form v-if="!submitted" novalidate @submit.prevent="submit">

              <!-- SECTION A: About you -->
              <div class="space-y-5">
                <p class="text-xs font-bold tracking-widest uppercase text-charcoal-400">About you</p>

                <!-- Full name -->
                <div>
                  <label for="name" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Full name <span class="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    autocomplete="name"
                    aria-required="true"
                    :aria-invalid="!!errors.name"
                    :aria-describedby="errors.name ? 'name-error' : undefined"
                    class="w-full rounded-xl border px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    :class="errors.name ? 'border-red-400' : 'border-neutral-200'"
                    placeholder="e.g. James Okafor"
                  />
                  <p v-if="errors.name" id="name-error" role="alert" class="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.name }}
                  </p>
                </div>

                <!-- Organisation -->
                <div>
                  <label for="organisation" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Organisation / firm <span class="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="organisation"
                    v-model="form.organisation"
                    type="text"
                    autocomplete="organization"
                    class="w-full rounded-xl border border-neutral-200 px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="e.g. Kestrel Ventures, Independent"
                  />
                </div>

                <!-- Role -->
                <div>
                  <label for="role" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Role / title <span class="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="role"
                    v-model="form.role"
                    type="text"
                    autocomplete="organization-title"
                    class="w-full rounded-xl border border-neutral-200 px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="e.g. Partner, Angel Investor"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Email address <span class="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    aria-required="true"
                    :aria-invalid="!!errors.email"
                    :aria-describedby="errors.email ? 'email-error' : undefined"
                    class="w-full rounded-xl border px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    :class="errors.email ? 'border-red-400' : 'border-neutral-200'"
                    placeholder="e.g. james@example.com"
                  />
                  <p v-if="errors.email" id="email-error" role="alert" class="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.email }}
                  </p>
                </div>

                <!-- Phone -->
                <div>
                  <label for="phone" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Phone number <span class="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    autocomplete="tel"
                    aria-describedby="phone-hint"
                    class="w-full rounded-xl border border-neutral-200 px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="e.g. +44 7700 000 000"
                  />
                  <p id="phone-hint" class="mt-1.5 text-xs text-neutral-500">For introductory calls only.</p>
                </div>
              </div>

              <!-- SECTION B: Nature of interest -->
              <div class="mt-8 pt-7 border-t border-neutral-100 space-y-5">
                <p class="text-xs font-bold tracking-widest uppercase text-charcoal-400">Nature of interest</p>

                <fieldset>
                  <legend class="block text-sm font-semibold text-charcoal-900 mb-3">
                    How would you describe your interest? <span class="text-orange-500" aria-hidden="true">*</span>
                  </legend>
                  <div
                    role="group"
                    :aria-invalid="!!errors.interestType"
                    :aria-describedby="errors.interestType ? 'interest-type-error' : undefined"
                    class="space-y-2.5"
                  >
                    <label v-for="opt in interestTypes" :key="opt" class="flex items-center gap-3 cursor-pointer group">
                      <input
                        v-model="form.interestType"
                        type="radio"
                        :value="opt"
                        aria-required="true"
                        class="w-4 h-4 border-neutral-300 text-orange-500 focus:ring-orange-400 focus:ring-offset-0 cursor-pointer"
                      />
                      <span class="text-sm text-charcoal-900 group-hover:text-charcoal-950">{{ opt }}</span>
                    </label>
                  </div>
                  <p v-if="errors.interestType" id="interest-type-error" role="alert" class="mt-2 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.interestType }}
                  </p>
                </fieldset>
              </div>

              <!-- SECTION C: Context -->
              <div class="mt-8 pt-7 border-t border-neutral-100 space-y-5">
                <p class="text-xs font-bold tracking-widest uppercase text-charcoal-400">Context</p>

                <!-- Geography -->
                <div>
                  <label for="geography" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Geography / base <span class="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <div class="relative">
                    <select
                      id="geography"
                      v-model="form.geography"
                      aria-required="true"
                      :aria-invalid="!!errors.geography"
                      :aria-describedby="errors.geography ? 'geography-error' : undefined"
                      class="w-full appearance-none rounded-xl border px-4 py-3 text-base bg-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 pr-10"
                      :class="[errors.geography ? 'border-red-400' : 'border-neutral-200', !form.geography ? 'text-neutral-400' : 'text-charcoal-950']"
                    >
                      <option value="" disabled>Select your geography</option>
                      <option v-for="g in geographies" :key="g" :value="g">{{ g }}</option>
                    </select>
                    <svg class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  <p v-if="errors.geography" id="geography-error" role="alert" class="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.geography }}
                  </p>
                </div>

                <!-- Why interested -->
                <div>
                  <label for="why-interested" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Why are you interested in d'Market? <span class="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="why-interested"
                    v-model="form.whyInterested"
                    rows="4"
                    maxlength="600"
                    aria-required="true"
                    :aria-invalid="!!errors.whyInterested"
                    :aria-describedby="errors.whyInterested ? 'why-error' : 'why-hint'"
                    class="w-full rounded-xl border px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 resize-none transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    :class="errors.whyInterested ? 'border-red-400' : 'border-neutral-200'"
                    placeholder="We're looking for aligned interest — please share briefly what draws you to d'Market at this stage."
                  />
                  <p id="why-hint" class="mt-1.5 text-xs text-neutral-500">Brief and honest is ideal.</p>
                  <p v-if="errors.whyInterested" id="why-error" role="alert" class="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.whyInterested }}
                  </p>
                </div>
              </div>

              <!-- SECTION D: Next steps -->
              <div class="mt-8 pt-7 border-t border-neutral-100 space-y-5">
                <p class="text-xs font-bold tracking-widest uppercase text-charcoal-400">Next steps</p>

                <fieldset>
                  <legend class="block text-sm font-semibold text-charcoal-900 mb-3">
                    What would you like next? <span class="text-orange-500" aria-hidden="true">*</span>
                  </legend>
                  <div
                    role="group"
                    :aria-invalid="!!errors.nextSteps"
                    :aria-describedby="errors.nextSteps ? 'next-steps-error' : undefined"
                    class="space-y-2.5"
                  >
                    <label v-for="opt in nextStepOptions" :key="opt" class="flex items-center gap-3 cursor-pointer group">
                      <input
                        v-model="form.nextSteps"
                        type="checkbox"
                        :value="opt"
                        class="w-4 h-4 border-neutral-300 text-orange-500 focus:ring-orange-400 focus:ring-offset-0 rounded cursor-pointer"
                      />
                      <span class="text-sm text-charcoal-900 group-hover:text-charcoal-950">{{ opt }}</span>
                    </label>
                  </div>
                  <p v-if="errors.nextSteps" id="next-steps-error" role="alert" class="mt-2 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.nextSteps }}
                  </p>
                </fieldset>
              </div>

              <!-- SECTION E: Optional -->
              <div class="mt-8 pt-7 border-t border-neutral-100 space-y-5">
                <p class="text-xs font-bold tracking-widest uppercase text-charcoal-400">Optional</p>

                <div>
                  <label for="linked-in" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    LinkedIn profile or website <span class="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="linked-in"
                    v-model="form.linkedIn"
                    type="url"
                    class="w-full rounded-xl border border-neutral-200 px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="e.g. linkedin.com/in/yourname"
                  />
                </div>
              </div>

              <!-- SUBMIT -->
              <div class="mt-8 pt-7 border-t border-neutral-100">
                <button
                  type="submit"
                  :disabled="submitting"
                  class="w-full flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white rounded-xl font-semibold text-base shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg v-if="submitting" class="animate-spin w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  <span>{{ submitting ? 'Submitting…' : 'Submit interest' }}</span>
                  <svg v-if="!submitting" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

            </form>
          </div>

          <!-- REASSURANCE NOTE -->
          <div class="reveal mt-12">
            <div class="relative rounded-2xl overflow-hidden" style="background: linear-gradient(135deg, #0f2e33 0%, #123940 60%, #0d2830 100%);">
              <!-- Subtle teal glow inside card -->
              <div
                class="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                style="background: radial-gradient(ellipse, rgba(45,137,149,0.15) 0%, transparent 70%); transform: translate(30%, -30%);"
                aria-hidden="true"
              />
              <!-- Thin orange top border line -->
              <div class="absolute top-0 left-0 right-0 h-px" style="background: linear-gradient(90deg, transparent, rgba(244,128,17,0.4), transparent);" aria-hidden="true" />

              <div class="relative px-8 py-7 lg:px-10 lg:py-8">
                <div class="flex flex-col sm:flex-row sm:items-start gap-6 lg:gap-10">
                  <!-- Left: label + icon -->
                  <div class="flex-shrink-0 flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: rgba(45,137,149,0.15); border: 1px solid rgba(45,137,149,0.25);">
                      <svg class="w-4 h-4" style="color: rgba(45,137,149,0.8);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    </div>
                    <p class="text-xs font-bold tracking-widest uppercase text-charcoal-400 whitespace-nowrap">A note on this page</p>
                  </div>
                  <!-- Right: items in 2-col grid -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 flex-1">
                    <div class="flex items-start gap-2.5">
                      <svg class="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <p class="text-xs text-charcoal-300 leading-relaxed">Early expressions of interest only</p>
                    </div>
                    <div class="flex items-start gap-2.5">
                      <svg class="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <p class="text-xs text-charcoal-300 leading-relaxed">Reviewed directly by the team</p>
                    </div>
                    <div class="flex items-start gap-2.5">
                      <svg class="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <p class="text-xs text-charcoal-300 leading-relaxed">d'Market is pre-launch and in development</p>
                    </div>
                    <div class="flex items-start gap-2.5">
                      <svg class="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <p class="text-xs text-charcoal-300 leading-relaxed">Details treated confidentially</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CREDIBILITY PANEL -->
          <div class="reveal mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <!-- Pre-seed SEIS -->
            <div class="relative rounded-2xl overflow-hidden p-5" style="background: linear-gradient(135deg, #fff 0%, #f8f6f2 100%); border: 1px solid rgba(0,0,0,0.06);">
              <div class="absolute top-0 left-0 w-full h-0.5" style="background: linear-gradient(90deg, rgba(244,128,17,0.5), rgba(244,128,17,0.1));" aria-hidden="true" />
              <p class="text-xl font-extrabold text-charcoal-950 tracking-tight leading-none">SEIS</p>
              <p class="text-xs font-semibold text-orange-500 mt-1">Pre-seed raise</p>
              <p class="text-xs text-neutral-400 mt-1.5 leading-relaxed">Advance Assurance granted</p>
            </div>
            <!-- UK-based -->
            <div class="relative rounded-2xl overflow-hidden p-5" style="background: linear-gradient(135deg, #fff 0%, #f8f6f2 100%); border: 1px solid rgba(0,0,0,0.06);">
              <div class="absolute top-0 left-0 w-full h-0.5" style="background: linear-gradient(90deg, rgba(45,137,149,0.5), rgba(45,137,149,0.1));" aria-hidden="true" />
              <p class="text-xl font-extrabold text-charcoal-950 tracking-tight leading-none">UK</p>
              <p class="text-xs font-semibold mt-1" style="color: rgba(45,137,149,0.9);">Based &amp; registered</p>
              <p class="text-xs text-neutral-400 mt-1.5 leading-relaxed">England &amp; Wales</p>
            </div>
            <!-- Research-led -->
            <div class="relative rounded-2xl overflow-hidden p-5" style="background: linear-gradient(135deg, #fff 0%, #f8f6f2 100%); border: 1px solid rgba(0,0,0,0.06);">
              <div class="absolute top-0 left-0 w-full h-0.5" style="background: linear-gradient(90deg, rgba(244,128,17,0.5), rgba(244,128,17,0.1));" aria-hidden="true" />
              <p class="text-xl font-extrabold text-charcoal-950 tracking-tight leading-none">R&amp;D</p>
              <p class="text-xs font-semibold text-orange-500 mt-1">Research-led</p>
              <p class="text-xs text-neutral-400 mt-1.5 leading-relaxed">Validation-first approach</p>
            </div>
            <!-- Engaging now -->
            <div class="relative rounded-2xl overflow-hidden p-5" style="background: linear-gradient(135deg, #fff 0%, #f8f6f2 100%); border: 1px solid rgba(0,0,0,0.06);">
              <div class="absolute top-0 left-0 w-full h-0.5" style="background: linear-gradient(90deg, rgba(45,137,149,0.5), rgba(45,137,149,0.1));" aria-hidden="true" />
              <div class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse flex-shrink-0" aria-hidden="true" />
                <p class="text-xl font-extrabold text-charcoal-950 tracking-tight leading-none">Live</p>
              </div>
              <p class="text-xs font-semibold mt-1" style="color: rgba(45,137,149,0.9);">Now engaging</p>
              <p class="text-xs text-neutral-400 mt-1.5 leading-relaxed">Investors &amp; advisors</p>
            </div>
          </div>

        </div>
      </section>

      <!-- ─── PRE-FOOTER STRIP ──────────────────────────────── -->
      <section class="bg-[#123940] py-5 lg:py-6 relative overflow-hidden">
        <div
          class="absolute top-0 right-0 w-[500px] h-[300px] rounded-full blur-[120px] pointer-events-none"
          style="background: radial-gradient(ellipse, rgba(244,128,17,0.07) 0%, transparent 70%); transform: translate(30%, -20%);"
          aria-hidden="true"
        />
        <div
          class="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full blur-[100px] pointer-events-none"
          style="background: radial-gradient(ellipse, rgba(45,137,149,0.10) 0%, transparent 70%); transform: translate(-30%, 20%);"
          aria-hidden="true"
        />
        <div class="relative max-w-5xl mx-auto px-5 lg:px-8">
          <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <div class="flex items-center gap-2 flex-shrink-0">
              <svg class="w-4 h-4" style="color: rgba(45,137,149,0.7);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <span class="text-xs font-bold tracking-widest uppercase text-charcoal-400">Investor expressions of interest only</span>
            </div>
            <span class="hidden sm:block text-charcoal-700" aria-hidden="true">·</span>
            <ul class="flex flex-wrap gap-x-5 gap-y-1.5">
              <li class="flex items-center gap-1.5 text-xs text-charcoal-400">
                <svg class="w-3.5 h-3.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
                No commitment at this stage
              </li>
              <li class="flex items-center gap-1.5 text-xs text-charcoal-400">
                <svg class="w-3.5 h-3.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                Treated in confidence
              </li>
              <li class="flex items-center gap-1.5 text-xs text-charcoal-400">
                <svg class="w-3.5 h-3.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                Follow-up at the team's discretion
              </li>
              <li class="flex items-center gap-1.5 text-xs text-charcoal-400">
                <svg class="w-3.5 h-3.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                Withdraw interest at any time
              </li>
            </ul>
          </div>
        </div>
      </section>

    </main>

    <LandingAppFooter />

  </div>
</template>
