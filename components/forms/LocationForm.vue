<script setup lang="ts">
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { ref } from 'vue'
import { z } from 'zod'
import { useGroupStore } from '@/stores/useGroupStore'

const emit = defineEmits(['submit', 'close'])
const props = defineProps({ entity: Object })
const groupStore = useGroupStore()

const LocationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  area: z.string().optional(),
  region: z.string().optional(),
  country: z.string().optional(),
  notes: z.string().optional(),
  tags: z.array(z.string()).optional(),
  baseForGroupId: z.string().optional() 
})

const model = ref({
  baseForGroupId: '', 
  ...props.entity
})

const handleSubmit = () => {
  const result = LocationSchema.safeParse(model.value)
  if (!result.success) return alert(result.error.errors[0].message)
  emit('submit', result.data)
}
</script>

<template>
  <div class="modal">
    <div class="modal-box space-y-4">
      <h2 class="text-xl font-bold">New Location</h2>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Name</label>
        <input
          v-model="model.name"
          placeholder="Name"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Area</label>
        <input
          v-model="model.area"
          placeholder="Area"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Region</label>
        <input
          v-model="model.region"
          placeholder="Region"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Country</label>
        <input
          v-model="model.country"
          placeholder="Country"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Notes</label>
        <textarea
          v-model="model.notes"
          placeholder="Notes or Lore"
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
        <label class="block text-sm font-medium mb-1">Base For Group</label>
        <BaseSelect
          v-model="model.baseForGroupId"
          :options="groupStore.groups"
          option-label="name"
          option-value="id"
          placeholder="Select group (optional)"
        />
      </div>

      <footer class="flex justify-end space-x-2">
        <button @click="$emit('close')" class="btn-outline">Cancel</button>
        <button @click="handleSubmit" class="btn">Save</button>
      </footer>
    </div>
  </div>
</template>
