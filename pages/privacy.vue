<script setup lang="ts">
useHead({ title: 'Privacy Policy — Codex Builder' })
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-12">
    <div class="flex items-center gap-3 mb-6">
  
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"/></svg>
      <h1 class="text-3xl font-semibold">Privacy Policy</h1>
    </div>

    <div class="prose dark:prose-invert max-w-none">
      <p class="text-zinc-600 dark:text-zinc-300">Last updated: {{ new Date().toLocaleDateString() }}</p>

      <h2>What We Collect</h2>
      <p>Account details (email, name), codex entries you create, and usage analytics (aggregated).</p>

      <h2>How We Use It</h2>
      <p>To deliver features, maintain security, improve the service, and provide support.</p>

      <h2>Storage & Security</h2>
      <p>Data may be stored in the EU/UK or other regions with appropriate safeguards. We apply industry-standard security practices.</p>

      <h2>Your Rights</h2>
      <p>Access, rectify, export, or delete your data by contacting support.</p>

      <h2>Contact</h2>
      <p>Email: support@n15labs.co.uk</p>
    </div>
  </section>
</template>
