/* eslint-env node */

function calcAvgHeight(data) {
  // Calculate average height from received data. If no data, return null.

  var count = 0; 
  var sum = 0;
  for (var key in data) {
   if (data.hasOwnProperty(key)) {
     if (data[key].hasOwnProperty("height")) {
       sum += data[key].height;
       count += 1;
     }
   }
  }

  if(count==0)
    return null;
  else
    return Math.floor(sum/count); 
}

module.exports = calcAvgHeight;
