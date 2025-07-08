<template>
  <header class="flex justify-center items-center px-4 py-4 border-b border-zinc-200 dark:border-zinc-700 relative">
    <NuxtLink
      to="/"
      class="text-3xl font-lore italic tracking-wide hover:underline transition duration-200"
    >
      Codex Builder
    </NuxtLink>

    <div class="absolute right-4">
      <DarkToggle />
    </div>
  </header>
</template>
