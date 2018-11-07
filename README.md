# Babel Preset: Browser ESM

A Babel 7 compatible preset to fully support loading modules as ESM in the
browser natively. This preset will:

- Automatically inline environment variables
- Run dead code elimination
- Transform CommonJS to ESM
- Convert global imports to relative paths using `require.resolve`
- Add missing `.js` extension

### Usage

```sh
npm install --save-dev babel-preset-browser-esm
```

Update your babel configuration, ensure you use `babel.config.js` over
`.babelrc` to ensure `node_modules` get properly updated:

```javascript
module.exports = {
  presets: ['browser-esm']
};
```

### Run server

This module pairs very nicely with [bserve](https://github.com/tbranyen/bserve)
to run a static server and automatically transpile the JavaScript files.
