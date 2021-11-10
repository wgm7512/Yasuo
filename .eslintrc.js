module.exports = {
  parser: '@typescript-eslint/parser', // 使用 ts 解析器
  extends: [
    'eslint:recommended', // eslint 推荐规则
    'plugin:@typescript-eslint/recommended', // ts 推荐规则
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "semi": 2,
    // 保存代码时缩进2个空格
    "indent": ['error', 2],
  },
};
