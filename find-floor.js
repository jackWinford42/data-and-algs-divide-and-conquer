function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        let rightMiddleVal = arr[middleIdx + 1];

        if (middleVal < val && (rightMiddleVal > val || rightMiddleVal === undefined)) {
            return arr[middleIdx];
        } else if (middleVal < val) {
            // middleVal is too small, look at the right half
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            // middleVal is too large, look at the left half
            rightIdx = middleIdx - 1;
        } else {
            return arr[middleIdx];
        }
    }
    
    // left and right pointers crossed, val isn't in arr
    return -1;
}

module.exports = findFloor