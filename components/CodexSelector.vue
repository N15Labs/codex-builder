<template>
  <select v-model="current" @change="codexStore.setCurrentCodex(current)" class="rounded border px-3 py-1">
    <option v-for="codex in codexes" :key="codex.id" :value="codex.id">
      {{ codex.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useCodexStore } from '@/stores/useCodexStore'
import { storeToRefs } from 'pinia'

const codexStore = useCodexStore()
const { codexes, currentCodexId } = storeToRefs(codexStore)
const current = ref(currentCodexId.value)

onMounted(() => {
  codexStore.fetchCodexes()
})
</script>
