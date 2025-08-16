<script setup lang="ts">
useHead({ bodyAttrs: { class: 'bg-white dark:bg-zinc-900' } })
</script>

<template>
  <div>
    <div class="absolute right-6 top-6 z-20">
      <DarkToggle />
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>
