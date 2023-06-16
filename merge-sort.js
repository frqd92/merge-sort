//-------------------ASSIGNMENT 1-------------------//

//non-recursive fibonacci
function fibs(n){
    let tempArr = [0,1];
    for(let i=2; i<n;i++) tempArr.push(tempArr[i-1] + tempArr[i-2])
    return tempArr;
}
console.log(fibs(8)); // [0,1,1,2,3,5,13]


//recursive fibonacci
function fibsRec(n){
    if(n===2) return [0,1]
    if(n===1) return [0]
    const tempArr = fibsRec(n-1);
    tempArr.push(tempArr[tempArr.length-1] + tempArr[tempArr.length-2])
    return tempArr
}
console.log(fibsRec(8)); // [0,1,1,2,3,5,13]




//-------------------ASSIGNMENT 2-------------------//
/*
Merge sort is fundamentally this pseudocode:
    on input of n elements
    if n < 2 
        return
    else
        sort left half of elements
        sort right half of elements
        return the two merged halves as one array
*/

function mergeSort(arr){
    if(arr.length<2) return arr;

    const mid = Math.ceil(arr.length/2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid);

    const sortLeft = mergeSort(leftArr);
    const sortRight = mergeSort(rightArr);
    return mergeHelper(sortLeft, sortRight)
}

function mergeHelper(left, right){
    const tempArr = [];
    let lIndex = 0;
    let rIndex = 0;
    while(lIndex < left.length && rIndex < right.length){
        if(left[lIndex] < right[rIndex]){
            tempArr.push(left[lIndex]);
            lIndex++;
        }
        else{
            tempArr.push(right[rIndex]);
            rIndex++
        }
    }
    return [...tempArr, ...left.slice(lIndex), ...right.slice(rIndex) ]
}

const ex1 = [2,5,8,6,1,9,3,4,10,7] // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
const ex2 = [5,3,6,1,2] // [1,2,3,5,6]

console.log(mergeSort(ex1));

















