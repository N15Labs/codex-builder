<script setup lang="ts">
const { isAuthenticated, logout } = useAuth()
</script>

<template>
  <template v-if="isAuthenticated">
    <NuxtLink
      to="/dashboard"
      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h8v8H3V3Zm10 0h8v5h-8V3ZM3 13h5v8H3v-8Zm7 5h11v3H10v-3Z"/>
      </svg>
      Dashboard
    </NuxtLink>

    <button
      @click="logout"
      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 17v2H4V5h6v2H6v10h4Zm5-9 6 4-6 4v-3h-7v-2h7V8Z"/>
      </svg>
      Logout
    </button>
  </template>

  <template v-else>
    <NuxtLink
      to="/login"
      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 17v2H4V5h6v2H6v10h4Zm5-9 6 4-6 4v-3h-7v-2h7V8Z"/>
      </svg>
      Log in
    </NuxtLink>

    <NuxtLink
      to="/register"
      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-6 9v-1a6 6 0 0 1 12 0v1H6Zm14-9V9h-2V7h2V5h2v2h2v2h-2v2Z"/>
      </svg>
      Sign up
    </NuxtLink>
  </template>
</template>
