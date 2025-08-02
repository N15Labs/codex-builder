import { defineStore } from 'pinia'

export const useItemStore = defineStore('items', {
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
    editEntity(id: string, updated: any) {
      const index = this.items.findIndex(i => i.id === id)
      if (index !== -1) {
        this.items[index] = { ...this.items[index], ...updated }
      }
    },
    removeEntity(id: string) {
      this.items = this.items.filter(i => i.id !== id)
    },
    getEntityById(id: string) {
      return this.items.find(item => item.id === id)
    }
  },

  persist: process.client ? true : false
})