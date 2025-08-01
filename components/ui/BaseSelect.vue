<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  options: Array<Record<string, any>>
  optionLabel: string
  optionValue: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const selectedValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})
</script>

<template>
  <select
    v-model="selectedValue"
    class="w-full px-3 py-2 border rounded text-black dark:text-white bg-white dark:bg-zinc-900"
  >
    <option value="" disabled>
      {{ placeholder || 'Select an option' }}
    </option>
    <option
      v-for="option in options"
      :key="option[optionValue]"
      :value="option[optionValue]"
    >
      {{ option[optionLabel] }}
    </option>
  </select>
</template>
