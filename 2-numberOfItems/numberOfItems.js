/* eslint-env node */

function numberOfItems(arr, item) {
  // counts the number of occurrences of a given item.
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count += numberOfItems(arr[i], item);
    } else {
      if (arr[i] == item) {
        count++;
      }
    }
  }
  return count;   
  
}
module.exports = numberOfItems;
