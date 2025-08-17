import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem'
      }
    },
    extend: {
      /**
       * Light theme (default) – semantic tokens
       * Use in templates like:
       *  - bg-background text-foreground
       *  - bg-card text-card-foreground
       *  - text-muted-foreground
       *  - border-border
       *  - ring-1 ring-ring
       *  - bg-primary text-primary-foreground
       */
      colors: {
        // App background + base text
        background: colors.white,               // #ffffff
        foreground: colors.zinc[800],           // neutral body text

        // Surfaces
        card: {
          DEFAULT: colors.white,                // cards/surfaces
          foreground: colors.zinc[800]
        },
        popover: {
          DEFAULT: colors.white,
          foreground: colors.zinc[800]
        },

        // Accents
        primary: {
          // Matches your header vibe: text-purple-700 / dark:text-purple-300
          DEFAULT: '#6d28d9',                   // purple-700
          foreground: colors.white
        },
        secondary: {
          DEFAULT: colors.zinc[100],            // subtle chips/badges
          foreground: colors.zinc[800]
        },
        accent: {
          DEFAULT: colors.violet[100],
          foreground: colors.violet[900]
        },

        // Muted / subtle content
        muted: {
          DEFAULT: colors.zinc[100],
          foreground: colors.zinc[600]
        },

        // UI lines and focus
        border: colors.zinc[200],
        input: colors.zinc[200],
        ring: colors.violet[400],               // focus ring

        // Status (optional but handy)
        success: {
          DEFAULT: colors.emerald[500],
          foreground: colors.white
        },
        warning: {
          DEFAULT: colors.amber[500],
          foreground: colors.black
        },
        danger: {
          DEFAULT: colors.rose[500],
          foreground: colors.white
        },

        // You can still use the full Tailwind palettes (zinc, purple, violet, etc.)
      },

      fontFamily: {
        ui: ['Inter', 'sans-serif'],
        lore: ['EB Garamond', 'serif'],
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      },

      boxShadow: {
        // soft, modern shadows for light mode
        card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)',
        'card-lg': '0 10px 15px -3px rgba(16,24,40,0.08), 0 4px 6px -2px rgba(16,24,40,0.03)'
      }
    }
  },
  plugins: []
}

export default config
