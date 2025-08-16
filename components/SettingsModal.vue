<template>
  <dialog
    ref="modal"
    class="rounded-2xl p-6 w-full max-w-md bg-white text-zinc-800 shadow-lg backdrop:backdrop-blur-xl"
  >
    <h2 class="text-xl font-semibold mb-4">⚙️ Settings</h2>

    <div class="space-y-3">
      <button class="btn w-full bg-purple-600 text-white" @click="handleSync">
        🔁 Sync Now
      </button>

      <label class="w-full flex flex-col gap-1">
        <span>📥 Import Codex (JSON)</span>
        <input type="file" accept="application/json" class="text-sm" aria-label="Import codex JSON file" @change="handleImport">
      </label>

      <button class="btn w-full border border-zinc-300" @click="exportJSON">
        📤 Export Codex
      </button>

      <button class="btn w-full border border-zinc-300" @click="toggleTheme">
        🌓 Toggle Theme ({{ colorMode.value === 'dark' ? 'Dark' : 'Light' }})
      </button>

      <button
        class="btn w-full bg-red-100 text-red-600 border border-red-200 hover:bg-red-200"
        @click="clearLocal"
      >
        🗑 Clear Local Storage
      </button>

      <button class="btn w-full text-zinc-500 hover:text-zinc-800" @click="logout">
        🚪 Log Out
      </button>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useCodexSync } from '@/composables/useCodexSync'
import { useCharacterStore } from '@/stores/useCharacterStore'
import { useItemStore } from '@/stores/useItemStore'
import { useGroupStore } from '@/stores/useGroupStore'
import { useLocationStore } from '@/stores/useLocationStore'

const colorMode = useColorMode()

const modal = ref<HTMLDialogElement>()
const { logout } = useAuth()
const { loadAll } = useCodexSync()

const open = () => modal.value?.showModal()
const close = () => modal.value?.close()
defineExpose({ open, close })

const handleSync = async () => {
  await loadAll()
  alert('Synced ✅')
}

const exportJSON = () => {
  const charStore = useCharacterStore()
  const itemStore = useItemStore()
  const groupStore = useGroupStore()
  const locationStore = useLocationStore()

  const payload = {
    characters: charStore.characters,
    items: itemStore.items,
    groups: groupStore.groups,
    locations: locationStore.locations,
    exportedAt: new Date().toISOString()
  }

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: 'application/json'
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'codex-export.json'
  a.click()
  URL.revokeObjectURL(url)
}

const handleImport = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = async (ev) => {
    try {
      const data = JSON.parse(ev.target?.result as string)

      const charStore = useCharacterStore()
      const itemStore = useItemStore()
      const groupStore = useGroupStore()
      const locationStore = useLocationStore()

      const sync = useCodexSync()

      charStore.setAll(data.characters || [])
      itemStore.setAll(data.items || [])
      groupStore.setAll(data.groups || [])
      locationStore.setAll(data.locations || [])

      await sync.saveAll({
        characters: charStore.characters,
        items: itemStore.items,
        groups: groupStore.groups,
        locations: locationStore.locations
      })

      alert('Import complete ✅')
    } catch (err) {
      console.error(err)
      alert('Import failed. Is the file valid JSON?')
    }
  }

  reader.readAsText(file)
}

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const clearLocal = () => {
  localStorage.clear()
  alert('Local storage cleared.')
  window.location.reload()
}
</script>

<style scoped>
dialog::backdrop {
  background: rgba(0, 0, 0, 0.4);
}
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease;
}
</style>