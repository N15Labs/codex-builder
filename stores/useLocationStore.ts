import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', {
  state: () => ({
    locations: [] as {
      id: string
      name: string
      area?: string
      region?: string
      country?: string
      notes?: string
      tags?: string[]
      baseForGroupId?: string
      hostsItemIds?: string[]
      groupIds?: string[]
    }[]
  }),

  actions: {
    addEntity(location: any) {
      this.locations.push(location)
    },
    editEntity(id: string, updated: any) {
      const index = this.locations.findIndex(l => l.id === id)
      if (index !== -1) {
        this.locations[index] = { ...this.locations[index], ...updated }
      }
    },
    removeEntity(name: string) {
      this.locations = this.locations.filter(l => l.name !== name)
    }
  },

  persist: true
})
