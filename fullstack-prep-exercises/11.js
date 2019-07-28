/*
 * Complete the function below.
 */
function rotate(arr, steps) {
    //iterate through number of steps
    for (let step = 0; step < steps; step++) {
    //pop the final item, shift the item to the front of the array
        arr.unshift(arr.pop());
    }
    //return array
    return arr;
}

