# @edcartech/js-utils-pro

[![npm (scoped)](https://img.shields.io/npm/v/@edcartech/js-utils-pro.svg)](https://www.npmjs.com/package/@edcartech/js-utils-pro)
[![npm bundle size (minified)](https://img.shields.io/badge/package%20size-1.4%20kB-blue)](https://www.npmjs.com/package/@edcartech/js-utils-pro)

JavaScript Utilities For Programmers

## Install

```
$ npm install @edcartech/js-utils-pro
```

## Usage

```js
//Cloding the Space of a string
const closeStringSpace = require('@edcartech/js-utils-pro');

closeStringSpace('So much space!');
//=> "Somuchspace!"

closeStringSpace(1337);
//=> Uncaught TypeError: closeStringSpace wants a string!
//    at closeStringSpace (<anonymous>:2:41)
//    at <anonymous>:1:1
```
