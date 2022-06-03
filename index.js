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

/**
 * Select a single record by id from an Array of object records. This is Useful when you need only one
 * record or value from a random object pulled from a JSON result.
 * It can be used when populating a table with a foreign record related to the table filds.
 * The conditions here are that onle of the object element is labeled "id" and the object should be
 * in form of ie object[{}] (An Array Object)
 * @param dataObject The Array Objects on which the record will be selected.
 * @param id The Exact unique id from the Object where the record is.
 * @param reference The field or Element containing the record.
 */
module.exports = function selectOneByIdFromArrayObject(
  dataObject,
  id,
  reference
) {
  if (dataObject == null || dataObject == 0 || dataObject == undefined) {
    return [];
  }
  let Type = '';
  for (var i = 0; i < dataObject.length; i++) {
    if (dataObject[i].id == id) {
      Type = dataObject[i][reference];
      break;
    }
  }
  return Type;
};

/**
 * Check for a single record or value in an Array of object keys/properties. This is Useful when you need only to
 * check from already exixting random object pulled from a JSON result.
 * @param dataObject The Array Objects on which the record will be checked.
 * @param field The Field or key of the Array Object to search.
 * @param value The Value to Match the field key with.
 * Imagine each time to check from an API if a peice of record already exit.
 * a prefetch or preload of JSON data ie.with Redux,Context API or GraphQl etc... can keep matching each user input
 * with the latest pulled JSON Object.
 * This Operation returns only a Boolean (True/False) value.
 * Returns True if the value exist and False if not found.
 * This is Different from a Regular Array.find() JavaScript inbuilt function because it specify the exact
 * field or key of the object the record is to be matched. which by the way should be a unique field.
 */

module.exports = function checkIfExist(dataObject, field, value) {
  let result = false;
  for (let i = 0; i < dataObject.length; i++) {
    if (dataObject[i][`${field}`] === value) {
      //console.log(`Found Match For`,dataObject[i][`${field}`]);
      result = true;
    }
  }
  return result;
};

// module.exports = function closeStringSpace(string) {
//   if (typeof string !== 'string')
//     throw new TypeError('closeStringSpace wants a string!');
//   return string.replace(/\s/g, '');
// };
