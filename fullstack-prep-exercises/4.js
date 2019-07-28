/*
 * Complete the function below.
 */
function totalFriends(arr) {
    let friendSum = 0;
    for (let i = 0; i < arr.length; i++) {
        friendSum += arr[i];
    }
    return friendSum;

}

