<script setup lang="ts">
const route = useRoute()
const token = computed(() => String(route.query.token || ''))
const password = ref('')
const done = ref(false)
const { resetPassword, loading, error } = useAuth()

async function onSubmit() {
  const ok = await resetPassword(token.value, password.value)
  if (ok) done.value = true
}
</script>

<template>
  <AuthCard>
    <h1 class="text-2xl font-semibold mb-2">Reset password</h1>
    <p class="text-zinc-600 mb-6">Enter a new password.</p>

    <form v-if="!done" @submit.prevent="onSubmit" class="space-y-4">
      <input v-model="password" type="password" required placeholder="New password"
             class="w-full rounded-xl border px-4 py-3 outline-none focus:ring" />
      <button :disabled="loading" class="w-full rounded-xl py-3 font-medium bg-black text-white disabled:opacity-60">
        {{ loading ? 'Resetting…' : 'Reset password' }}
      </button>
    </form>

    <p v-if="error" class="text-red-600 mt-3">{{ error }}</p>
    <p v-if="done" class="text-green-600">Password updated. You can now <NuxtLink to="/login" class="underline">log in</NuxtLink>.</p>
  </AuthCard>
</template>
