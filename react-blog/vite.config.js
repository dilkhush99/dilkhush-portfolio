// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/dilkhush-portfolio/',
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // FIX: If building on GitHub Actions, use subfolder. If on Vercel or local, use root!
  base: process.env.VERCEL || !process.env.GITHUB_ACTIONS ? '/' : '/dilkhush-portfolio/',
})