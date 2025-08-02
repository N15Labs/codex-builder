<script setup lang="ts">
import { computed } from 'vue'
import { useCharacterStore } from '@/stores/useCharacterStore'
import { useGroupStore } from '@/stores/useGroupStore'
import { useLocationStore } from '@/stores/useLocationStore'

console.log('[ItemCard] Props:', props.item)
console.log('[ItemCard] Received item:', props.item)



const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const characterStore = useCharacterStore()
const groupStore = useGroupStore()
const locationStore = useLocationStore()

const ownerName = computed(() => {
  const { ownerType, ownerId } = props.item
  if (!ownerType || !ownerId) return null

  if (ownerType === 'character') {
    return characterStore.characters.find(c => c.id === ownerId)?.name ?? null
  } else if (ownerType === 'group') {
    return groupStore.groups.find(g => g.id === ownerId)?.name ?? null
  }
  return null
})

const locationName = computed(() => {
  const id = props.item.locationId
  if (!id) return null
  return locationStore.locations.find(loc => loc.id === id)?.name ?? null
})
</script>

<template>
    <pre class="text-xs text-red-500">{{ item }}</pre>
  <div
    class="border border-purple-500/30 rounded p-4 cursor-pointer hover:shadow-md transition bg-white dark:bg-zinc-900"
  >
    <h3 class="font-semibold text-lg text-purple-700 dark:text-purple-300">
      {{ item.name || 'Unnamed Item' }}
    </h3>

    <p class="text-sm text-zinc-500" v-if="item.type">
      Type: {{ item.type }}
    </p>

    <p class="text-sm" v-if="ownerName.value">
      <span class="font-medium text-zinc-600">Owned by:</span> {{ ownerName.value }}
    </p>

    <p class="text-sm" v-if="locationName.value">
      <span class="font-medium text-zinc-600">Found at:</span> {{ locationName.value }}
    </p>

    <div v-if="item.tags?.length" class="mt-2 flex flex-wrap gap-1">
      <span
        v-for="tag in item.tags"
        :key="tag"
        class="text-xs px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
