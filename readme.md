# @edcartech/js-utils-pro

[![npm (scoped)](https://img.shields.io/npm/v/@edcartech/js-utils-pro.svg)](https://www.npmjs.com/package/@edcartech/js-utils-pro)
[![npm bundle size (minified)](https://img.shields.io/badge/package%20size-1.4%20kB-blue)](https://www.npmjs.com/package/@edcartech/js-utils-pro)

JavaScript Utilities For Programmers

## Install

```
$ npm install @edcartech/js-utils-pro
```

## Usage

# Closing All spaces in a string

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

# 2. Check if a String is a valid Email ( Email Validation)

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

# Display any date Format in a Human Readable form

```js
//Closing the Space of a string
const closeStringSpace = require('@edcartech/js-utils-pro');

closeStringSpace('So much space!');
//=> "Somuchspace!"

closeStringSpace(1337);
//=> Uncaught TypeError: closeStringSpace wants a string!
//    at closeStringSpace (<anonymous>:2:41)
//    at <anonymous>:1:1
```


# Select One record from an Array onject in JSON Format of Object[{...}]

```js
//Consider a JSON array object of an unordered collection of records. 
//Note --->The conditions here are that onle of the object element is labeled "id" 
// and the object should be in form of ie object[{}] (An Array Object)
let data = [
    {
        id:1,
        name:"Edorh Carlos",
        email:"edcartech@gmail.com",
        school:"UEW"
    },
    {
        id:2,
        name:"Doris Apasu",
        email:"doris@gmail.com",
        school:"CCT"
    },
    {
        id:3,
        name:"Hoegah",
        email:"jhonson@gmail.com",
        school:"A.Polly"
    },
    {
        id:4,
        name:"Edorh Ottis",
        email:"ottis@gmail.com",
        school:"UL"
    },
]

//Our required function to pull the unique one record
const selectOneByIdOnArrayObject = require('@edcartech/js-utils-pro');

//Querying the object element
selectOneByIdOnArrayObject(data,4,"email");
//=> ottis@gmail.com
//=This return ottis@gmail.com because it bears the id=4 in the object
// data is the name of the JSON object created above
// 4 Represents the id number of the object we need
// email is the field we need the value/record from
```