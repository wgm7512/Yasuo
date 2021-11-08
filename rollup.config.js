import clear from "rollup-plugin-clear";
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    // 打包之前先清空
    clear(),
    // 如何查找外部模块
    resolve(),
    // ommonJS 模块转换为 ES2015 供 Rollup 处理。
    commonjs(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
};