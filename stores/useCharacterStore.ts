import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('characters', {
  state: () => ({
    characters: [] as {
      id: string
      name: string
      description?: string
      occupation?: string
      tags?: string[]
      groupId?: string       
      allegiances?: string[] 
    }[]
  }),

  actions: {
    addEntity(character: any) {
      this.characters.push(character)
    },
    editEntity(id: string, updated: any) {
      const index = this.characters.findIndex(c => c.id === id)
      if (index !== -1) {
        this.characters[index] = { ...this.characters[index], ...updated }
      }
    },
    removeEntity(id: string) {
      this.characters = this.characters.filter(c => c.id !== id)
    }
  },

  persist: process.client ? { storage: localStorage } : false
})
