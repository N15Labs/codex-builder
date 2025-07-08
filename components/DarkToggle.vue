<template>
  <button class="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-white transition" @click="toggle">
    {{ mode === 'dark' ? '🌙 Dark' : '☀️ Light' }}
  </button>
</template>

<script setup lang="ts">
const mode = useColorMode()
const toggle = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>
