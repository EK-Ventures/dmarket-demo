<template>
  <section id="register-interest" class="bg-navy-900">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div class="grid items-center gap-16 lg:grid-cols-2">

        <!-- Left: copy -->
        <div>
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-terracotta-400">
            Early Access
          </p>
          <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Be Part of What Comes Next.
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-navy-300">
            d'Market is in early access. Whether you're a trader ready to grow, or an investor
            ready to back a real opportunity — we want to hear from you.
          </p>

          <!-- Trust cues -->
          <ul class="mt-10 space-y-3" role="list">
            <li v-for="cue in trustCues" :key="cue" class="flex items-center gap-3 text-sm text-navy-400">
              <svg class="h-4 w-4 flex-shrink-0 text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              {{ cue }}
            </li>
          </ul>
        </div>

        <!-- Right: form -->
        <div class="rounded-2xl bg-white p-8 lg:p-10">

          <!-- Success state -->
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
          >
            <div v-if="submitted" class="flex flex-col items-center py-8 text-center">
              <div class="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-50 ring-1 ring-terracotta-200">
                <svg class="h-7 w-7 text-terracotta-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 class="mt-5 text-xl font-bold text-navy-900">You're on the list.</h3>
              <p class="mt-3 text-sm leading-relaxed text-navy-600">
                We'll be in touch directly — no automated sequences, no noise.
                Thank you for your interest in d'Market.
              </p>
            </div>
          </Transition>

          <!-- Form -->
          <form v-if="!submitted" novalidate @submit.prevent="handleSubmit">
            <div class="space-y-5">

              <!-- Name -->
              <div>
                <label for="name" class="mb-1.5 block text-sm font-medium text-navy-800">
                  Full name <span class="text-terracotta-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  required
                  placeholder="Your name"
                  class="w-full rounded-lg border px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-500"
                  :class="errors.name ? 'border-red-400 focus:ring-red-400' : 'border-navy-200'"
                  :aria-describedby="errors.name ? 'name-error' : undefined"
                  @blur="validate('name')"
                />
                <p v-if="errors.name" id="name-error" role="alert" class="mt-1.5 text-xs text-red-500">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="mb-1.5 block text-sm font-medium text-navy-800">
                  Email address <span class="text-terracotta-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                  placeholder="you@example.com"
                  class="w-full rounded-lg border px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-500"
                  :class="errors.email ? 'border-red-400 focus:ring-red-400' : 'border-navy-200'"
                  :aria-describedby="errors.email ? 'email-error' : undefined"
                  @blur="validate('email')"
                />
                <p v-if="errors.email" id="email-error" role="alert" class="mt-1.5 text-xs text-red-500">
                  {{ errors.email }}
                </p>
              </div>

              <!-- Country -->
              <div>
                <label for="country" class="mb-1.5 block text-sm font-medium text-navy-800">
                  Country
                </label>
                <input
                  id="country"
                  v-model="form.country"
                  type="text"
                  name="country"
                  autocomplete="country-name"
                  placeholder="e.g. Nigeria, Kenya, United Kingdom"
                  class="w-full rounded-lg border border-navy-200 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-500"
                />
              </div>

              <!-- Role selector -->
              <div>
                <p class="mb-2 text-sm font-medium text-navy-800" id="role-label">
                  I am <span class="text-terracotta-500" aria-hidden="true">*</span>
                </p>
                <div class="grid grid-cols-2 gap-2" role="group" aria-labelledby="role-label">
                  <button
                    v-for="option in roleOptions"
                    :key="option.value"
                    type="button"
                    class="rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500"
                    :class="form.role === option.value
                      ? 'border-navy-900 bg-navy-900 text-white'
                      : 'border-navy-200 bg-white text-navy-700 hover:border-navy-400'"
                    :aria-pressed="form.role === option.value"
                    @click="form.role = option.value"
                  >
                    {{ option.label }}
                  </button>
                </div>
                <p v-if="errors.role" id="role-error" role="alert" class="mt-1.5 text-xs text-red-500">
                  {{ errors.role }}
                </p>
              </div>

            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="submitting"
              class="mt-8 w-full rounded-lg bg-terracotta-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-600 disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-500"
            >
              <span v-if="!submitting">Register My Interest</span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending…
              </span>
            </button>

            <!-- Privacy note -->
            <p class="mt-4 text-center text-xs text-navy-400">
              We'll never share your details. You'll hear from us directly, not an automated sequence.
            </p>

          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Role = 'trader' | 'buyer' | 'investor' | 'other'

const form = reactive({
  name: '',
  email: '',
  country: '',
  role: '' as '' | Role,
})

const errors = reactive({
  name: '',
  email: '',
  role: '',
})

const submitted = ref(false)
const submitting = ref(false)

const roleOptions: { label: string; value: Role }[] = [
  { label: 'Trader', value: 'trader' },
  { label: 'Buyer', value: 'buyer' },
  { label: 'Investor', value: 'investor' },
  { label: 'Other', value: 'other' },
]

const trustCues = [
  'No commitment required',
  'No automated email sequences',
  'We respond to every enquiry personally',
]

function validate(field: 'name' | 'email' | 'role') {
  if (field === 'name') {
    errors.name = form.name.trim() ? '' : 'Please enter your name.'
  }
  if (field === 'email') {
    if (!form.email.trim()) {
      errors.email = 'Please enter your email address.'
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Please enter a valid email address.'
    }
    else {
      errors.email = ''
    }
  }
  if (field === 'role') {
    errors.role = form.role ? '' : 'Please select an option.'
  }
}

function validateAll() {
  validate('name')
  validate('email')
  validate('role')
  return !errors.name && !errors.email && !errors.role
}

async function handleSubmit() {
  if (!validateAll()) return
  submitting.value = true
  // Wire to your API / form handler here
  await new Promise(resolve => setTimeout(resolve, 900))
  submitting.value = false
  submitted.value = true
}
</script>
