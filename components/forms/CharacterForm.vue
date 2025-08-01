<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { useGroupStore } from '@/stores/useGroupStore'

const groupStore = useGroupStore()


const emit = defineEmits(['submit', 'close'])
const props = defineProps({ entity: Object })

const CharacterSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  occupation: z.string().optional(),
  tags: z.array(z.string()).optional(),
  groupId: z.string().optional() 
})

const model = ref({
  groupId: '',
  ...props.entity
})

const handleSubmit = () => {
  const result = CharacterSchema.safeParse(model.value)
  if (!result.success) return alert(result.error.errors[0].message)
  emit('submit', result.data)
}
</script>

<template>
  <div class="modal">
    <div class="modal-box space-y-4">
      <h2 class="text-xl font-bold">New Character</h2>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Name</label>
        <input
          v-model="model.name"
          placeholder="Name"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Description</label>
        <textarea
          v-model="model.description"
          placeholder="Description"
          class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Occupation</label>
        <input
          v-model="model.occupation"
          placeholder="Occupation"
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
        <label class="block text-sm font-medium mb-1">Affiliation / Group</label>
        <BaseSelect
          v-model="model.groupId"
          :options="groupStore.groups"
          option-label="name"
          option-value="id"
          placeholder="Select a group (optional)"
        />
      </div>

      <footer class="flex justify-end space-x-2">
        <button @click="$emit('close')" class="btn-outline">Cancel</button>
        <button @click="handleSubmit" class="btn">Save</button>
      </footer>
    </div>
  </div>
</template>
