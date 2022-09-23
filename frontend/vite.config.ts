import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import { htmlTransformByDevTools } from 'vite-plugin-dev-tool';

export default defineConfig({
  plugins: [
    react(),

    createStyleImportPlugin({
      libs: [
        {
          esModule: true,
          libraryName: 'antd',
          resolveStyle: (name: string) => `antd/es/${name}/style/index`,
        },
      ],
    }),

    // 使用开发者工具
    htmlTransformByDevTools(),
  ],

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#213c9e',
        },
      },
    },
  },

  // 别名
  resolve: {
    alias: { '@': '/src' },
  },

  // 代理
  server: {
    host: '0.0.0.0',
    proxy: {
      '/rpc': {
        target: 'https://smart-cloud-web.dev.inrobot.cloud',
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: 'dist',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
  },
});
