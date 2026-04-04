<script setup>
import logoLight from '~/assets/img/logo-light.svg'
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: "Register your interest — d'Market",
  description: "Pre-register your interest as a trader on d'Market. Be among the first to hear when d'Market launches in your area.",
  ogTitle: "Register your interest — d'Market",
  ogDescription: "Pre-register your interest as a trader on d'Market. Be among the first to hear when d'Market launches in your area.",
  ogImage: 'https://dev.getondamarket.com/app-shot.png',
  ogUrl: 'https://dev.getondamarket.com/register-interest',
  ogType: 'website',
  ogSiteName: "d'Market",
  twitterCard: 'summary_large_image',
  twitterTitle: "Register your interest — d'Market",
  twitterDescription: "Pre-register your interest as a trader on d'Market. Be among the first to hear when d'Market launches in your area.",
  twitterImage: 'https://dev.getondamarket.com/app-shot.png',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://dev.getondamarket.com/register-interest' }],
})

const { containerRef } = useScrollReveal()

const countries = [
  'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Uganda', 'Tanzania',
  'Rwanda', 'Senegal', "Côte d'Ivoire", 'Ethiopia', 'Zambia', 'Zimbabwe',
  'Mozambique', 'Cameroon', 'Malawi', 'Other',
]

const form = reactive({
  name: '',
  mobile: '',
  email: '',
  country: '',
  city: '',
  whatYouSell: '',
  category: '',
  sellerType: '',
  wantsUpdates: 'yes',
  comments: '',
})

const errors = reactive({})
const submitted = ref(false)
const submitting = ref(false)

