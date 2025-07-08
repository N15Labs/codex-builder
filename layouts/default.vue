<template>
  <div :class="{ dark: isDark }" class="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
    <AppHeader />
    <NavTabs />
    <main class="p-4 h-full">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import NavTabs from '~/components/NavTabs.vue'

const { value: isDark } = useColorMode()
</script>
