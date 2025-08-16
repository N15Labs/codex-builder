<script setup lang="ts">
const name = ref('')
const email = ref('')
const password = ref('')
const { register, loading, error } = useAuth()

async function onSubmit() {
  await register({ name: name.value.trim(), email: email.value.trim(), password: password.value })
}
</script>

<template>
  <AuthCard>
    <h1 class="text-2xl font-semibold mb-2">Create your account</h1>
    <p class="text-zinc-600 mb-6">Join and start building</p>

    <form class="space-y-4" @submit.prevent="onSubmit">
      <input
v-model="name" type="text" placeholder="Name"
             class="w-full rounded-xl border px-4 py-3 outline-none focus:ring" >
      <input
v-model="email" type="email" required placeholder="Email"
             class="w-full rounded-xl border px-4 py-3 outline-none focus:ring" >
      <input
v-model="password" type="password" required placeholder="Password"
             class="w-full rounded-xl border px-4 py-3 outline-none focus:ring" >
      <button :disabled="loading" class="w-full rounded-xl py-3 font-medium bg-black text-white disabled:opacity-60">
        {{ loading ? 'Creating…' : 'Sign up' }}
      </button>
    </form>

    <p v-if="error" class="text-red-600 mt-3">{{ error }}</p>
    <div class="mt-6 text-sm">
      Already have an account?
      <NuxtLink to="/login" class="underline">Log in</NuxtLink>
    </div>
  </AuthCard>
</template>
