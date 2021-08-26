function findRotationCount(arr, left = 0, right = arr.length - 1) {
    if (left > right) return 0; //check edges cases
    if (left === right) return right;

    const middleIdx = Math.floor((left + right) / 2);

    //test if the right of mid or mid elements are minimums
    if (right > middleIdx && arr[middleIdx + 1] < arr[middleIdx]) return middleIdx + 1;
    if (left < middleIdx && arr[middleIdx - 1] > arr[middleIdx]) return middleIdx;

    //recursively call again on either the first or second half of the arr
    if (arr[left] < arr[middleIdx]) return findRotationCount(arr, middleIdx + 1, right);
    return findRotationCount(arr, left, middleIdx - 1);
}

module.exports = findRotationCount