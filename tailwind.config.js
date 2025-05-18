/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  // JIT modu ve daha hızlı derlemeler için
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  // Purge edilecek ek dosyaları belirt
  safelist: [
    'bg-primary-500',
    'text-primary-500',
    'border-primary-500'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif']
      }
    }
  },
  // Daha hızlı render için ağır olanları devre dışı bırak
  corePlugins: {
    backdropFilter: false,
    container: false, // Gerekirse eklenebilir
    touchAction: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    scrollSnapType: false,
    borderOpacity: false,
    textOpacity: false,
    backgroundOpacity: false
  },
  plugins: [
    typography,
    forms
  ]
};
