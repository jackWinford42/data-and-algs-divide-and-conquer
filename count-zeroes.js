function countZeroes(arr) {
    if (arr[0] === 0) return arr.length
    if (arr[arr.length] === 1) return 0
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    
    while (leftIdx <= rightIdx) {

        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let leftMiddleVal = arr[middleIdx];
        let rightMiddleVal = arr[middleIdx + 1];

        if (leftMiddleVal === 1 && rightMiddleVal === 1) {
            leftIdx = middleIdx + 1;
        } else if (leftMiddleVal === 0 && rightMiddleVal === 0) {
            rightIdx = middleIdx - 1;
        } else {
            return arr.length - (middleIdx + 1);
        }
    }
}

module.exports = countZeroes