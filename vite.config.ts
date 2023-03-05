import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteSvgIcons from 'vite-plugin-svg-icons';
import { resolve } from 'path';
const timestamp = new Date().getTime();
function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [resolve(process.cwd(), 'src/assets/icons/svg')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  server: {
    open: true,
    https: false,
    host: true,
    port: 8080,
  },
  resolve: {
    alias: {
      '/@': pathResolve('src'),
    },
  },

  optimizeDeps: {
    // include: ['vuedraggable', 'quill']
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  build: {
    terserOptions: {
      compress: {
        drop_console: true, //打包时删除console
        drop_debugger: true, //打包时删除 debugger
        pure_funcs: ['console.log'],
      },
      output: {
        // 去掉注释内容
        comments: false,
      },
    },
    minify: 'terser',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      output: {
        // 最小化拆分包
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: `assets/[name].[hash].${timestamp}.js`, // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: `assets/[name].[hash].${timestamp}.js`, // 拆分js到模块文件夹
        assetFileNames: `assets/[name].[hash].${timestamp}.[ext]`, // 用于输出静态资源的命名
      },
    },
  },
});
