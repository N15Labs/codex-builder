<script setup lang="ts">
import { computed } from 'vue'
import { Map } from 'lucide-vue-next'
import { useItemStore } from '@/stores/useItemStore'
import { useGroupStore } from '@/stores/useGroupStore'

const props = defineProps({
  location: {
    type: Object,
    required: true
  }
})

const itemStore = useItemStore()
const groupStore = useGroupStore()

const itemsHere = computed(() =>
  itemStore.items.filter(item => item.originId === props.location.id)
)

const groupsHere = computed(() =>
  groupStore.groups.filter(group => group.locationId === props.location.id)
)
</script>

<template>
  <div
    class="bg-zinc-800 border border-zinc-700 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 transition-all transform hover:scale-[1.02] flex flex-col items-center text-center text-white"
  >
    <Map class="w-12 h-12 text-purple-400 mb-3" />

    <h3 class="text-2xl font-bold font-lore text-purple-300">
      {{ location.name }}
    </h3>

    <p v-if="location.region || location.country" class="text-sm text-zinc-400 mt-1">
      {{ location.region || '—' }}, {{ location.country || '—' }}
    </p>

    <p v-if="location.description" class="text-sm italic text-zinc-300 mt-2">
      "{{ location.description }}"
    </p>

    <div
      v-if="location.tags?.length"
      class="mt-4 flex flex-wrap justify-center gap-2 text-xs text-purple-300"
    >
      <span
        v-for="tag in location.tags"
        :key="tag"
        class="px-2 py-1 bg-purple-900 rounded-full"
      >
        {{ tag }}
      </span>
    </div>

    <div v-if="itemsHere.length" class="mt-4 w-full text-left">
      <p class="text-xs text-zinc-400 font-medium mb-1">Items here:</p>
      <ul class="list-disc list-inside text-sm text-zinc-300">
        <li v-for="item in itemsHere" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>

    <div v-if="groupsHere.length" class="mt-3 w-full text-left">
      <p class="text-xs text-zinc-400 font-medium mb-1">Groups based here:</p>
      <ul class="list-disc list-inside text-sm text-zinc-300">
        <li v-for="group in groupsHere" :key="group.id">{{ group.name }}</li>
      </ul>
    </div>
  </div>
</template>
