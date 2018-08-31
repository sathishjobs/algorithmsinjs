var stepToFind = 0;
function binarySearch(numArray,key){
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];

    if(middleElem === key) return true;
    if(numArray.indexOf(key) != -1) ++stepToFind
    else if (middleElem < key && numArray.length > 1){
        // stepToFind++;
        return binarySearch(numArray.splice(middleIdx,numArray.length),key);
    }
    else if(middleElem > key && numArray.length > 1){
        // stepToFind++;
        return binarySearch(numArray.splice(0,middleIdx),key);
    }
    else return false
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 71));
console.log('Step To Find');
console.log(stepToFind);