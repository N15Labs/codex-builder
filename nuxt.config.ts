// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: [
    '~/assets/css/tailwind.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt', 
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: ''
      }
    ]
  ],

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google'
      },
      {
        name: 'EB Garamond',
        provider: 'google'
      }
    ]
  },

  pinia: {},
  imports: {
    autoImport: true
  },

  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
})
