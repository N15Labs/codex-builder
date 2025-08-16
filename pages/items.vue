<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useItemStore } from '@/stores/useItemStore'
import { useTagStore } from '@/stores/useTagStore'
import ItemForm from '@/components/forms/ItemForm.vue'
import ItemCard from '@/components/cards/ItemCard.vue'
import CodexView from '@/components/CodexView.vue'
import TagFilter from '@/components/TagFilter.vue'

const itemStore = useItemStore()
const tagStore = useTagStore()

const showModal = ref(false)
const selectedItem = ref<any | null>(null)

const exportCodex = ref<() => void>(() => {})
onMounted(async () => {
  const mod = await import('@/composables/useExportCodex')
  exportCodex.value = mod.useCodexImportExport().exportCodex
})

const openCreateModal = () => {
  selectedItem.value = { id: crypto.randomUUID(), name: '', tags: [] }
  showModal.value = true
}

const openEditModal = (item: any) => {
  selectedItem.value = { ...item }
  showModal.value = true
}

const handleSubmit = (entity: any) => {
  if (entity.id) {
    itemStore.editEntity(entity.id, entity)
  } else {
    entity.id = crypto.randomUUID()
    itemStore.addEntity(entity)
  }
  showModal.value = false
}

const filteredItems = computed(() => {
  const items = itemStore.items ?? []
  const active = tagStore.activeTags.items
  if (!active?.length) return items

  return items.filter(i =>
    i.tags?.some(tag => active.includes(tag))
  )
})
</script>

<template>
  <section class="p-6 space-y-4">
    <h2 class="text-3xl font-lore font-bold">🧰 Items</h2>
    <p class="text-zinc-500 dark:text-zinc-400">Weapons, relics, artefacts, etc.</p>

    <ClientOnly>
      <TagFilter category="items" class="mb-4" />
    </ClientOnly>

  <CodexView
      title="Items"
      :entities="filteredItems"
      :onCreate="openCreateModal"
      :onExport="exportCodex"
    >
      <template #default="{ entities }">
        <ItemCard
          v-for="item in entities"
          :key="item.id"
          :item="item"
          @click="openEditModal(item)"
        />
      </template>
  </CodexView>

    <ItemForm
      v-if="showModal"
      v-model:entity="selectedItem"
      @submit="handleSubmit"
      @close="showModal = false"
    />
  </section>
</template>
