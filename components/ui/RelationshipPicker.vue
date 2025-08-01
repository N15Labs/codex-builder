<script setup lang="ts">
import { ref, watch, computed } from 'vue'

const props = defineProps<{
  modelValue: string | string[]
  options: { id: string; name: string; description?: string }[]
  multiple?: boolean
  title?: string
}>()

const emit = defineEmits(['update:modelValue', 'close'])

const selected = ref<string[]>([])

watch(
  () => props.modelValue,
  () => {
    selected.value = Array.isArray(props.modelValue)
      ? [...props.modelValue]
      : props.modelValue
      ? [props.modelValue]
      : []
  },
  { immediate: true }
)

const toggle = (id: string) => {
  if (props.multiple) {
    selected.value.includes(id)
      ? selected.value.splice(selected.value.indexOf(id), 1)
      : selected.value.push(id)
  } else {
    selected.value = [id]
  }
}

const save = () => {
  emit('update:modelValue', props.multiple ? selected.value : selected.value[0] || '')
  emit('close')
}
</script>

<template>
  <div class="modal modal-open">
    <div class="modal-box max-w-2xl space-y-4">
      <h2 class="text-xl font-bold">{{ title || 'Select Entities' }}</h2>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="entity in options"
          :key="entity.id"
          :class="[
            'border rounded p-3 cursor-pointer transition',
            selected.includes(entity.id)
              ? 'bg-blue-500 text-white border-blue-600'
              : 'hover:border-blue-400'
          ]"
          @click="toggle(entity.id)"
        >
          <h3 class="font-semibold">{{ entity.name }}</h3>
          <p class="text-sm opacity-70">{{ entity.description }}</p>
        </div>
      </div>

      <footer class="flex justify-end space-x-2 pt-4">
        <button @click="$emit('close')" class="btn-outline">Cancel</button>
        <button @click="save" class="btn">Confirm</button>
      </footer>
    </div>
  </div>
</template>
