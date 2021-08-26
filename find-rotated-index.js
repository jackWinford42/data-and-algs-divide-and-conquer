function findRotatedIndex(array, val) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;

    //make a new array with all numbers in order
    let tempMid = Math.floor((leftIdx + rightIdx) / 2) +1;
    let arr = [...array.slice(tempMid), ...array.slice(0, tempMid)]

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
    
        if (middleVal < val) {
            // middleVal is too small, look at the right half
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            // middleVal is too large, look at the left half
            rightIdx = middleIdx - 1;
        } else {
            if (middleIdx < tempMid) return middleIdx + tempMid;
            else return middleIdx - tempMid;
        }
    }
    
    // left and right pointers crossed, val isn't in arr
    return -1;
}

module.exports = findRotatedIndex