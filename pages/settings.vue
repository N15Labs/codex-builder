<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
const { logout } = useAuth()
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-10">
    <h1 class="text-3xl font-semibold">Settings</h1>
    <div class="mt-6 space-y-4 rounded-2xl border p-6">
      <NuxtLink to="/verify-email" class="underline">Verify email</NuxtLink>
      <button @click="logout" class="rounded-xl px-4 py-2 bg-black text-white">Log out</button>
    </div>
  </div>
</template>
