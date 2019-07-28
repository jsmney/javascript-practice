// YOUR CODE BELOW
function getLongestName(obj) {
    let longestName = "";
    for (let key in obj) {
        if (key.length > longestName.length) {
            longestName = key;
        }
        let element = obj[key];
        let anotherName = getLongestName(element);
        if (anotherName.length > longestName.length) {
            longestName = anotherName;
        }
    }
    return longestName;
}