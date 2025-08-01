<template>
  <div class="flex flex-wrap gap-2">
    <span
      v-for="tag in tags"
      :key="tag"
      @click="toggle(tag)"
      :class="[
        'px-2 py-1 rounded cursor-pointer select-none transition-colors duration-150',
        isActive(tag) ? 'bg-blue-600 text-white' : 'bg-zinc-600 text-zinc-200'
      ]"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useTagStore } from '@/stores/useTagStore'

const store = useTagStore()
const tags = store.tags
const toggle = store.toggle
const isActive = (tag: string) => store.activeTags.includes(tag)
</script>
