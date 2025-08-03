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
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,600&display=swap');

.font-lora {
  font-family: 'Lora', serif;
  letter-spacing: -0.01em;
}
</style>
