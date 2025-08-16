import { defineStore } from 'pinia'

export const useTagStore = defineStore('tag', {
  state: () => ({
    tags: {
      characters: ['mage', 'royalty'],
      groups: ['rebels', 'order', 'guild'],
      locations: ['city', 'village', 'ruins'],
      items: ['legendary', 'cursed', 'artifact']
    } as Record<string, string[]>,

    activeTags: {
      characters: [] as string[],
      groups: [] as string[],
      locations: [] as string[],
      items: [] as string[]
    }
  }),

  actions: {
    toggle(category: string, tag: string) {
      const current = this.activeTags[category] || []
      if (current.includes(tag)) {
        this.activeTags[category] = current.filter(t => t !== tag)
      } else {
        this.activeTags[category] = [...current, tag]
      }
    },

    clear(category?: string) {
      if (category) {
        this.activeTags[category] = []
      } else {
        for (const key in this.activeTags) {
          this.activeTags[key] = []
        }
      }
    },

    addTag(category: string, tag: string) {
      if (!this.tags[category]) this.tags[category] = []
      if (!this.tags[category].includes(tag)) {
        this.tags[category].push(tag)
      }
    },

    removeTag(category: string, tag: string) {
      if (!this.tags[category]) return
      this.tags[category] = this.tags[category].filter(t => t !== tag)
      this.activeTags[category] = this.activeTags[category].filter(t => t !== tag)
    }
  },

  persist: true
})
