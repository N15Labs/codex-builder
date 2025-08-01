<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCharacterStore } from '@/stores/useCharacterStore'
import { useTagStore } from '@/stores/useTagStore'
import CharacterForm from '@/components/forms/CharacterForm.vue'
import CharacterCard from '@/components/cards/CharacterCard.vue'


let exportCodex = () => {}

if (process.client) {
  const mod = await import('@/composables/useExportCodex')
  exportCodex = mod.useCodexImportExport().exportCodex
}

const characterStore = useCharacterStore()
const tagStore = useTagStore()

const showModal = ref(false)
const activeCharacter = ref<any | null>(null)

const openCreateModal = () => {
  activeCharacter.value = { name: '', tags: [] }
  showModal.value = true
}

const openEditModal = (char: any) => {
  activeCharacter.value = { ...char }
  showModal.value = true
}

const saveCharacter = (entity: any) => {
  const existing = characterStore.characters.find(c => c.name === entity.name)

  if (existing) {
    characterStore.editEntity(existing.id, { ...existing, ...entity })
  } else {
    const newCharacter = {
      id: crypto.randomUUID?.() || Date.now().toString(), 
      ...entity
    }
    characterStore.addEntity(newCharacter)
  }

  showModal.value = false
}

const filteredCharacters = computed(() => {
  const characters = characterStore.characters ?? []
  if (tagStore.activeTags.length === 0) return characters
  return characters.filter(c =>
    c.tags?.some(tag => tagStore.activeTags.includes(tag))
  )
})
</script>

<template>
  <section class="p-6 space-y-4">
    <h2 class="text-3xl font-lore font-bold">🧝 Characters</h2>
    <p class="text-zinc-500 dark:text-zinc-400">
      Browse and manage the characters in your world.
    </p>

    <TagFilter class="mb-4" />

    <CodexView
      title="Characters"
      :entities="filteredCharacters"
      :onCreate="openCreateModal"
      :onExport="exportCodex"
    >
      <template #default="{ entities }">
        <CharacterCard
          v-for="char in entities"
          :key="char.id"
          :character="char"
          @click="openEditModal(char)"
        />

      </template>
    </CodexView>

    <CharacterForm
      v-if="showModal"
      v-model:entity="activeCharacter"
      @submit="saveCharacter"
      @close="showModal = false"
    />
  </section>
</template>
