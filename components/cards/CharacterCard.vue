<script setup lang="ts">
defineProps<{
  character: {
    name: string
    description?: string
    occupation?: string
    tags?: string[]
  }
}>()
</script>

<template>
  <div
    class="card hover:shadow-lg border border-purple-400 rounded-md p-4 transition cursor-pointer bg-white dark:bg-zinc-800"
  >
    <h3 class="text-lg font-bold text-purple-700 dark:text-purple-300">
      {{ character.name }}
    </h3>

    <p v-if="character.occupation" class="text-sm text-zinc-500">
      {{ character.occupation }}
    </p>

    <p v-if="character.description" class="text-xs text-zinc-600 mt-2 italic">
      "{{ character.description }}"
    </p>

    <div
      v-if="character.tags?.length"
      class="mt-2 flex flex-wrap gap-1 text-xs text-purple-500"
    >
      <span
        v-for="tag in character.tags"
        :key="tag"
        class="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
