import { defineStore } from 'pinia'

export const useGroupStore = defineStore('group', {
  state: () => ({
    groups: [] as {
      id: string
      name: string
      type?: string
      ideology?: string
      tags?: string[]
      baseLocationId?: string    
      memberIds?: string[]       
    }[]
  }),

  actions: {
    addEntity(group: any) {
      this.groups.push(group)
    },
    editEntity(id: string, updated: any) {
      const index = this.groups.findIndex(g => g.id === id)
      if (index !== -1) {
        this.groups[index] = { ...this.groups[index], ...updated }
      }
    },
    removeEntity(id: string) {
      this.groups = this.groups.filter(g => g.id !== id)
    }
  },

  persist: process.client ? true : false
})
