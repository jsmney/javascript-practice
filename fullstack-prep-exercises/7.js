/*
 * Complete the function below.
 */
function palindrome(str) {
    //make sure case does not affect result
    let strLowerCase = str.toLowerCase();
    //create backward version of string
    let strBackward = "";
    for (i = strLowerCase.length-1; i >= 0; i--) {
        strBackward += strLowerCase[i];
    }
    //alternately:
    //let strBackward = strLowerCase.split("").reverse().join("");
    //test if the string is the same forward/backward
    if (strLowerCase === strBackward) {
        return true;
    }
    else {
        return false;
    }
}

