<script setup lang="ts">
import DarkToggle from '@/components/DarkToggle.vue'
import HeaderAuthLinks from '@/components/HeaderAuthLinks.vue'
</script>

<template>
  <header class="relative px-6 py-6 border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm dark:shadow-md z-20">
    <div class="absolute right-6 top-6">
      <DarkToggle />
    </div>

    <NuxtLink to="/" class="block text-center">
      <h1 class="text-4xl sm:text-5xl font-lora italic tracking-tight text-purple-700 dark:text-purple-300 hover:underline transition">
        Codex Builder
      </h1>
    </NuxtLink>

    <div class="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
      <NuxtLink
        to="/onboarding"
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7Z"/>
        </svg>
        Onboarding
      </NuxtLink>

      <NuxtLink
        to="/codex"
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/>
        </svg>
        Codex
      </NuxtLink>

      <NuxtLink
        to="/terms"
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 19a2 2 0 0 0 2 2h13v-2H6V5h13V3H6a2 2 0 0 0-2 2v14Z"/>
        </svg>
        Terms
      </NuxtLink>

      <NuxtLink
        to="/privacy"
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"/>
        </svg>
        Privacy
      </NuxtLink>

      <HeaderAuthLinks />
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,600&display=swap');

.font-lora {
  font-family: 'Lora', serif;
  letter-spacing: -0.01em;
}
</style>
