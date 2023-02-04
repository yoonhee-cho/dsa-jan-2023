/*
Directions: Please identify and solve the following patterns 
that appropriately matches a multiple pointers or 
frequency counter pattern using time complexity of O(n).  
*/

/*
Problem #1:  
Implement a function called countUniqueValues, which accepts a sorted array,  
and counts the unique values in the array.  
There can be negative numbers in the array, but it will always be sorted. 
*/ 
 
const countUniqueValues = (arr) => { 
    const freq = {};

    for (let val of arr) {
        freq[val] = (freq[val] || 0) + 1;
    }

    return Object.keys(freq).length;
} 

// Test Cases:  
// console.log(countUniqueValues([1,1,1,1,1,2])) // 2 
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7 
// console.log(countUniqueValues([])) // 0 
// console.log(countUniqueValues([-2,-1,-1,0,1])) // 4 
 
 
/* 
Problem #2:  
Write a function called, areThereDuplicates which accepts a array of letters,  
and checks whether there are any duplicates among the argument passed in.   
You can solve this using the frequency counter pattern OR the multiple pointers pattern. 
*/ 
 
// using the frequency counter pattern
const areThereDuplicates1 = (arrOfLetters) => { 
    const lettersFreq = {};

    for (let value of arrOfLetters) {
        lettersFreq[value] = (lettersFreq[value] || 0) + 1;
    }

    for (let letter in lettersFreq) {
        if (lettersFreq[letter] > 1) return true;
    }

    return false;
}

// using the multiple pointers pattern (assumed that the arr is sorted in ascending order)
const areThereDuplicates2 = (arrOfLetters) => {
    let left = 0;
    let right = 1;

    while (right < arrOfLetters.length) {
        if (arrOfLetters[left] === arrOfLetters[right]) {
            return true;
        }
        left++;
        right++;
    }
    return false;
}
 
// Test Cases:   
console.log(areThereDuplicates2(['a', 'a', 'c', 'd'])) //true 
console.log(areThereDuplicates1(['a', 'b', 'c'])) // false 

 
/*  
Problem 3:
Write a function called avgPair.  
Given a sorted array of integers and a target average, determine if there is a pair of values in the array  
where the average of the pair equals the target average.  
There may be more than one pair that matches the average target. 
*/ 
 
const avgPair = (arr, avgTarget) => { 
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let avgCurr = (arr[left] + arr[right]) / 2;

        if (avgCurr === avgTarget) {
            return true;
        } else if (avgCurr < avgTarget) {
            left++;
        } else { // avgCurr > avgTarget
            right--;
        }
    }
    return false;
} 
 
// Test Cases:  
// console.log(avgPair([1,2,3],2.5)) //true 
// console.log(avgPair([1,3,3,5,6,7,10,12,19],8)) //true 
// console.log(avgPair([-1,0,3,4,5,6], 4.1)) //false 
// console.log(avgPair([],4)) //false 
