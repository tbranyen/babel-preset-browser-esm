import { declare } from '@babel/helper-plugin-utils';

export default declare((api, options) => {
  api.assertVersion(7);

  return {
    plugins: [
      'babel-plugin-transform-inline-environment-variables',
      'babel-plugin-minify-dead-code-elimination',
      'babel-plugin-transform-commonjs',
      'babel-plugin-resolve-imports-for-browser',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  };
});
