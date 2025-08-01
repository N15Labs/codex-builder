import { defineStore } from 'pinia'

export const useItemStore = defineStore('item', {
  state: () => ({
    items: [] as {
      id: string
      name: string
      type?: string
      history?: string | string[]
      tags?: string[]
      ownerType?: 'character' | 'group'
      ownerId?: string
      locationId?: string
    }[]
  }),

  actions: {
    addEntity(item: any) {
      this.items.push(item)
    },
    editEntity(name: string, updated: any) {
      const index = this.items.findIndex(i => i.name === name)
      if (index !== -1) {
        this.items[index] = { ...this.items[index], ...updated }
      }
    },
    removeEntity(name: string) {
      this.items = this.items.filter(i => i.name !== name)
    }
  },

  persist: true
})
