import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";
// https://vitejs.dev/config/
const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  outDir: 'dist',
  manifest: {
    name: 'Animation PWA',
    short_name: 'Animation',
    description: 'example animates PWA Vue Vite',
    theme_color: '#ffffff',
    icons: [
      {
        src: "assets/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "assets/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: 'assets/images/mstile-150x150.png',
        sizes: '270x270',
        type: 'images/png'
      },
      {
        src: 'assets/images/favicon-32x32.png',
        sizes: '32x32',
        type: 'images/png'
      },
      {
        src: 'assets/images/favicon-16x16.png',
        sizes: '16x16',
        type: 'images/png'
      }
    ]
  },
  workbox: {
    navigateFallbackDenylist: [/^\/backoffice/]
  }
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePWA],

  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },

  build: {
    target: 'es2020'
  }
})
