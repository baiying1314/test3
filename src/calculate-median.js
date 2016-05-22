function calculate_median(arr) {
    var objectArray = buildObjectArray(arr);
    return buildMedian(objectArray, arr);
}

function buildObjectArray(arr) {
    var objectArray;
    var count = 0;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        var array = arr[i];
        if (array % 2 === 0) {
            sum += i;
            count++;
        }
    }
    objectArray = {sum: sum, count: count};

    return objectArray;
}

function buildMedian(objectArray, arr) {
    var position = objectArray.sum / objectArray.count;
    for (var i = 0; i < position; i++);

    return arr[i];
}

module.exports = calculate_median;
