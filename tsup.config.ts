import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  //   splitting: false, // code-split esm默认开启，其他需要手动开启
  //   sourcemap: true,
  clean: true,
  //   watch: true, // 监听模式
  format: ['esm', 'cjs'], // 输出格式
  //   minify: true, // 压缩
})
