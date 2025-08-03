<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { User, Users, Map, Package } from 'lucide-vue-next'
import ScribbleBackground from '@/components/ui/ScribbleBackground.vue'

const exportCodex = ref(() => {})

onMounted(async () => {
  const mod = await import('@/composables/useExportCodex')
  exportCodex.value = mod.useCodexImportExport().exportCodex
})
</script>

<template>
  <section class="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
    <ScribbleBackground />

    <div class="w-full max-w-screen-xl px-6 py-20 z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <NuxtLink to="/characters" class="card-entity group">
          <User class="icon" />
          <h2 class="card-title">Characters</h2>
          <p class="card-subtext">Create the souls of your story</p>
        </NuxtLink>

        <NuxtLink to="/groups" class="card-entity group">
          <Users class="icon" />
          <h2 class="card-title">Groups</h2>
          <p class="card-subtext">Factions, guilds, and rivalries</p>
        </NuxtLink>

        <NuxtLink to="/locations" class="card-entity group">
          <Map class="icon" />
          <h2 class="card-title">Locations</h2>
          <p class="card-subtext">Cities, forests, sacred ruins</p>
        </NuxtLink>

        <NuxtLink to="/items" class="card-entity group">
          <Package class="icon" />
          <h2 class="card-title">Items</h2>
          <p class="card-subtext">Artifacts, weapons, relics</p>
        </NuxtLink>
      </div>

      <div class="card-export group mx-auto max-w-3xl text-center" @click="exportCodex()">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon text-green-400 group-hover:text-green-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12l1.41 1.41L11 7.83V20m2-12.17l5.59 5.58L20 12"/>
        </svg>
        <h2 class="card-title text-green-400 group-hover:text-green-300">Export Codex</h2>
        <p class="card-subtext text-green-300 group-hover:text-green-200">Download your entire universe as JSON</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon {
  @apply w-20 h-20 text-purple-400 transition-transform group-hover:scale-105;
}

.card-title {
  @apply text-3xl font-bold font-lore mt-4;
}

.card-subtext {
  @apply text-base text-zinc-400 mt-2;
}

.card-entity {
  @apply bg-zinc-800 border border-zinc-700 rounded-2xl p-10 shadow-xl hover:shadow-purple-500/20 transition-all transform hover:scale-[1.02] flex flex-col items-center justify-center;
}

.card-export {
  @apply bg-zinc-800 border border-green-600 rounded-2xl p-12 shadow-xl hover:shadow-green-500/20 transition-all transform hover:scale-[1.02] cursor-pointer;
}
</style>
