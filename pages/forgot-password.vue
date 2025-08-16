<script setup lang="ts">
const email = ref('')
const sent = ref(false)
const { requestPasswordReset, loading, error } = useAuth()

async function onSubmit() {
  const ok = await requestPasswordReset(email.value.trim())
  if (ok) sent.value = true
}
</script>

<template>
  <AuthCard>
    <h1 class="text-2xl font-semibold mb-2">Forgot password</h1>
    <p class="text-zinc-600 mb-6">We’ll email you a reset link.</p>

    <form class="space-y-4" @submit.prevent="onSubmit">
      <input
        v-if="!sent"
        v-model="email"
        type="email"
        required
        placeholder="Email"
        class="w-full rounded-xl border px-4 py-3 outline-none focus:ring"
      >
      <button
        v-if="!sent"
        :disabled="loading"
        class="w-full rounded-xl py-3 font-medium bg-black text-white disabled:opacity-60"
      >
        {{ loading ? 'Sending…' : 'Send reset link' }}
      </button>
    </form>

    <p v-if="error" class="text-red-600 mt-3">{{ error }}</p>
    <p v-if="sent" class="text-green-600 mt-3">
      If an account exists, a reset link has been sent.
    </p>

    <div class="mt-6 text-sm">
      <NuxtLink to="/login" class="underline">Back to login</NuxtLink>
    </div>
  </AuthCard>
</template>
