<script setup lang="ts">
import { User, Users, Map, Package } from 'lucide-vue-next'
</script>

<template>
  <section class="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
    <div class="w-full max-w-5xl px-6 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <!-- Characters Card -->
        <NuxtLink
          to="/characters"
          class="border border-zinc-600 hover:border-white p-6 rounded-xl transition hover:scale-105 hover:bg-zinc-800 flex flex-col items-center text-center shadow-lg"
        >
          <User class="w-12 h-12 text-purple-400 mb-3" />
          <h2 class="text-xl font-semibold font-lore">Characters</h2>
          <p class="text-sm text-zinc-400">Create the souls of your story</p>
        </NuxtLink>

        <!-- Groups Card -->
        <NuxtLink
          to="/groups"
          class="border border-zinc-600 hover:border-white p-6 rounded-xl transition hover:scale-105 hover:bg-zinc-800 flex flex-col items-center text-center shadow-lg"
        >
          <Users class="w-12 h-12 text-purple-400 mb-3" />
          <h2 class="text-xl font-semibold font-lore">Groups</h2>
          <p class="text-sm text-zinc-400">Factions, guilds, and rivalries</p>
        </NuxtLink>

        <!-- Locations Card -->
        <NuxtLink
          to="/locations"
          class="border border-zinc-600 hover:border-white p-6 rounded-xl transition hover:scale-105 hover:bg-zinc-800 flex flex-col items-center text-center shadow-lg"
        >
          <Map class="w-12 h-12 text-purple-400 mb-3" />
          <h2 class="text-xl font-semibold font-lore">Locations</h2>
          <p class="text-sm text-zinc-400">Cities, forests, sacred ruins</p>
        </NuxtLink>

        <!-- Items Card -->
        <NuxtLink
          to="/items"
          class="border border-zinc-600 hover:border-white p-6 rounded-xl transition hover:scale-105 hover:bg-zinc-800 flex flex-col items-center text-center shadow-lg"
        >
          <Package class="w-12 h-12 text-purple-400 mb-3" />
          <h2 class="text-xl font-semibold font-lore">Items</h2>
          <p class="text-sm text-zinc-400">Artifacts, weapons, relics</p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
