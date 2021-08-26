function sortedFrequency(arr, val) {
    const len = arr.length;
    
    const finalLeft =  (arr[0] === val) ? 0 : findLeft(arr, val, 0, len - 1);
    if (finalLeft === -1) return -1;
    const finalRight = (arr[len] === val) ? arr[len] : findRight(arr, val, 0, len - 1);
    if (finalRight === -1) return -1;
    
    return finalRight - finalLeft + 1
}

function findLeft(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    
        if ((middleIdx === 0 || arr[middleIdx - 1] < val) && arr[middleIdx] === val) {
            return middleIdx;
        } else if (arr[middleIdx] < val) {
            return findLeft(arr, val, middleIdx + 1, rightIdx)
        } else {
            return findLeft(arr, val, leftIdx, middleIdx - 1)
        }
    }
    return -1;
}

function findRight(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    
        if ((middleIdx === arr.length - 1 || arr[middleIdx + 1] > val) && arr[middleIdx] === val) {
            return middleIdx;
        } else if (arr[middleIdx] > val) {
            return findRight(arr, val, leftIdx, middleIdx - 1)
        } else {
            return findRight(arr, val, middleIdx + 1, rightIdx)
        }
    }
    return -1;
}

module.exports = sortedFrequency