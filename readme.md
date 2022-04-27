# @edcartech/js-utils-pro

[![npm (scoped)](https://img.shields.io/npm/v/@edcartech/js-utils-pro.svg)](https://www.npmjs.com/package/@edcartech/js-utils-pro)
[![npm bundle size (minified)](https://img.shields.io/badge/package%20size-1.4%20kB-blue)](https://www.npmjs.com/package/@edcartech/js-utils-pro)

JavaScript Utilities For Programmers

## Install

```
$ npm install @edcartech/js-utils-pro
```

## Usage

# ===> 1. Closing All spaces in string <===

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

# ===> 2. Check if a String is a valid Email ( Email Validation) <===

```js
//Import validation Function from js-utils-pro
const validateEmail = require('@edcartech/js-utils-pro');

//Example 1
validateEmail('example1@gmail.com') === true
  ? "Wooow it's an Email"
  : "Awwww it's an Invalid Email";
//=> "Wooow it's an Email"

//Example 2
const Validate = validateEmail('example2@gmailcom');
if (Validate === true) {
  console.log("Wooow it's an Email");
} else {
  console.log("Awwww it's an Invalid Email");
}
//=> "Awwww it's an Invalid Email"
```
