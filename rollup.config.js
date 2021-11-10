import clear from "rollup-plugin-clear";
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';

export default {

  input: 'src/main.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    // 打包之前先清空
    clear({
      targets: ['dist'],
      watch: true,
    }),
    builtins(),
    // 如何查找外部模块
    // resolve({
    //   preferBuiltins: true,
    // }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    // ommonJS 模块转换为 ES2015 供 Rollup 处理。
    commonjs(),
    // json文件转换为ES6模块
    json(),
    typescript(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ],
  external: [
    "ora",
    // "download-git-repo"
  ],
  globals: {
    // 将外部模块暴露给全局
    "ora": 'ora',
    // "downloadGit": 'download-git-repo',
    // "download-git-repo": "downloadGit"
  }
};