<script setup lang="ts">
const props = defineProps<{ error: { statusMessage?: string; message?: string; statusCode?: number } }>()
const message = computed(() => props.error?.statusMessage || props.error?.message || 'Something went wrong')
const status = computed(() => Number(props.error?.statusCode || 500))

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <section class="min-h-[70vh] grid place-items-center px-6 py-16">
    <div class="max-w-lg w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-8 shadow-lg text-center">
      <div class="mx-auto mb-4 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/40 grid place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 1 21h22L12 2ZM12 9v5h1v-5h-1Zm0 7v2h1v-2h-1Z"/></svg>
      </div>
      <h1 class="text-2xl font-semibold mb-2">{{ status === 404 ? 'Page not found' : 'Error' }}</h1>
      <p class="text-zinc-600 dark:text-zinc-300 mb-6">{{ message }}</p>
      <NuxtLink to="/" class="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3Z"/></svg>
        Go home
      </NuxtLink>
      <button class="ml-3 underline text-sm" @click="goHome">Clear error</button>
    </div>
  </section>
</template>
