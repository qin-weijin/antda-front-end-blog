import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import UnoCSS from 'unocss/vite'
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js\
        }),
      ],
    }),
  ],
  resolve: {
    alias: { "@": resolve(__dirname, 'src') },
    extensions: ['.js', '.json', '.ts', '.vue']
  }
})
