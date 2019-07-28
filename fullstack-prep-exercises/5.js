/*
 * Complete the function below.
 */
function cookiesToMake(n) {
    let cookies = 0;
    if (n <= 10) {
        cookies = n * 3;
    }
    else {
        cookies = n * 2;
    }
    // Don't forget to return your output!
    return cookies;
}

