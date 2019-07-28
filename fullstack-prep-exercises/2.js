/*
 * Complete the function below.
 */
function areYouPlayingBanjo(name) {
    let initial = name.toLowerCase()[0];
    let result = "";
    if (initial === 's') {
        result = name + " plays banjo!";
    }
    else {
        result = name + " does not play banjo!";
    }
    return result;
}

