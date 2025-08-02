<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import { useCharacterStore } from '@/stores/useCharacterStore'
import { useGroupStore } from '@/stores/useGroupStore'
import { useLocationStore } from '@/stores/useLocationStore'

const characterStore = useCharacterStore()
const groupStore = useGroupStore()
const locationStore = useLocationStore()

const emit = defineEmits(['submit', 'close'])
const props = defineProps({ entity: Object })

const ItemSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Item name required'),
  type: z.string().optional(),
  history: z.union([z.string(), z.array(z.string())]).optional(),
  tags: z.array(z.string()).optional(),
  ownerType: z.enum(['character', 'group']).optional(),
  ownerId: z.string().optional(),
  locationId: z.string().optional()
})

const model = ref({
  id: props.entity?.id || crypto.randomUUID(),
  ownerType: 'character',
  ownerId: '',
  locationId: '',
  name: '',
  type: '',
  history: '',
  tags: [],
  ...props.entity
})

const handleSubmit = () => {
  // Handle tags conversion if it's a string
  if (typeof model.value.tags === 'string') {
    model.value.tags = model.value.tags.split(',').map(t => t.trim()).filter(Boolean)
  }
  
  const result = ItemSchema.safeParse(model.value)
  if (!result.success) {
    alert(result.error.errors[0].message)
    return
  }
  emit('submit', result.data)
}
</script>

<template>
  <div class="modal">
    <div class="modal-box space-y-4">
      <h2 class="text-xl font-bold">New Item</h2>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Item Name</label>
        <input
          v-model="model.name"
          placeholder="Item Name"
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
        <label class="block text-sm font-medium mb-1">History / Lore</label>
        <textarea
          v-model="model.history"
          placeholder="History or Lore"
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
        <label class="block text-sm font-medium mb-1">Owned By</label>
        <BaseSelect
          v-model="model.ownerType"
          :options="[
            { id: 'character', name: 'Character' },
            { id: 'group', name: 'Group' }
          ]"
          option-label="name"
          option-value="id"
          placeholder="Select owner type"
        />
      </div>

      <div class="mb-4" v-if="model.ownerType === 'character'">
        <label class="block text-sm font-medium mb-1">Character</label>
        <BaseSelect
          v-model="model.ownerId"
          :options="characterStore.characters"
          option-label="name"
          option-value="id"
          placeholder="Select character"
        />
      </div>

      <div class="mb-4" v-else-if="model.ownerType === 'group'">
        <label class="block text-sm font-medium mb-1">Group</label>
        <BaseSelect
          v-model="model.ownerId"
          :options="groupStore.groups"
          option-label="name"
          option-value="id"
          placeholder="Select group"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Found At Location</label>
        <BaseSelect
          v-model="model.locationId"
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