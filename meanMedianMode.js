function meanMedianMode(array) {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}

function getMean(array) {
    var sum = 0;
    array.forEach(num => {
        sum += num;
    });
    var mean = sum / array.length;
    return mean;
}

function getMedian(array) {
    array.sort(function (a, b) { return a - b });
    var median;
    if (array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)];
    } else {
        var mid1 = array[(array.length / 2) - 1];
        var mid2 = array[array.length / 2];
        median = (mid1 + mid2) / 2;
    }
    return median;
}

function getMode(array){
    var modeObj = {};
    //create modeObj
    array.forEach(num =>{
        if(!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    })
    //create array of mode/s
    var maxFrequency = 0;
    var modes = [];
    for(var num in modeObj){
        if(modeObj[num] > maxFrequency){
            modes = [num];
            maxFrequency = modeObj[num]
        }
        else if(modeObj[num] === maxFrequency) modes.push(num)
    }
    console.log('length');
    console.log(modeObj);
    console.log('object keys');
    console.log(Object.keys(modeObj).length)
    //if every value appears same amount of times 
    if(modes.length === Object.keys(modeObj).length) modes = [];
    return modes;
}




// function 
console.log(meanMedianMode([1,1,7,1,7,7]))



