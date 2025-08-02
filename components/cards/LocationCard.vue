<script setup lang="ts">
import { computed } from 'vue'
import { useItemStore } from '@/stores/useItemStore'
import { useGroupStore } from '@/stores/useGroupStore'

const props = defineProps({
  location: {
    type: Object,
    required: true
  }
})

const itemStore = useItemStore()
const groupStore = useGroupStore() 

const itemsHere = computed(() =>
  itemStore.items.filter(item => item.locationId === props.location.id)
)

const groupsHere = computed(() =>
groupStore.groups.filter(group => group.locationId === props.location.id)
)
</script>

<template>
  <div
    class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
  >
    <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300">
      {{ location.name }}
    </h3>

    <p
      class="text-sm text-zinc-500 dark:text-zinc-400"
      v-if="location.region || location.country"
    >
      {{ location.region || '—' }}, {{ location.country || '—' }}
    </p>

    <div v-if="location.tags?.length" class="mt-2 flex flex-wrap gap-2">
      <span
        v-for="tag in location.tags"
        :key="tag"
        class="text-xs px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full"
      >
        {{ tag }}
      </span>
    </div>

    <div v-if="itemsHere.length" class="mt-4">
      <p class="text-xs text-zinc-400 font-medium mb-1">Items here:</p>
      <ul class="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300">
        <li v-for="item in itemsHere" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>

    <div v-if="groupsHere.length" class="mt-2">
      <p class="text-xs text-zinc-400 font-medium mb-1">Groups based here:</p>
      <ul class="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300">
        <li v-for="group in groupsHere" :key="group.id">{{ group.name }}</li>
      </ul>
    </div>
  </div>
</template>
