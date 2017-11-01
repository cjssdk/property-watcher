Watches for a property modifications
====================================

[![build status](https://img.shields.io/travis/cjssdk/property-watcher.svg?style=flat-square)](https://travis-ci.org/cjssdk/property-watcher)
[![npm version](https://img.shields.io/npm/v/cjs-property-watcher.svg?style=flat-square)](https://www.npmjs.com/package/cjs-property-watcher)
[![dependencies status](https://img.shields.io/david/cjssdk/property-watcher.svg?style=flat-square)](https://david-dm.org/cjssdk/property-watcher)
[![devDependencies status](https://img.shields.io/david/dev/cjssdk/property-watcher.svg?style=flat-square)](https://david-dm.org/cjssdk/property-watcher?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/cjssdk)
[![RunKit](https://img.shields.io/badge/RunKit-try-yellow.svg?style=flat-square)](https://runkit.com/npm/cjs-property-watcher)


## Installation ##

```bash
npm install cjs-property-watcher
```


## Usage ##

Add to the scope:

```js
var watch = require('cjs-property-watcher');
```

Add hook for an object property:

```js
var obj = {
    fld: 123
};

watch(obj, 'fld', function ( name, oldValue, newValue ) {
    console.log('obj.' + name + ' changed from ' + oldValue + ' to ' + newValue);
});
```

Trigger the hook with property modification:

```js
obj.fld = 256;
```


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/cjssdk/property-watcher/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`cjs-property-watcher` is released under the [MIT License](license.md).
