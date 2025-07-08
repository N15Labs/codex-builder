<template>
  <nav class="flex justify-evenly p-6 border-b border-zinc-200 dark:border-zinc-700">
    <NuxtLink
      to="/characters"
      class="text-lg font-bold text-white hover:text-purple-400 transition duration-200 hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]"
    >
      Characters
    </NuxtLink>
    <NuxtLink
      to="/groups"
      class="text-lg font-bold text-white hover:text-purple-400 transition duration-200 hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]"
    >
      Groups
    </NuxtLink>
    <NuxtLink
      to="/locations"
      class="text-lg font-bold text-white hover:text-purple-400 transition duration-200 hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]"
    >
      Locations
    </NuxtLink>
    <NuxtLink
      to="/items"
      class="text-lg font-bold text-white hover:text-purple-400 transition duration-200 hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]"
    >
      Items
    </NuxtLink>
  </nav>
</template>
