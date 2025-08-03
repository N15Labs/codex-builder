<template>
  <nav class="flex justify-evenly gap-6 py-5 px-8 bg-zinc-800 backdrop-blur-sm rounded-xl mx-auto max-w-5xl border border-zinc-700">
    <NuxtLink
      to="/characters"
      class="text-xl font-semibold text-white hover:text-purple-400 transition duration-200 hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]"
    >
      Characters
    </NuxtLink>
    <NuxtLink
      to="/groups"
      class="text-xl font-semibold text-white hover:text-purple-400 transition duration-200 hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]"
    >
      Groups
    </NuxtLink>
    <NuxtLink
      to="/locations"
      class="text-xl font-semibold text-white hover:text-purple-400 transition duration-200 hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]"
    >
      Locations
    </NuxtLink>
    <NuxtLink
      to="/items"
      class="text-xl font-semibold text-white hover:text-purple-400 transition duration-200 hover:drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]"
    >
      Items
    </NuxtLink>
  </nav>
</template>
