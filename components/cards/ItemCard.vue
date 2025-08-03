<script setup lang="ts">
import { Package } from 'lucide-vue-next'

defineProps<{
  item: {
    id?: string
    name: string
    type?: string
    origin?: string
    tags?: string[]
  }
}>()
</script>

<template>
  <div
    class="bg-zinc-800 border border-zinc-700 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 transition-all transform hover:scale-[1.02] flex flex-col items-center justify-center text-center text-white"
  >
    <Package class="w-12 h-12 text-purple-400 mb-3" />

    <h3 class="text-2xl font-bold font-lore text-purple-300">
      {{ item.name }}
    </h3>

    <p v-if="item.type" class="text-sm text-zinc-400 mt-1">
      {{ item.type }}
    </p>

    <p v-if="item.origin" class="text-sm italic text-zinc-300 mt-2">
      "{{ item.origin }}"
    </p>

    <div
      v-if="item.tags?.length"
      class="mt-4 flex flex-wrap justify-center gap-2 text-xs text-purple-300"
    >
      <span
        v-for="tag in item.tags"
        :key="tag"
        class="px-2 py-1 bg-purple-900 rounded-full"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
