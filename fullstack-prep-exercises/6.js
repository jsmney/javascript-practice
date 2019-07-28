/*
 * Complete the function below.
 */
function countDuplicates(arr) {
    let duplicateCount = 0;
    //create array for elements that we've seen in arr
    let seenArr = [];
    //create array that includes counts for each element we see in arr
    let letterRepeats = [];
    //iterate through arr
    for (let arrIdx = 0; arrIdx < arr.length; arrIdx++) {
    //check if arr is in seenArr
        if (seenArr.includes(arr[arrIdx])) {
            //if yes, increase count in letterRepeats in corresponding index
            let index = seenArr.indexOf(arr[arrIdx]);
            letterRepeats[index]++ ;
        }
        else {
            //if not, add element to seenArr, and add count 1 to letterRepeats
            seenArr.push(arr[arrIdx]);
            letterRepeats.push(1);
        }
    }
    //iterate through letterRepeats for elements that are > 1
    for (let letterCount = 0; letterCount < letterRepeats.length; letterCount++) {
        if (letterRepeats[letterCount] > 1) {
            duplicateCount++;
        }
    }
    //return that number
    return duplicateCount;
}

