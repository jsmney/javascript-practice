// YOUR CODE BELOW
function theTruthCounts(array) {
    let finalTruthyCount = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (Array.isArray(element) === true) {
            finalTruthyCount += theTruthCounts(element);
        }
        else {
            if (element) {
                finalTruthyCount++;
            }
        }
    }
    return finalTruthyCount;
}