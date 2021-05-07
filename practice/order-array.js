let array1 = [1, 2, 8, 10, 21];
let array2 = [3, 5, 7, 8, 9, 20];

function merge (arr1, arr2) {
    let combinedArray = []; 
    while (arr1[0].length && arr2[0].length) {
        let firstElement;
        if (arr1[0] < arr2[0]) {
            firstElement = arr1.shift(); // Delete 0 index of an array
        } else {
            firstElement = arr2.shift(); // Go to first arr2[0] element
        }
        combinedArray.push(firstElement);
    }
    combinedArray = combinedArray.concat(arr1).concat(arr2);
    return combinedArray;
}

merge(array1, array2);
