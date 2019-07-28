// YOUR CODE BELOW
function arraySum(array) {
    let finalSum = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (Array.isArray(element) === true) {
            finalSum += arraySum(array[i]);
        }
        else {
            finalSum += element;
        }
    }
    return finalSum;
}