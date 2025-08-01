<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGroupStore } from '@/stores/useGroupStore'
import { useTagStore } from '@/stores/useTagStore'
import GroupForm from '@/components/forms/GroupForm.vue'
import GroupCard from '@/components/cards/GroupCard.vue'


const groupStore = useGroupStore()
const tagStore = useTagStore()

const showModal = ref(false)
const activeGroup = ref<any | null>(null)

const exportCodex = ref<() => void>(() => {})
onMounted(async () => {
  const mod = await import('@/composables/useExportCodex')
  exportCodex.value = mod.useCodexImportExport().exportCodex
})

const openCreateModal = () => {
  activeGroup.value = { id: crypto.randomUUID(), name: '', tags: [] }
  showModal.value = true
}

const openEditModal = (group: any) => {
  activeGroup.value = { ...group } 
  showModal.value = true
}

const saveGroup = (entity: any) => {
  if (entity.id) {
    groupStore.editEntity(entity.id, entity)
  } else {
    entity.id = crypto.randomUUID()
    groupStore.addEntity(entity)
  }
  showModal.value = false
}

const filteredGroups = computed(() => {
  const groups = groupStore.groups ?? []
  if (tagStore.activeTags.length === 0) return groups
  return groups.filter(g =>
    g.tags?.some(tag => tagStore.activeTags.includes(tag))
  )
})
</script>

<template>
  <section class="p-6 space-y-4">
    <h2 class="text-3xl font-lore font-bold">🧑‍🤝‍🧑 Groups</h2>
    <p class="text-zinc-500 dark:text-zinc-400">Organisations, tribes, teams or factions.</p>

    <TagFilter class="mb-4" />

    <CodexView
      title="Groups"
      :entities="filteredGroups"
      :onCreate="openCreateModal"
      :onExport="exportCodex"
    >
      <template #default="{ entities }">
        <GroupCard
          v-for="group in entities"
          :key="group.id"
          :group="group"
          @click="openEditModal(group)"
        />
      </template>
    </CodexView>

    <GroupForm
      v-if="showModal"
      v-model:entity="activeGroup"
      @submit="saveGroup"
      @close="showModal = false"
    />
  </section>
</template>
