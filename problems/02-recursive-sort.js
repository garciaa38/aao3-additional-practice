/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

function sort(nums) {
    // Your code here
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > newArr[newArr.length - 1]) {
            newArr.push(nums[i]);
        } else {
            newArr.unshift(nums[i]);
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i+1] < newArr[i]) {
            return sort(newArr);
        }
    }
    return newArr;
}


console.log(sort([])) // prints []
console.log(sort([9])) // prints [9]
console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
