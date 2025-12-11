// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { config } from 'dotenv'
import { defineConfig } from '#q-app/wrappers'

// โหลด .env
config()

export default defineConfig((/* ctx */) => {
  return {
    // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: [
      'axios'
    ],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#css
    css: [
      'app.sass'
    ],

    // เพิ่มส่วนนี้เข้าไป 👇
    env: {
      API_URL: process.env.API_URL || 'http://localhost:3000',
    },
    // 👆 เพิ่มส่วนนี้เข้าไป

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      'roboto-font',
      'material-icons',
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#build
    build: {
      target: {
        browser: [ 'es2022', 'firefox115', 'chrome115', 'safari14' ],
        node: 'node20'
      },

      vueRouterMode: 'hash',
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#devserver
    devServer: {
      port: 9500,
      open: true
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#framework
    framework: {
      config: {},
      plugins: []
    },

    animations: [],

    // ... ส่วนอื่น ๆ ตามเดิม
  }
})