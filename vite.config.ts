import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  define: {
    'process.env': {},
  },
  plugins: [
    react(),
    pluginRewriteAll(),
    // eslintPlugin({
    //   cache: false,
    //   include: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
    //   exclude: [],
    // }),
  ],
})
