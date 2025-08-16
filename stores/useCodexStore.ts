import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'

export const useCodexStore = defineStore('codex', {
  state: () => ({
    codexes: [] as any[],
    currentCodexId: null as string | null,
  }),
  actions: {
    async fetchCodexes() {
      const api = useApi()
      this.codexes = await api('/api/codexes')
      this.currentCodexId ||= this.codexes[0]?.id
    },
    setCurrentCodex(id: string) {
      this.currentCodexId = id
    },
  },
})
