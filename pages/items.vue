<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useItemStore } from '@/stores/useItemStore'
import { useTagStore } from '@/stores/useTagStore'
import ItemForm from '@/components/forms/ItemForm.vue'

const itemStore = useItemStore()
const tagStore = useTagStore()

const showModal = ref(false)
const activeItem = ref<any | null>(null)

const exportCodex = ref<() => void>(() => {})
onMounted(async () => {
  console.log('[Items.vue] Restored items:', itemStore.items)
  const mod = await import('@/composables/useExportCodex')
  exportCodex.value = mod.useCodexImportExport().exportCodex
})

const openCreateModal = () => {
  activeItem.value = { name: '', tags: [] } // ✅ No ID yet
  showModal.value = true
}

const openEditModal = (item: any) => {
  activeItem.value = { ...item }
  showModal.value = true
}

const saveItem = (entity: any) => {
  const existing = itemStore.items.find(i => i.id === entity.id)

  if (existing) {
    itemStore.editEntity(entity.id, entity)
  } else {
    entity.id = entity.id || crypto.randomUUID()
    itemStore.addEntity(entity)
  }

  showModal.value = false
}

const filteredItems = computed(() => {
  const items = itemStore.items ?? []

  // 🧪 DEBUG: Show items + active tag state
  console.log('[Items.vue] Items in store:', items)
  console.log('[Items.vue] Active tags:', tagStore.activeTags)

  // 🔧 Safe fallback if tag filters are empty or invalid
  if (!Array.isArray(tagStore.activeTags) || tagStore.activeTags.length === 0) return items

  return items.filter(i =>
    i.tags?.some(tag => tagStore.activeTags.includes(tag))
  )
})
</script>

<template>
  <section class="p-6 space-y-4">
    <h2 class="text-3xl font-lore font-bold">🧤 Items</h2>
    <p class="text-zinc-500 dark:text-zinc-400">Magical artifacts, weapons, tools, or relics.</p>

    <TagFilter class="mb-4" />

    <!-- ✅ Debug: Show item count -->
    <p class="text-xs text-zinc-400">Showing {{ filteredItems.length }} item(s)</p>

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
      v-model:entity="activeItem"
      @submit="saveItem"
      @close="showModal = false"
    />
  </section>
</template>
