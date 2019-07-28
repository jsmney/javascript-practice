/*
 * Complete the function below.
 */
function firstRepeatingLetter(str) {
    // enter code here
      //iterate through the string, letter by letter
      for (let letterIdx = 0; letterIdx < str.length-1; letterIdx++) {
          //for each letter, check it against the rest of the string to see if it repeats
          for (let restOfStr = letterIdx+1; restOfStr < str.length; restOfStr++) {
              if (str[letterIdx] === str[restOfStr]) {
                  //if so, return the letter
                  return str[letterIdx];
              }
          }
      }
      return "no repeated characters";
  }
  
  