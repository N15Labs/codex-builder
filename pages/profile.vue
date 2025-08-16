<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
const { user, fetchMe } = useAuth()
onMounted(() => fetchMe())
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-10">
    <h1 class="text-3xl font-semibold">Profile</h1>
    <div class="mt-6 space-y-4 rounded-2xl border p-6">
      <div><span class="font-medium">Email:</span> {{ user?.email }}</div>
      <div><span class="font-medium">Name:</span> {{ user?.name || '—' }}</div>
      <div><span class="font-medium">Verified:</span> {{ user?.emailConfirmed ? 'Yes' : 'No' }}</div>
    </div>
  </div>
</template>
