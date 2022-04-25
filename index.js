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
