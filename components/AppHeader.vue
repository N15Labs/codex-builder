<script setup lang="ts">
import DarkToggle from '@/components/DarkToggle.vue'
import HeaderAuthLinks from '@/components/HeaderAuthLinks.vue'
</script>

<template>
  <header
    class="relative px-8 py-8 border-b border-border bg-zinc-900 shadow-lg z-30"
  >
    <div class="absolute right-8 top-8">
      <DarkToggle />
    </div>

    <NuxtLink to="/" class="block text-center">
      <h1
        class="text-5xl sm:text-6xl font-lora italic tracking-tight text-purple-400 hover:text-purple-300 transition-colors drop-shadow-lg"
      >
        Codex Builder
      </h1>
    </NuxtLink>

    <div
      class="mt-6 flex flex-wrap items-center justify-center gap-6 text-lg font-medium"
    >
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-purple-400 group-hover:text-purple-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z" />
        </svg>
        <span class="text-zinc-200 group-hover:text-white">Home</span>
      </NuxtLink>

      <NuxtLink
        to="/onboarding"
        class="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-purple-400 group-hover:text-purple-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2 9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7Z" />
        </svg>
        <span class="text-zinc-200 group-hover:text-white">Onboarding</span>
      </NuxtLink>

      <NuxtLink
        to="/terms"
        class="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-purple-400 group-hover:text-purple-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 19a2 2 0 0 0 2 2h13v-2H6V5h13V3H6a2 2 0 0 0-2 2v14Z" />
        </svg>
        <span class="text-zinc-200 group-hover:text-white">Terms</span>
      </NuxtLink>

      <NuxtLink
        to="/privacy"
        class="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-purple-400 group-hover:text-purple-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" />
        </svg>
        <span class="text-zinc-200 group-hover:text-white">Privacy</span>
      </NuxtLink>

      <div class="auth-ctas inline-flex items-center gap-3">
        <HeaderAuthLinks />
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,600&display=swap');

.font-lora {
  font-family: 'Lora', serif;
  letter-spacing: -0.01em;
}

.auth-ctas :deep(a) {
  @apply px-5 py-2 rounded-xl font-semibold transition;
}

.auth-ctas :deep(a[href*="login"]) {
  @apply bg-purple-600 text-white hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30;
}

.auth-ctas :deep(a[href*="signup"]), .auth-ctas :deep(a[href*="register"]) {
  @apply bg-green-500 text-black hover:bg-green-400 hover:shadow-lg hover:shadow-green-400/30;
}
</style>
