<script setup lang="ts">
const props = defineProps<{
  entity: any
  onEdit: () => void
  onDelete: () => void
}>()
</script>

<template>
  <section class="p-6 rounded-xl bg-zinc-800 text-white space-y-4">
    <h2 class="text-xl font-bold">{{ entity.name }}</h2>

    <div v-for="(value, key) in entity" :key="key" class="text-sm">
      <strong class="capitalize">{{ key }}:</strong>
      <template v-if="Array.isArray(value)">
        <ul class="list-disc ml-4">
          <li v-for="item in value" :key="item">{{ item }}</li>
        </ul>
      </template>
      <template v-else-if="typeof value === 'object' && value !== null">
        <pre>{{ value }}</pre>
      </template>
      <template v-else>
        {{ value }}
      </template>
    </div>

    <div v-if="entity.groupId || entity.factionId" class="text-sm">
      <p>
        Belongs to:
        <NuxtLink
          v-if="entity.groupId"
          :to="`/groups/${entity.groupId}`"
          class="text-green-400 underline"
        >
          {{ entity.groupId }}
        </NuxtLink>
        <NuxtLink
          v-else-if="entity.factionId"
          :to="`/groups/${entity.factionId}`"
          class="text-green-400 underline"
        >
          {{ entity.factionId }}
        </NuxtLink>
      </p>
    </div>

    <div class="flex space-x-2 mt-4">
      <button @click="onEdit" class="btn">Edit</button>
      <button @click="onDelete" class="btn-outline text-red-400">Delete</button>
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
