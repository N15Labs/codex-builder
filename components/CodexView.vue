<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  title: string
  entities: any[] | undefined
  onCreate: () => void
  onExport?: () => void
}>()

const isGrid = ref(true)

const safeEntities = computed(() => Array.isArray(props.entities) ? props.entities : [])
</script>

<template>
  <section class="space-y-4">
    <header class="flex justify-between items-center">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <div class="space-x-2">
        <button @click="onCreate" class="btn">+ Create</button>
        <button v-if="onExport" @click="onExport" class="btn-outline">Export</button>
        <button @click="isGrid = !isGrid" class="btn-outline">
          {{ isGrid ? 'List View' : 'Grid View' }}
        </button>
      </div>
    </header>

    <div v-if="safeEntities.length === 0" class="text-center text-zinc-400 py-12">
      <p>No {{ title.toLowerCase() }} found.</p>
    </div>

    <div v-else :class="isGrid ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'space-y-4'">
      <slot :entities="safeEntities" />
    </div>
  </section>
</template>

<style scoped>
.btn {
  @apply bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700;
}

.btn-outline {
  @apply border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-700 hover:text-white;
}
</style>
