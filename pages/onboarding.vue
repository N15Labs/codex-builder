<script setup lang="ts">
useHead({ title: 'Onboarding — Codex Builder' })
const steps = [
  { title: 'Create your first Codex', desc: 'Set a name and purpose for your world.' },
  { title: 'Add Characters, Groups, Items, Locations', desc: 'Use the + buttons to add entries.' },
  { title: 'Tag & Relate', desc: 'Add tags and relationships to connect your world.' },
  { title: 'Sync & Export', desc: 'Sign in to sync, or export JSON anytime.' },
]
</script>

<template>
  <section class="max-w-5xl mx-auto px-6 py-12">
    <div class="flex items-center gap-3 mb-8">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7ZM20 1l-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3Z"/></svg>
      <h1 class="text-3xl font-semibold">Welcome to Codex Builder</h1>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="(s, i) in steps" :key="i" class="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900">
        <h3 class="text-xl font-semibold mb-1">{{ i + 1 }}. {{ s.title }}</h3>
        <p class="text-zinc-600 dark:text-zinc-300">{{ s.desc }}</p>
      </div>
    </div>

    <div class="mt-10 flex flex-wrap gap-3">
      <NuxtLink to="/codex" class="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/></svg>
        Open Codex
      </NuxtLink>
      <NuxtLink to="/register" class="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-6 9v-1a6 6 0 0 1 12 0v1H6Zm14-9V9h-2V7h2V5h2v2h2v2h-2v2Z"/></svg>
        Create account
      </NuxtLink>
    </div>
  </section>
</template>
