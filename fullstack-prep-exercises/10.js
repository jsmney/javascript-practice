function rightTriangle(number) {
    let finalTri = "";
    //number is the longest row of asterisks ('*')
    //iterate a loop using the number as the upper limit
    for (let row = number; row > 0; row--) {
    //output a row of asterisks decrementing by 1 each time
        //create substring of stars with a small loop
        let starRow = "";
        for (let i = 0; i < row; i++) {
            starRow += "*";
        }
        //add a line break after each
        //concatenate to final triangle string
        finalTri += starRow + "\n";
    
    }
    return finalTri;
}