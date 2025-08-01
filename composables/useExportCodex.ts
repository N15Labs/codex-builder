import { CodexSchema } from '@/utils/schema'
import { useCharacterStore } from '@/stores/useCharacterStore'
import { useGroupStore } from '@/stores/useGroupStore'
import { useLocationStore } from '@/stores/useLocationStore'
import { useItemStore } from '@/stores/useItemStore'

export function useCodexImportExport() {
  const characterStore = useCharacterStore()
  const groupStore = useGroupStore()
  const locationStore = useLocationStore()
  const itemStore = useItemStore()

  const exportCodex = () => {
    if (!process.client) return

    const codex = {
      characters: characterStore.characters,
      groups: groupStore.groups,
      locations: locationStore.locations,
      items: itemStore.items
    }

    try {
      const blob = new Blob([JSON.stringify(codex, null, 2)], {
        type: 'application/json'
      })

      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'codex-export.json'
      link.click()

      URL.revokeObjectURL(link.href)
    } catch (err) {
      console.error('❌ Export failed:', err)
    }
  }

  const importCodex = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!process.client) {
        reject(new Error('Codex import is only available on the client.'))
        return
      }

      const reader = new FileReader()

      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string)
          const validated = CodexSchema.parse(parsed)

          characterStore.characters = validated.characters
          groupStore.groups = validated.groups
          locationStore.locations = validated.locations
          itemStore.items = validated.items

          resolve()
        } catch (error) {
          console.error('❌ Failed to import Codex:', error)
          reject(error)
        }
      }

      reader.onerror = () => reject(reader.error)
      reader.readAsText(file)
    })
  }

  return {
    exportCodex,
    importCodex
  }
}
