/*
 * Complete the function below.
 */
function getHeight(cycles) {
    //declare initial height
    let height = 1;
    //iterate through number of cycles
    for (let currCycle = 1; currCycle <= cycles; currCycle++) {
    //cycles are even/odd. check modulus to determine which type of growth occurs
        if (currCycle % 2 === 1) {
        //odd cycles: double height
            height *= 2;
        }
        if (currCycle % 2 === 0) {
        //even cycles: add 1
            height += 1;
        }
    }
    //return final height
    return height;
}