function validate() {
  const e = {}
  if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!form.mobile.trim()) e.mobile = 'Please enter your mobile or WhatsApp number.'
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
  if (!form.country) e.country = 'Please select your country.'
  if (!form.city.trim()) e.city = 'Please enter your city, town or area.'
  if (!form.category) e.category = 'Please select a category.'
  if (!form.sellerType) e.sellerType = 'Please select a seller type.'
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

    <!-- ─── MINIMAL HEADER ─────────────────────────────────── -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.07)]">
      <div class="max-w-6xl mx-auto px-5 lg:px-8">
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
              Early Interest &nbsp;·&nbsp; d'Market Pre-Registration
            </p>
            <h1 class="text-2xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.08]">
              Be among the first traders on d'Market.
            </h1>
            <p class="mt-3 text-sm text-charcoal-300 leading-relaxed max-w-xl">
              We're gathering early interest from traders and local service providers across Sub-Saharan Africa. No payment, no commitment.
            </p>
          </div>
        </div>
      </section>

      <!-- ─── REASSURANCE STRIP ─────────────────────────────── -->
      <section class="bg-charcoal-900 py-5 lg:py-6">
        <div class="max-w-5xl mx-auto px-5 lg:px-8">
          <ul class="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-8 lg:gap-12">
            <li class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 12 12" aria-hidden="true">
                <polyline points="2 6 5 9 10 3" />
              </svg>
              <span class="text-sm font-semibold text-charcoal-200">Be first to know when d'Market launches in your area</span>
            </li>
            <li class="hidden sm:block text-charcoal-600" aria-hidden="true">·</li>
            <li class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 12 12" aria-hidden="true">
                <polyline points="2 6 5 9 10 3" />
              </svg>
              <span class="text-sm font-semibold text-charcoal-200">Help shape a marketplace built for local traders</span>
            </li>
            <li class="hidden sm:block text-charcoal-600" aria-hidden="true">·</li>
            <li class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 12 12" aria-hidden="true">
                <polyline points="2 6 5 9 10 3" />
              </svg>
              <span class="text-sm font-semibold text-charcoal-200">No payment or commitment required</span>
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
              Tell us about yourself.
            </h2>
            <p class="mt-2 text-base text-neutral-500">
              This takes about two minutes. We only ask what we need at this stage.
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
                  We've received your pre-registration. We'll be in touch as d'Market develops and prepares
                  to launch in your area. You're part of something being built for people like you.
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

              <!-- SECTION A: Contact -->
              <div class="space-y-5">

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
                    placeholder="e.g. Amina Hassan"
                  />
                  <p v-if="errors.name" id="name-error" role="alert" class="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.name }}
                  </p>
                </div>

                <!-- Mobile / WhatsApp -->
                <div>
                  <label for="mobile" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Mobile / WhatsApp number <span class="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="mobile"
                    v-model="form.mobile"
                    type="tel"
                    autocomplete="tel"
                    aria-required="true"
                    :aria-invalid="!!errors.mobile"
                    :aria-describedby="errors.mobile ? 'mobile-error' : 'mobile-hint'"
                    class="w-full rounded-xl border px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    :class="errors.mobile ? 'border-red-400' : 'border-neutral-200'"
                    placeholder="e.g. +234 800 000 0000"
                  />
                  <p id="mobile-hint" class="mt-1.5 text-xs text-neutral-500">We'll use this to send you updates when d'Market is ready in your area.</p>
                  <p v-if="errors.mobile" id="mobile-error" role="alert" class="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.mobile }}
                  </p>
                </div>

                <!-- Email (optional) -->
                <div>
                  <label for="email" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Email address <span class="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    :aria-invalid="!!errors.email"
                    :aria-describedby="errors.email ? 'email-error' : undefined"
                    class="w-full rounded-xl border px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    :class="errors.email ? 'border-red-400' : 'border-neutral-200'"
                    placeholder="e.g. amina@email.com"
                  />
                  <p v-if="errors.email" id="email-error" role="alert" class="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.email }}
                  </p>
                </div>
              </div>

              <!-- SECTION B: Location -->
              <div class="mt-8 pt-7 border-t border-neutral-100 space-y-5">
                <p class="text-xs font-bold tracking-widest uppercase text-charcoal-400">Where are you based?</p>

                <!-- Country -->
                <div>
                  <label for="country" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Country <span class="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <div class="relative">
                    <select
                      id="country"
                      v-model="form.country"
                      aria-required="true"
                      :aria-invalid="!!errors.country"
                      :aria-describedby="errors.country ? 'country-error' : undefined"
                      class="w-full appearance-none rounded-xl border px-4 py-3 text-base text-charcoal-950 bg-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 pr-10"
                      :class="[errors.country ? 'border-red-400' : 'border-neutral-200', !form.country ? 'text-neutral-400' : 'text-charcoal-950']"
                    >
                      <option value="" disabled>Select your country</option>
                      <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                    </select>
                    <svg class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  <p v-if="errors.country" id="country-error" role="alert" class="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.country }}
                  </p>
                </div>

                <!-- City -->
                <div>
                  <label for="city" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    City / Town / Area <span class="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="city"
                    v-model="form.city"
                    type="text"
                    aria-required="true"
                    :aria-invalid="!!errors.city"
                    :aria-describedby="errors.city ? 'city-error' : 'city-hint'"
                    class="w-full rounded-xl border px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    :class="errors.city ? 'border-red-400' : 'border-neutral-200'"
                    placeholder="e.g. Lagos Island, Accra Central"
                  />
                  <p id="city-hint" class="mt-1.5 text-xs text-neutral-500">e.g. Lagos Island, Accra Central, Kumasi Market</p>
                  <p v-if="errors.city" id="city-error" role="alert" class="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.city }}
                  </p>
                </div>
              </div>

              <!-- SECTION C: Trading profile -->
              <div class="mt-8 pt-7 border-t border-neutral-100 space-y-5">
                <p class="text-xs font-bold tracking-widest uppercase text-charcoal-400">About your trade</p>

                <!-- What do you sell -->
                <div>
                  <label for="what-you-sell" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    What do you sell or offer? <span class="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="what-you-sell"
                    v-model="form.whatYouSell"
                    type="text"
                    aria-describedby="what-hint"
                    class="w-full rounded-xl border border-neutral-200 px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="e.g. Fresh vegetables, phone repairs, children's clothing"
                  />
                  <p id="what-hint" class="mt-1.5 text-xs text-neutral-500">e.g. Fresh vegetables, phone repairs, children's clothing</p>
                </div>

                <!-- Category -->
                <fieldset>
                  <legend class="block text-sm font-semibold text-charcoal-900 mb-3">
                    Category <span class="text-orange-500" aria-hidden="true">*</span>
                  </legend>
                  <div
                    role="group"
                    :aria-invalid="!!errors.category"
                    :aria-describedby="errors.category ? 'category-error' : undefined"
                    class="space-y-2.5"
                  >
                    <label v-for="opt in ['Fresh produce', 'Household goods', 'Handyman / local services', 'Other']" :key="opt" class="flex items-center gap-3 cursor-pointer group">
                      <input
                        v-model="form.category"
                        type="radio"
                        :value="opt"
                        aria-required="true"
                        class="w-4 h-4 border-neutral-300 text-orange-500 focus:ring-orange-400 focus:ring-offset-0 cursor-pointer"
                      />
                      <span class="text-sm text-charcoal-900 group-hover:text-charcoal-950">{{ opt }}</span>
                    </label>
                  </div>
                  <p v-if="errors.category" id="category-error" role="alert" class="mt-2 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.category }}
                  </p>
                </fieldset>

                <!-- Seller type -->
                <fieldset>
                  <legend class="block text-sm font-semibold text-charcoal-900 mb-3">
                    Seller type <span class="text-orange-500" aria-hidden="true">*</span>
                  </legend>
                  <div
                    role="group"
                    :aria-invalid="!!errors.sellerType"
                    :aria-describedby="errors.sellerType ? 'seller-type-error' : undefined"
                    class="space-y-2.5"
                  >
                    <label v-for="opt in ['Informal trader', 'Small business', 'Service provider', 'Other']" :key="opt" class="flex items-center gap-3 cursor-pointer group">
                      <input
                        v-model="form.sellerType"
                        type="radio"
                        :value="opt"
                        aria-required="true"
                        class="w-4 h-4 border-neutral-300 text-orange-500 focus:ring-orange-400 focus:ring-offset-0 cursor-pointer"
                      />
                      <span class="text-sm text-charcoal-900 group-hover:text-charcoal-950">{{ opt }}</span>
                    </label>
                  </div>
                  <p v-if="errors.sellerType" id="seller-type-error" role="alert" class="mt-2 text-xs text-red-600 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
                    {{ errors.sellerType }}
                  </p>
                </fieldset>
              </div>

              <!-- SECTION D: Stay informed -->
              <div class="mt-8 pt-7 border-t border-neutral-100 space-y-5">
                <p class="text-xs font-bold tracking-widest uppercase text-charcoal-400">Stay informed</p>

                <!-- Wants updates -->
                <fieldset>
                  <legend class="block text-sm font-semibold text-charcoal-900 mb-3">
                    Would you like to hear when d'Market launches in your area?
                  </legend>
                  <div class="space-y-2.5">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input
                        v-model="form.wantsUpdates"
                        type="radio"
                        value="yes"
                        class="w-4 h-4 border-neutral-300 text-orange-500 focus:ring-orange-400 focus:ring-offset-0 cursor-pointer"
                      />
                      <span class="text-sm text-charcoal-900 group-hover:text-charcoal-950">Yes, keep me updated</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input
                        v-model="form.wantsUpdates"
                        type="radio"
                        value="no"
                        class="w-4 h-4 border-neutral-300 text-orange-500 focus:ring-orange-400 focus:ring-offset-0 cursor-pointer"
                      />
                      <span class="text-sm text-charcoal-900 group-hover:text-charcoal-950">No, just submitting for reference</span>
                    </label>
                  </div>
                </fieldset>

                <!-- Comments -->
                <div>
                  <label for="comments" class="block text-sm font-semibold text-charcoal-900 mb-1.5">
                    Anything else you'd like to tell us? <span class="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="comments"
                    v-model="form.comments"
                    rows="3"
                    maxlength="500"
                    aria-describedby="comments-hint"
                    class="w-full rounded-xl border border-neutral-200 px-4 py-3 text-base text-charcoal-950 placeholder:text-neutral-400 resize-none transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="Any feedback, questions, or context about your trade"
                  />
                  <p id="comments-hint" class="mt-1.5 text-xs text-neutral-500">Any feedback, questions, or context is welcome.</p>
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
                  <span>{{ submitting ? 'Submitting…' : 'Register my interest' }}</span>
                  <svg v-if="!submitting" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

      <!-- ─── TRUST NOTE ─────────────────────────────────────── -->
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
        <div class="relative max-w-6xl mx-auto px-5 lg:px-8 reveal">
          <div class="flex flex-col sm:flex-row sm:items-center items-center gap-3 sm:gap-6">
            <div class="flex items-center gap-2 flex-shrink-0">
              <svg class="w-4 h-4" style="color: rgba(45,137,149,0.7);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <span class="text-xs font-bold tracking-widest uppercase text-charcoal-400">Pre-registration only</span>
            </div>
            <span class="hidden sm:block text-charcoal-700" aria-hidden="true">·</span>
            <ul class="flex flex-wrap gap-x-5 gap-y-1.5">
              <li class="flex items-center gap-1.5 text-xs text-charcoal-400">
                <!-- No payment: credit card with X -->
                <svg class="w-3.5 h-3.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
                No payment required
              </li>
              <li class="flex items-center gap-1.5 text-xs text-charcoal-400">
                <!-- Updates: bell -->
                <svg class="w-3.5 h-3.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                Updates about d'Market only
              </li>
              <li class="flex items-center gap-1.5 text-xs text-charcoal-400">
                <!-- Privacy: shield -->
                <svg class="w-3.5 h-3.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                Details not shared with third parties
              </li>
              <li class="flex items-center gap-1.5 text-xs text-charcoal-400">
                <!-- Withdraw: x-circle -->
                <svg class="w-3.5 h-3.5 flex-shrink-0" style="color: rgba(45,137,149,0.6);" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                Withdraw anytime
              </li>
            </ul>
          </div>
        </div>
      </section>

    </main>


    <LandingAppFooter />

  </div>
</template>
