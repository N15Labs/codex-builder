import { defineStore } from 'pinia'
import type { PersistedStateOptions } from 'pinia-plugin-persistedstate'

export const useTagStore = defineStore('tag', {
  state: () => ({
    tags: ['mage', 'royalty', 'city', 'legendary'] as string[],
    activeTags: [] as string[]
  }),

  actions: {
    toggle(tag: string) {
      if (this.activeTags.includes(tag)) {
        this.activeTags = this.activeTags.filter(t => t !== tag)
      } else {
        this.activeTags.push(tag)
      }
    },
    clear() {
      this.activeTags = []
    },
    addTag(tag: string) {
      if (!this.tags.includes(tag)) {
        this.tags.push(tag)
      }
    },
    removeTag(tag: string) {
      this.tags = this.tags.filter(t => t !== tag)
      this.activeTags = this.activeTags.filter(t => t !== tag)
    }
  },

  persist: true 
})
