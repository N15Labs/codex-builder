<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { useCharacterStore } from '@/stores/useCharacterStore'
import { useLocationStore } from '@/stores/useLocationStore'

const emit = defineEmits(['submit', 'close'])
const props = defineProps({ entity: Object })

const characterStore = useCharacterStore()
const locationStore = useLocationStore()

const ItemSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  type: z.string().optional(),
  tags: z.array(z.string()).optional(),
  ownerId: z.string().optional(),
  originId: z.string().optional()
})

const model = ref({
  ownerId: '',
  originId: '',
  ...props.entity
})

const handleSubmit = () => {
  const result = ItemSchema.safeParse(model.value)
  if (!result.success) return alert(result.error.errors[0].message)
  emit('submit', result.data)
}
</script>

<template>
  <div class="modal">
    <div class="modal-box space-y-4">
      <h2 class="text-xl font-bold">
        {{ model.id ? 'Edit Item' : 'New Item' }}
      </h2>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Name</label>
        <input
          v-model="model.name"
          placeholder="Item name"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Type</label>
        <input
          v-model="model.type"
          placeholder="e.g. Weapon, Artifact"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Description</label>
        <textarea
          v-model="model.description"
          placeholder="Item description"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Tags</label>
        <input
          v-model="model.tags"
          placeholder="Comma-separated tags"
          @blur="model.tags = model.tags?.split(',').map(t => t.trim())"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Owner (Character)</label>
        <BaseSelect
          v-model="model.ownerId"
          :options="characterStore.characters"
          option-label="name"
          option-value="id"
          placeholder="Select an owner"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Origin (Location)</label>
        <BaseSelect
          v-model="model.originId"
          :options="locationStore.locations"
          option-label="name"
          option-value="id"
          placeholder="Select a location"
        />
      </div>

      <footer class="flex justify-end space-x-2">
        <button @click="$emit('close')" class="btn-outline">Cancel</button>
        <button @click="handleSubmit" class="btn">Save</button>
      </footer>
    </div>
  </div>
</template>
