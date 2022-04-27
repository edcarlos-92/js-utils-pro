/**
 * Validate if a provided string is a valid Email Address
 * @param string String on which to perform the validation.
 */
module.exports = function validateEmail(string) {
  const Emailregex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return Emailregex.test(string) === true ? true : false;
};
//console.log(validateEmail("edcartech@gmail.com") === true ? "Wooow" : "Awwww"  );

/**
 * Convert a provided string with space into a resulting string without space.
 * @param string String on which to perform the convertion.
 */
module.exports = function closeStringSpace(string) {
  //export function closeStringSpace(string) {
  if (typeof string !== 'string')
    throw new TypeError('closeStringSpace wants a string!');
  return string.replace(/\s/g, '');
};

// module.exports = function closeStringSpace(string) {
//   if (typeof string !== 'string')
//     throw new TypeError('closeStringSpace wants a string!');
//   return string.replace(/\s/g, '');
// };
