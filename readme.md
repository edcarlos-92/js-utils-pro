# @edcartech/js-utils-pro

[![npm (scoped)](https://img.shields.io/npm/v/@edcartech/js-utils-pro.svg)](https://www.npmjs.com/package/@edcartech/js-utils-pro)
[![npm bundle size (minified)](https://img.shields.io/badge/package%20size-9.0%20kB-blue)](https://www.npmjs.com/package/@edcartech/js-utils-pro)

JavaScript Utilities For Programmers

## Install

```
$ npm install @edcartech/js-utils-pro
```

## Usage

# 1. Closing All spaces in a string

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
# 3. Select One record from an Array object in JSON Format of Object[{...}]

```js
//Consider a JSON array object of an unordered collection of records. 
//Note --->The conditions here are that only of the object element is labeled "id" 
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
        school:"ULM"
    },
]

//Our required function to pull the unique one record
const selectOneByIdFromArrayObject = require('@edcartech/js-utils-pro');

//Querying the object element
selectOneByIdFromArrayObject(data,4,"email");
//=> ottis@gmail.com
//=This return ottis@gmail.com because it bears the id=4 in the object
// data is the name of the JSON object created above
// 4 Represents the id number of the object we need
// email is the field we need the value/record from
```


# 4. Check if a Field Value exist in an Array JSON object in Format Object[{...}]

```js
//Consider a JSON array objectData of an unordered collection of records. 
//Note --->The object field/attribute value must be a unique field
//object type object[{}] (An Array Object)
let objectData = [
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
        school:"ULM"
    },
]

//Our required function to check input value
const checkIfExist = require('@edcartech/js-utils-pro');

//Checking the object element
checkIfExist(objectData,"email","example@email.com");
//=> False
//=>This return False because there is no match for example@email.com on email field/property objectData 
// objectData is the name of the JSON object created above
// email represent the field/property of the the object
// example@email.com is the value we are checking for
checkIfExist(objectData,"email","edcartech@gmail.com");
//=> True
//Returns True because the edcartech@gmail.com exist on field email in objectData
```