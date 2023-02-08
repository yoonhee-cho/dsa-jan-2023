/*
Directions: Please identify and solve the following patterns that appropriately matches a divide and conquer or 
sliding window pattern using time complexity of O(n) or O(log(n)).  
 
Problem #1:  

Given an array of integers and a number, write a function called maxSubarraySum,  
which finds the maximum sum of a subarray with the length of the number passed to the function. 
Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is 
not. 
*/ 

// sliding window 
// for loop to get first window
// start 2nd for loop starting from n 
const maxSubarraySum = (arr, n) => { 
    if (arr.length < n) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < n; i++) {
        tempSum += arr[i]
    } 

    maxSum = tempSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i-n] + arr[i];
        maxSum = Math.floor(Math.max(tempSum, maxSum));
    }
    return maxSum
} 
 
// Test Cases:  
// console.log(maxSubarraySum([100,200,300,400], 2)) //700 
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) //39  
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) //5 
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) //5 
// console.log(maxSubarraySum([2,3], 3)) //null 
 
/*
Problem 2
Given a sorted array of integers, find the first occurrence of a target value.  
If the target is not found in the array, return -1. 
*/

// let nums3 = [1, 1, 1, 2, 2, 2, 3, 3, 3]; 
// let target3 = 2; 
function binarySearchFirstOccurrence(nums, target) { 
    let resIdx = -1;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let midIdx = (Math.floor(left + right)) / 2;
        if (nums[midIdx] === target) {
            while (nums[midIdx] === target) {
                midIdx--;
            }
            return midIdx + 1;
        }
        else if (nums[midIdx] < target) {
            right = midIdx - 1; 
        }
        else {
            left = midIdx + 1;
        }
    }
    return resIdx;
} 

// Test cases 
// let nums1 = [1, 2, 3, 4, 5]; 
// let target1 = 3; 
// let expected1 = 2; 
// let result1 = binarySearchFirstOccurrence(nums1, target1); 
// console.assert(result1 === expected1, `Test case 1 failed: expected ${expected1} but got ${result1}`); 
 
// let nums2 = [1, 2, 3, 4, 5]; 
// let target2 = 6; 
// let expected2 = -1; 
// let result2 = binarySearchFirstOccurrence(nums2, target2); 
// console.assert(result2 === expected2, `Test case 2 failed: expected ${expected2} but got ${result2}`); 
 
// let nums3 = [1, 1, 1, 2, 2, 2, 3, 3, 3]; 
// let target3 = 2; 
// let expected3 = 3; 
// let result3 = binarySearchFirstOccurrence(nums3, target3); 
// console.assert(result3 === expected3, `Test case 3 failed: expected ${expected3} but got ${result3}`); 

/*
Problem #3:  
Given a string, find the length of the longest substring without repeating characters. 
*/
 
function lengthOfLongestSubstring(s) { 
    let left = 0;
    let right = 0;
    let charSet = new Set();
    let res = 0;

    while (right < s.length) {
        if (charSet.has(s[right])) {
            while(charSet.has(s[right])){
                charSet.delete(s[left]);
                left++;
            }
        }
        charSet.add(s[right]);
        res = Math.max(res, right - left + 1);
        right++;
    }
    return res;
} 
 
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 
console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1 
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 
