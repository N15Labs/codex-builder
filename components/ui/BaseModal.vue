<script setup lang="ts">
const emit = defineEmits(['close'])

function handleBackgroundClick(e: MouseEvent) {
  if ((e.target as HTMLElement)?.id === 'modal-bg') emit('close')
}
</script>

<template>
  <div
    id="modal-bg"
    class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
    @click="handleBackgroundClick"
  >
    <div class="bg-white dark:bg-zinc-900 rounded-lg shadow-lg max-w-lg w-full mx-4 overflow-hidden">
      <header class="p-4 border-b border-zinc-200 dark:border-zinc-700 font-bold text-lg">
        <slot name="title">Modal</slot>
      </header>

      <section class="p-4 space-y-4">
        <slot />
      </section>

      <footer class="p-4 border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>
