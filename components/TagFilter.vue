<script setup lang="ts">
import { computed } from 'vue'
import { useTagStore } from '@/stores/useTagStore'

const props = defineProps<{ category: string }>()
const tagStore = useTagStore()

const tags = computed(() => tagStore?.tags?.[props.category] || [])
const isActive = (tag: string) => tagStore?.activeTags?.[props.category]?.includes(tag)
const toggle = (tag: string) => tagStore?.toggle?.(props.category, tag)

if (process.client) {
  console.log('🔍 Tags for', props.category, tags.value)
}
</script>

<template>
  <div class="flex flex-wrap gap-2 mb-4">
    <span
      v-for="tag in tags"
      :key="tag"
      @click="toggle(tag)"
      class="px-2 py-1 rounded cursor-pointer select-none transition-colors duration-150"
      :class="isActive(tag)
        ? 'bg-purple-600 text-white shadow-md'
        : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'"
    >
      {{ tag }}
    </span>

    <!-- Optional Clear Button -->
    <button
      v-if="tagStore?.activeTags?.[props.category]?.length"
      @click="tagStore.clear(props.category)"
      class="ml-2 px-2 py-1 text-xs rounded bg-zinc-500 text-white hover:bg-zinc-400"
    >
      Clear Filters
    </button>
  </div>
</template>
