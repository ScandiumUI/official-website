import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'ScandiumOS',
        short_name: 'ScandiumOS',
        description: 'A custom Android OS based on Android Open Source Project (AOSP)',
        theme_color: '#131315',
        icons: [
          {
            src: 'logo-scandiumui-icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'logo-scandiumui-icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          },
          {
            src: 'logo-scandiumui-icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        toplevel: true,
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[hash].js',
        entryFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
      },
    },
    sourcemap: false,
    cssCodeSplit: true,
  },
})
