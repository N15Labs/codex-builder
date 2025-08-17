export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  nitro: {
    preset: 'vercel',
    experimental: { wasm: true },
    routeRules: {
      '/codex': { redirect: '/' }
    }
  },

  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE ||
        (process.env.NODE_ENV === 'production'
          ? 'https://your-api-domain.com'
          : 'http://localhost:5035')
    }
  },

  // Load Tailwind globally
  css: ['~/assets/css/tailwind.css'],

  // Tailwind v3 PostCSS wiring
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    ['@nuxtjs/color-mode', { classSuffix: '' }]
  ],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'EB Garamond', provider: 'google' }
    ]
  },

  pinia: {},
  imports: { autoImport: true },

  typescript: { shim: false },

  build: {
    // transpile: ['@syncfusion/ej2-vue-grids', '@syncfusion/ej2-vue-richtexteditor']
  },

  vite: {
    define: { 'process.env.DEBUG': false },
    build: { rollupOptions: {} }
  }
})
