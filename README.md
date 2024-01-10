# eslint-config
Configuration files for eslint.

### How to install
`npm i -D @apathoid/eslint-config`

### How to use
The package provides config files for two module systems: `cjs` and `esm`.

For `cjs` fill `eslint.config.js` with this:

```js
const apathyConfig = require('@apathoid/eslint-config').default;

module.exports = [
    ...apathyConfig,
    ...
];
```

For `esm` it is necessary to add `type: module` to project's `package.json` file. Then add this to `eslint.config.js`:

```js
import apathyConfig from '@apathoid/eslint-config';

export default [
    ...apathyConfig,
    ...
];
```
