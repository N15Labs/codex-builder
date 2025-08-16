<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useLocationStore } from '@/stores/useLocationStore'
import { useTagStore } from '@/stores/useTagStore'
import LocationForm from '@/components/forms/LocationForm.vue'
import LocationCard from '@/components/cards/LocationCard.vue'


const locationStore = useLocationStore()
const tagStore = useTagStore()

const showModal = ref(false)
const activeLocation = ref<any | null>(null)

const exportCodex = ref<() => void>(() => {})
onMounted(async () => {
  const mod = await import('@/composables/useExportCodex')
  exportCodex.value = mod.useCodexImportExport().exportCodex
})

const openCreateModal = () => {
  activeLocation.value = { id: crypto.randomUUID(), name: '', tags: [] }
  showModal.value = true
}

const openEditModal = (loc: any) => {
  activeLocation.value = { ...loc }
  showModal.value = true
}

const saveLocation = (entity: any) => {
  const exists = locationStore.locations.find(l => l.id === entity.id)
  if (exists) {
    locationStore.editEntity(entity.id, entity)
  } else {
    locationStore.addEntity(entity)
  }
  showModal.value = false
}

const filteredLocations = computed(() => {
  const locations = locationStore.locations ?? []
  const active = tagStore.activeTags.locations
  if (!active?.length) return locations

  return locations.filter(loc =>
    loc.tags?.some(tag => active.includes(tag))
  )
})
</script>

<template>
  <section class="p-6 space-y-4">
    <h2 class="text-3xl font-lore font-bold">🗺️ Locations</h2>
    <p class="text-zinc-500 dark:text-zinc-400">
      Define your world’s geography, landmarks, and key places.
    </p>

    <ClientOnly>
      <TagFilter category="locations" class="mb-4" />
    </ClientOnly>

    <CodexView
      title="Locations"
      :entities="filteredLocations"
      :onCreate="openCreateModal"
      :onExport="exportCodex"
    >
      <template #default="{ entities }">
        <LocationCard
          v-for="loc in entities"
          :key="loc.id"
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
