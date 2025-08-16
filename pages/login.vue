<script setup lang="ts">
const email = ref('')
const password = ref('')
const { login, loading, error } = useAuth()

async function onSubmit() {
  await login(email.value.trim(), password.value)
}
</script>

<template>
  <AuthCard>
    <h1 class="text-2xl font-semibold mb-2">Welcome back</h1>
    <p class="text-zinc-600 mb-6">Log in to your account</p>

    <form @submit.prevent="onSubmit" class="space-y-4">
      <input v-model="email" type="email" required placeholder="Email"
             class="w-full rounded-xl border px-4 py-3 outline-none focus:ring" />
      <input v-model="password" type="password" required placeholder="Password"
             class="w-full rounded-xl border px-4 py-3 outline-none focus:ring" />
      <button :disabled="loading" class="w-full rounded-xl py-3 font-medium bg-black text-white disabled:opacity-60">
        {{ loading ? 'Logging in…' : 'Log in' }}
      </button>
    </form>

    <p v-if="error" class="text-red-600 mt-3">{{ error }}</p>
    <div class="flex justify-between items-center mt-6 text-sm">
      <NuxtLink to="/register" class="underline">Create account</NuxtLink>
      <NuxtLink to="/forgot-password" class="underline">Forgot password?</NuxtLink>
    </div>
  </AuthCard>
</template>
