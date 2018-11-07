import { declare } from '@babel/helper-plugin-utils';

const { resolve } = require;

export default declare((api, options) => {
  api.assertVersion(7);

  return {
    plugins: [
      resolve('babel-plugin-transform-inline-environment-variables'),
      resolve('babel-plugin-minify-dead-code-elimination'),
      resolve('babel-plugin-transform-commonjs'),
      resolve('babel-plugin-resolve-imports-for-browser'),
      [resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
    ],
  };
});
