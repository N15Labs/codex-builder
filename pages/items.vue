<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useItemStore } from '@/stores/useItemStore'
import { useTagStore } from '@/stores/useTagStore'
import ItemForm from '@/components/forms/ItemForm.vue'

const itemStore = useItemStore()
const tagStore = useTagStore()

const showModal = ref(false)
const activeItem = ref<any | null>(null)

const openCreateModal = () => {
  activeItem.value = { name: '', tags: [] }
  showModal.value = true
}

const openEditModal = (item: any) => {
  activeItem.value = { ...item }
  showModal.value = true
}

const saveItem = (entity: any) => {
  const exists = itemStore.items.find(i => i.name === entity.name)
  if (exists) {
    itemStore.editEntity(entity.name, entity)
  } else {
    itemStore.addEntity(entity)
  }
  showModal.value = false
}

const filteredItems = computed(() => {
  const items = itemStore.items ?? []
  if (tagStore.activeTags.length === 0) return items
  return items.filter(i =>
    i.tags?.some(tag => tagStore.activeTags.includes(tag))
  )
})

const exportCodex = ref<() => void>(() => {})
onMounted(async () => {
  const mod = await import('@/composables/useExportCodex')
  exportCodex.value = mod.useCodexImportExport().exportCodex
})
</script>

<template>
  <section class="p-6 space-y-4">
    <h2 class="text-3xl font-lore font-bold">🧤 Items</h2>
    <p class="text-zinc-500 dark:text-zinc-400">Magical artifacts, weapons, tools, or relics.</p>

    <TagFilter class="mb-4" />

    <CodexView
      title="Items"
      :entities="filteredItems"
      :onCreate="openCreateModal"
      :onExport="exportCodex.value"
    >
      <template #default="{ entities }">
        <ItemCard
          v-for="item in entities"
          :key="item.name"
          :item="item"
          @click="openEditModal(item)"
        />
      </template>
    </CodexView>

    <ItemForm
      v-if="showModal"
      v-model:entity="activeItem"
      @submit="saveItem"
      @close="showModal = false"
    />
  </section>
</template>
