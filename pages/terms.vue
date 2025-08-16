<script setup lang="ts">
useHead({ title: 'Terms of Service — Codex Builder' })
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-12">
    <div class="flex items-center gap-3 mb-6">

      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor"><path d="M4 19a2 2 0 0 0 2 2h13v-2H6V5h13V3H6a2 2 0 0 0-2 2v14Z"/><path d="M8 7h10v2H8V7Zm0 4h10v2H8v-2Zm0 4h7v2H8v-2Z"/></svg>
      <h1 class="text-3xl font-semibold">Terms of Service</h1>
    </div>

    <div class="prose dark:prose-invert max-w-none">
      <p class="text-zinc-600 dark:text-zinc-300">Last updated: {{ new Date().toLocaleDateString() }}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using Codex Builder, you agree to be bound by these Terms of Service.</p>

      <h2>2. Accounts</h2>
      <p>You are responsible for safeguarding your account credentials and for all activities under your account.</p>

      <h2>3. Content</h2>
      <p>You retain ownership of your content. You grant us a limited license to operate the service (backup, processing, display).</p>

      <h2>4. Fair Use</h2>
      <p>No scraping, reverse engineering, or abusive usage that might degrade the service for others.</p>

      <h2>5. Termination</h2>
      <p>We may suspend or terminate access if these Terms are violated.</p>

      <h2>6. Changes</h2>
      <p>We may update these Terms; we’ll post changes here.</p>
    </div>
  </section>
</template>
