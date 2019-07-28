/*
 * Complete the function below.
 */
function indexOf(str, queryStr) {
    //loop through each character of str
    for (let i = 0; i < str.length; i++) {
    //check if character matches first character of queryStr
        if (str[i] === queryStr[0]) {
        //if so, loop through queryStr to make sure the entire query matches
            for (let j = 0; j < queryStr.length; j++) {
                //if it matches, return index of first character within str
                //otherwise, continue to search str
                if (str[i + j] !== queryStr[j]) {
                    break;
                }
                else {
                    return i;
                }
            }
        }
    }
    //if all else fails, return -1
    return -1;
}

