<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLocationStore } from '@/stores/useLocationStore'
import { useTagStore } from '@/stores/useTagStore'
import LocationForm from '@/components/forms/LocationForm.vue'

const locationStore = useLocationStore()
const tagStore = useTagStore()

let exportCodex = () => {}
if (process.client) {
  const mod = await import('@/composables/useExportCodex')
  exportCodex = mod.useCodexImportExport().exportCodex
}

const showModal = ref(false)
const activeLocation = ref<any | null>(null)

const openCreateModal = () => {
  activeLocation.value = { name: '', tags: [] }
  showModal.value = true
}

const openEditModal = (loc: any) => {
  activeLocation.value = { ...loc }
  showModal.value = true
}

const saveLocation = (entity: any) => {
  const exists = locationStore.locations.find(l => l.name === entity.name)
  if (exists) {
    locationStore.editEntity(entity.name, entity)
  } else {
    locationStore.addEntity(entity)
  }
  showModal.value = false
}

const filteredLocations = computed(() => {
  if (tagStore.activeTags.length === 0) return locationStore.locations
  return locationStore.locations.filter(loc =>
    loc.tags?.some(tag => tagStore.activeTags.includes(tag))
  )
})
</script>

<template>
  <section class="p-6 space-y-4">
    <h2 class="text-3xl font-lore font-bold">🗺️ Locations</h2>
    <p class="text-zinc-500 dark:text-zinc-400">
      Define your world’s geography, landmarks, and key places.
    </p>

    <TagFilter class="mb-4" />

    <CodexView
      title="Locations"
      :entities="filteredLocations"
      :onCreate="openCreateModal"
      :onExport="exportCodex"
    >
      <template #default="{ entities }">
        <LocationCard
          v-for="loc in entities"
          :key="loc.name"
          :location="loc"
          @click="openEditModal(loc)"
        />
      </template>
    </CodexView>

    <LocationForm
      v-if="showModal"
      v-model:entity="activeLocation"
      @submit="saveLocation"
      @close="showModal = false"
    />
  </section>
</template>
