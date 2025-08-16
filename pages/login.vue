<template>
  <div class="min-h-screen flex items-center justify-center bg-zinc-100 px-4">
    <div class="w-full max-w-md bg-white/60 backdrop-blur shadow-lg rounded-2xl p-8 space-y-6 border border-zinc-200">
      <h1 class="text-2xl font-bold text-center text-zinc-800">Welcome back 👋</h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-2 rounded-xl border border-zinc-300 bg-white text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full px-4 py-2 rounded-xl border border-zinc-300 bg-white text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          class="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors"
        >
          Sign in
        </button>
        <p v-if="error" class="text-sm text-red-500 text-center">{{ error }}</p>
      </form>

      <p class="text-sm text-center text-zinc-600">
        Don’t have an account?
        <NuxtLink to="/register" class="text-purple-600 hover:underline">Register</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const error = ref('')
const { login } = useAuth()

const handleLogin = async () => {
  try {
    error.value = ''
    await login(email.value, password.value)
    navigateTo('/')
  } catch (err) {
    error.value = 'Invalid credentials'
  }
}
</script>
