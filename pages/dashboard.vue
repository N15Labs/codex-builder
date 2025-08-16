<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
const { user, fetchMe } = useAuth()
onMounted(() => fetchMe())
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10">
    <h1 class="text-3xl font-semibold">Dashboard</h1>
    <p class="text-zinc-600 mt-2">Welcome, {{ user?.name || user?.email }}</p>

    <div class="grid md:grid-cols-3 gap-6 mt-8">
      <NuxtLink to="/profile" class="block rounded-2xl border p-6 hover:shadow-md">Profile</NuxtLink>
      <NuxtLink to="/settings" class="block rounded-2xl border p-6 hover:shadow-md">Settings</NuxtLink>
      <NuxtLink to="/codex" class="block rounded-2xl border p-6 hover:shadow-md">Codex</NuxtLink>
    </div>
  </div>
</template>
