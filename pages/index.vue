<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { User, Users, Map, Package } from 'lucide-vue-next'

const exportCodex = ref(() => {})

onMounted(async () => {
  const { useExportCodex } = await import('@/composables/useExportCodex')
  exportCodex.value = useExportCodex().exportCodex
})
</script>

<template>
  <section class="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
    <div class="w-full max-w-5xl px-6 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <NuxtLink
          to="/characters"
          class="border border-zinc-600 hover:border-white p-6 rounded-xl transition hover:scale-105 hover:bg-zinc-800 flex flex-col items-center text-center shadow-lg"
        >
          <User class="w-12 h-12 text-purple-400 mb-3" />
          <h2 class="text-xl font-semibold font-lore">Characters</h2>
          <p class="text-sm text-zinc-400">Create the souls of your story</p>
        </NuxtLink>

        <NuxtLink
          to="/groups"
          class="border border-zinc-600 hover:border-white p-6 rounded-xl transition hover:scale-105 hover:bg-zinc-800 flex flex-col items-center text-center shadow-lg"
        >
          <Users class="w-12 h-12 text-purple-400 mb-3" />
          <h2 class="text-xl font-semibold font-lore">Groups</h2>
          <p class="text-sm text-zinc-400">Factions, guilds, and rivalries</p>
        </NuxtLink>

        <NuxtLink
          to="/locations"
          class="border border-zinc-600 hover:border-white p-6 rounded-xl transition hover:scale-105 hover:bg-zinc-800 flex flex-col items-center text-center shadow-lg"
        >
          <Map class="w-12 h-12 text-purple-400 mb-3" />
          <h2 class="text-xl font-semibold font-lore">Locations</h2>
          <p class="text-sm text-zinc-400">Cities, forests, sacred ruins</p>
        </NuxtLink>

        <NuxtLink
          to="/items"
          class="border border-zinc-600 hover:border-white p-6 rounded-xl transition hover:scale-105 hover:bg-zinc-800 flex flex-col items-center text-center shadow-lg"
        >
          <Package class="w-12 h-12 text-purple-400 mb-3" />
          <h2 class="text-xl font-semibold font-lore">Items</h2>
          <p class="text-sm text-zinc-400">Artifacts, weapons, relics</p>
        </NuxtLink>

        <div
          class="border border-green-600 hover:border-white p-6 rounded-xl transition hover:scale-105 hover:bg-green-800 flex flex-col items-center text-center shadow-lg cursor-pointer"
          @click="exportCodex()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-green-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12l1.41 1.41L11 7.83V20m2-12.17l5.59 5.58L20 12"/>
          </svg>
          <h2 class="text-xl font-semibold font-lore">Export Codex</h2>
          <p class="text-sm text-green-300">Download your data as JSON</p>
        </div>
      </div>
    </div>
  </section>
</template>
