/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

var test = "I put my thing down flip it and reverse it.";

function firstReverse (str){
  if (typeof str !== 'string'){
    return null;
  } else {
    var arr = str.split('');
    var newArr = arr.reverse();
    var reversedString = newArr.join('');
    return reversedString;
  }
}

console.log(firstReverse(test));

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */


function alphaOrder (str){
  if (typeof str !== 'string'){
    return null;
  } else {
    var arr = str.split('');
    var newArr = arr.sort();
    var alphaStr = newArr.join ('');
    return alphaStr;
  }
}

console.log(alphaOrder('cake'));

 /** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

function vowelCount (str){
  if (typeof str !== 'string'){
    return null;
  } else {
    var arr = str.split('');
    var count = 0;
    for (i = 0; i < arr.length; i++){
      if (arr[i] === 'a' || arr[i] === 'A' || arr[i] === 'e' || arr[i] === 'E' || arr[i] === 'i' || arr[i] === 'I' || arr[i] === 'o' || arr[i] === 'O' || arr[i] === 'u' || arr[i] === 'U'){
        count++;
      }
    }
  return count;
  }
}

console.log(vowelCount('Amazonian'));

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

 function timeConvert (str){
  if (typeof str !== 'number'){
    return null;
  } else {
    var hours = Math.floor(str/60);
    var minutes = str % 60;
    return hours + ':' + minutes;
  }
 }

 console.log(timeConvert(125));

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

function repeatString (str, num){
  if (typeof str !== 'string'){
    return null;
  } else if(typeof num !== 'number') {
    return null;
  } else {
    var finalStr = '';
    if (num > 0){
      for (i = 0; i < num; i++){  
      finalStr += str;
      }
    } else {
      finalStr = '';
    }
    return finalStr;
  }
}

console.log(repeatString('money', 5));

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
}
