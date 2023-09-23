const assert = require("assert");

function binarySearch(array: number[], n: number, startIndex: number = 0) {
    const splitIndex = Math.floor(array.length / 2);
    const item = array[splitIndex];
    if (item === undefined) {
        return -1;
    } else if (item === n) {
        return startIndex === 0 ? splitIndex : startIndex + splitIndex;
    } else if (item > n) {
        // go to the left
        return binarySearch(array.slice(0, splitIndex), n, startIndex);
    }
    // go to the right
    startIndex += splitIndex + 1;
    return binarySearch(array.slice(splitIndex + 1), n, startIndex);
}

const array = [...Array(16).keys()];

for (let i of array) {
    assert.equal(binarySearch(array, i), i);
}
assert.equal(binarySearch(array, -2), -1);
assert.equal(binarySearch(array, 16), -1);
