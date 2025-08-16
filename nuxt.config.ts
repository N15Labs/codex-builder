export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:5035'
    }
  },
  css: [
    '~/assets/css/tailwind.css',
    '@syncfusion/ej2-base/styles/material.css',
    '@syncfusion/ej2-buttons/styles/material.css',
    '@syncfusion/ej2-inputs/styles/material.css',
    '@syncfusion/ej2-navigations/styles/material.css',
    '@syncfusion/ej2-popups/styles/material.css',
    '@syncfusion/ej2-splitbuttons/styles/material.css',
    '@syncfusion/ej2-calendars/styles/material.css',
    '@syncfusion/ej2-dropdowns/styles/material.css',
    '@syncfusion/ej2-vue-grids/styles/material.css',
    '@syncfusion/ej2-vue-richtexteditor/styles/material.css'
  ],
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
  build: {
    transpile: ['@syncfusion/ej2-vue-grids', '@syncfusion/ej2-vue-richtexteditor']
  },
  vite: {
    define: { 'process.env.DEBUG': false },
    build: {
      rollupOptions: {
        external: [
          '@syncfusion/ej2-base/styles/material.css',
          '@syncfusion/ej2-buttons/styles/material.css',
          '@syncfusion/ej2-inputs/styles/material.css',
          '@syncfusion/ej2-navigations/styles/material.css',
          '@syncfusion/ej2-popups/styles/material.css',
          '@syncfusion/ej2-splitbuttons/styles/material.css',
          '@syncfusion/ej2-calendars/styles/material.css',
          '@syncfusion/ej2-dropdowns/styles/material.css',
          '@syncfusion/ej2-vue-grids/styles/material.css',
          '@syncfusion/ej2-vue-richtexteditor/styles/material.css'
        ]
      }
    }
  }
})