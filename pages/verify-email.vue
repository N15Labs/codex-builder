<script setup lang="ts">
const route = useRoute()
const token = computed(() => String(route.query.token || ''))
const { verifyEmail, loading, error } = useAuth()
const success = ref(false)

onMounted(async () => {
  if (token.value) {
    const res = await verifyEmail(token.value)
    success.value = !!res
  }
})
</script>

<template>
  <AuthCard>
    <h1 class="text-2xl font-semibold mb-2">Verify email</h1>
    <p v-if="loading" class="text-zinc-600">Verifying…</p>
    <p v-else-if="success" class="text-green-600">Email verified. Thanks!</p>
    <p v-else-if="error" class="text-red-600">{{ error }}</p>
    <div class="mt-6">
      <NuxtLink to="/dashboard" class="underline">Go to dashboard</NuxtLink>
    </div>
  </AuthCard>
</template>
