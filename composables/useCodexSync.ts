import { useApi } from './useApi'
import { useCharacterStore } from '@/stores/useCharacterStore'
import { useCodexStore } from '@/stores/useCodexStore'

export const useCodexSync = () => {
  const api = useApi()
  const characterStore = useCharacterStore()
  const codexStore = useCodexStore()

  const loadAll = async () => {
    const characters = await api('/api/codex')
    characterStore.setAll(characters)
  }

  const saveEntry = async (entry: any) => {
    const payload = { ...entry, codexId: codexStore.currentCodexId }

    if (entry.id) {
      await api(`/api/codex/${entry.id}`, {
        method: 'PUT',
        body: payload,
      })
    } else {
      await api('/api/codex', {
        method: 'POST',
        body: payload,
      })
    }
  }

  const deleteEntry = async (id: string) => {
    await api(`/api/codex/${id}`, { method: 'DELETE' })
  }

  return { loadAll, saveEntry, deleteEntry }
}
