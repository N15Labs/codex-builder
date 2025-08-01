<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { useLocationStore } from '@/stores/useLocationStore'

const locationStore = useLocationStore()
const emit = defineEmits(['submit', 'close'])
const props = defineProps({ entity: Object })

const GroupSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  type: z.string().optional(),
  ideology: z.string().optional(),
  tags: z.array(z.string()).optional(),
  baseLocationId: z.string().optional() // 
})

const model = ref({
  baseLocationId: '',
  ...props.entity
})

const handleSubmit = () => {
  const result = GroupSchema.safeParse(model.value)
  if (!result.success) return alert(result.error.errors[0].message)
  emit('submit', result.data)
}
</script>

<template>
  <div class="modal">
    <div class="modal-box space-y-4">
      <h2 class="text-xl font-bold">New Group</h2>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Group Name</label>
        <input
          v-model="model.name"
          placeholder="Group Name"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Type</label>
        <input
          v-model="model.type"
          placeholder="Type"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Ideology</label>
        <textarea
          v-model="model.ideology"
          placeholder="Ideology"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Tags</label>
        <input
          v-model="model.tags"
          placeholder="Tags (comma-separated)"
          @blur="model.tags = model.tags?.split(',').map(t => t.trim())"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Base Location</label>
        <BaseSelect
          v-model="model.baseLocationId"
          :options="locationStore.locations"
          option-label="name"
          option-value="id"
          placeholder="Select location (optional)"
        />
      </div>

      <footer class="flex justify-end space-x-2">
        <button @click="$emit('close')" class="btn-outline">Cancel</button>
        <button @click="handleSubmit" class="btn">Save</button>
      </footer>
    </div>
  </div>
</template>
