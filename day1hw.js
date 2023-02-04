/* 
Problem 1: In 3-4 sentences, please explain what Big O Notation is.
-> Big O Notation is a way to estimate code's approximate time and space complexity 
as the input data grows in order to measure its efficiency. 
We measure when it is in the worst case and drop the constant numbers as they barely have an impact, 
for example if the total time complexity is 2 O(N^2) + 3 O(N) + 5, then the consolidating complexity is O(N^2).
*/

/* 
Problem 2: For each of the time complexities shown below: 
- Name the complexity 
- Rank from 1-5 (1 being the best, 5 being the worst) 
- Describe in 1-2 sentences of the complexity 
- Provide a code example of how the complexity works 

-> 1. O(1) Constant : Regardless of the input size, the code's running time is the same.
    example 1) adding, removing at the end of array 
    const addingAtTheEnd = (arr, num) => {
        return arr.push(num);
    }
    example 2) methmetical calculation
    const addTwoNums = (num1, num2) => {
        return num1 + num2;
    }
    example 3) retreive elements from the array
    const retrieveEl = (arr) => {
        return arr[3];
    } 
-> 2. O(log N) Log : As input size grows, the number of execution decreases compared to the beginning.
    example 1)
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    const log = (arr) => {
        const res = [];
        for (let i = 1; i < arr.length; i *= 2) {
            res.push(arr[i]);
        }
        return res; // [ 2, 3, 5, 9, 17 ]
    }
-> 3. O(N) Linear : It runs as much as the input size.
    example 1) array methods like, splice, forEach, map, find
    example 2) for loop, while loop
    const linear = () => {
        const res = [];
        for (let i = 0; i < arr.length; i++) {
            res.push(arr[i]);
        }
        return res;
    }
-> 4. O(N^2) Quadratic : It runs the amount multiplied by the input size.
    example 1) nested for loops
    const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const iterateNestedArr = (arr) => {
        const res = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                res.push(arr[i][j])
            }
        }
        return res;
    }
        
-> 5. O(N!) Factorial : the worst time complexity
    example)
    const factorial = (num) => {
        let res = num;
        if (num === 0) return 1;

        for (let i = 0; i < num; i++) {
            res = num * factorial(num-1);
        }
        return res;
    } 
*/
 
/*
Problem 3: Name 3 reasons why we care about Big O and we care about code performance.
-> 1. Scalability. As users of our project grows, our code needs to be able to handle them and expand further.
-> 2. Time is money. No one wants to use an app that takes ages to load some data.
-> 3. It shows my ability to write efficient code.
*/ 


/*
Problem 4: What is the problem of using a time method such as performance.now() to measure how “fast” a 
code runs on our machines. 
-> Everyone's computer's CPU and performance is different, so the result changes everytime.
*/

/*
Problem 5: Given the following piece of code: 
- Explain what the TOTAL time complexity & the CONSOLIDATED time complexity is 
-> total time complexity: O(2) + O(2n) + O(n^2) 
-> consolidated time complexity: O(n^2)
*/

/*
Problem 6: Given the following piece of code: 
- Explain what the TOTAL time complexity & the CONSOLIDATED time complexity is 
-> total time complexity: O(1) + O(n) + O(n^3)
-> consolidated time complexity: O(n^3)
*/

/*
Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.
-> As input size grows, the constants barely affects to its performance. Also it is beacause when the code with the worst time complextiy completed its execution, other codes with more efficient time complexity already finished its execution.
*/

/*
Problem 8: In 2-3 sentences, please explain what space complexity is and why we care.
-> Space complexity is about how much storage(memory) did we use to run our code. we care about it because it can be used to measure how efficient the code is.
*/

/*
Problem 9: Given the following data TYPES, label what the space complexity is for each one: 
 
- Boolean : constant
- Undefined : constant
- Null : constant
- Numbers : constant
- String : linear
- Array : linear
- Object : linear
*/

/*
Problem 10: Give two reasons when you should use a array and when you should use a object.
-> array : when the order of elements matters, or you want to access elements in the by its index
-> object: when you want to store multiple values as per the key
*/

/*
Problem 11: Given the following object methods, label what the TIME complexity is for each one:
*/
const obj = {
    name: 'Tony',
}
// inserting -> constant
obj.age = 44; 

// removing -> constant
delete obj.age; 

// searing 1 -> constant
obj.hasOwnProperty['name'] 

// searching 2 -> linear
for (const prop in obj) {
    console.log(obj[prop])
} 

// accessing -> constant
obj.age 

// retrieving keys -> linear
Object.keys(obj) 

// retrieving values -> linear
Object.values(obj) 


/*
Problem 12: Given the following array methods, label what the TIME complexity is for each one:
*/
const arr2 = [1, 2, 3, 4, 5, 6, 7];

// inserting 1 -> constant
arr2.push(8)

// inserting 2 -> linear
arr.unshift(0)

// removing 1 -> constant
arr2.pop()

// removing 2 -> linear
arr2.shift()

// searching 1 -> linear
const findNumber = arr2.find(num => num === 2);

// searching 2 -> linear
for (let i = 0; i < arr2.length; i++){
    if(arr2[i] === 2) {
        return arr2[i];
    }
}

// retrieving -> constant
const getNumber = arr2[3];

// method 1 -> linear
const double = arr2.map(num => num*2);

// method 2 -> linear
const removeAndAddNewNumber = arr2.splice(1, 1, 5);

// method 3 -> linear
const getSum = arr2.reduce((total, num) => total + num,0);

// method 4 -> linear
for (const num of arr2) {
    console.log(num * 2)
}

// method 5 -> linear
const convertToString = arr2.join('')


//Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of why it is.
// -> 13-1) time O(N): For loop iterates by the number of elements in the array.
//          space O(1): We didn't store anything.
function findFirstIndexOfNumber(number, array) { 
    for (let i = 0; i < array.length; i++) { 
        if (array[i] === number) { 
            return i; 
        } 
    } 
    return -1 
} 

// -> 13-2) time O(N) : forEach method takes O(N) time, as it runs a given function once for each element in the array.
//          space O(N): In the worst case, all the elements in the array might be same as number.
function findEachIndexOfNumber(number,array) { 
    let arrayOfIndexes = []; 
    array.forEach(function(element, index) { 
        if (element === number) { 
            arrayOfIndexes.push(index); 
        } 
    }); 
    return arrayOfIndexes; 
}

//-> 13-3) time O(1) : Regardless of input size, the function always checking first and last elements in the array. so, retrieving elements by index from array and comparing them takes constant times.
//         space: O(1) : We are not storing anything.
const array = [36, 14, 1, 7, 21]; 

function higherOrLower(array) { 
    if (array[array.length -1 ] > array[0]) { 
        return "Higher"; 
    }
    else if (array[array.length -1 ] < array[0]) { 
        return "Lower"; 
    } else { 
        return "Neither"; 
    } 
} 
 
//-> 13-4) time: O(N), For loop runs by the number of elements in the array.
//         space: O(1), Assigning number value to the variable named sum takes constant space.
const array = [1,2,3,4,5,6,7,8]; 
function determineSumOfSequentialArray(array) { 
    let sum = 0; 
    for (let i = 0; i < array.length; i++) { 
        sum += array[i]; 
    } 
    return sum; 
} 
//-> 13-5) time: O(1), No matter how big the array gets, the function computes its length and calculate certain formula which takes constant time.
//         space: O(1), We are not storing anything.
const array = [1,2,3,4,5,6,7,8]; 
 function determineSumOfSequentialArray(array) { 
    return array.length * (array.length + 1)/2; 
} 

//-> 13-6) time: The logic is that the searching scope is halved depending on whether the middle element value is greater than or less than a number. 
//               So, the average time complexity is O(log N). In the worst case, if there would be no element in the array that has same value as the number, 
//               even though we are using recursion, the function shrinks its searching scope by half every execution, so I would say O(log N).
//         space: In the worst case, the number of recursion stack is 1/2 N, so after dropping constant, I would say O(N)..
function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) {                              
    let middleIndex = Math.floor((beginIndex + endIndex)/2); 
    if (array[middleIndex] === number) { 
        return middleIndex; 
    } else if (beginIndex >= endIndex) { 
        return -1; 
    } else if (array[middleIndex] < number) { 
        beginIndex = middleIndex + 1; 
        return recursiveBinarySearch(number, array, beginIndex, endIndex); 
    } else if (array[middleIndex] > number) { 
        endIndex = middleIndex - 1; 
        return recursiveBinarySearch(number, array, beginIndex, endIndex); 
    } 
} 
     
//-> 13-7) time: O(N^2) forEach takes O(N), and we are using another forEach inside of forEach so it is same as using a nested forloop. But, array1, and array2 are different inputs so, O(N*M)..?
//         space: O(N) In the worst case, if all the elements in the two arrays are same and they have same long length, we have to store N(array1 or array2) length of indices pair in the array called arrayOfPairs.
const array1 = [3, 7, 9, 12, 15, 18, 32]; 
const array2 = [3, 3, 7, 41, 76]; 
function compareArrays(array1, array2) { 
    let arrayOfPairs = []; 
    array1.forEach(function(e, i) { 
        array2.forEach(function(e2, i2) { 
            if (e === e2) { 
                arrayOfPairs.push([i, i2]); 
            } 
        }); 
    }); 
    return arrayOfPairs; 
} 
//-> 13-8) time: O(N^2), I guess it is a bubble sort which takes O(N^2). We are using for loop in side while loop.
//      space: O(1). We are only swapping elements in the original array.
function sortByValue(array){ 
    function swap(array, index1, index2){ 
        let temporaryValue = array[index1]; 
        array[index1] = array[index2]; 
        array[index2] = temporaryValue; 
    } 
    let count = 1; 
    while (count < array.length) { 
        let swapCount = 0; 
        for (let i=0; i<array.length-count; i++) { 
            if (array[i] > array[i+1]) { 
                swap(array, i, i+1); 
                swapCount++; 
            } 
        } 
        count++; 
    } 
    return array; 
} 
     
//-> 13-9) time: O(N^2), we are using .includes() has a time complexity O(N) inside of .forEach() method which also takes O(N).
//              but, since .forEach() method takes array and .includes() method takes array2, their inputs are different, so O(N*M)?
//         space: O(N), In the worst case, array2's every elements are same as array's element with same long length, then we need to store N amount of elements in the dupeArray.
function returnDupes(array, array2) { 
    let dupeArray = []; 
    array.forEach(function(element) { 
        if (array2.includes(element)) { 
            dupeArray.push(element); 
        } 
    }); 
    return dupeArray; 
} 

//-> 13-10) time: O(N), After .filter() method which takes O(N) time finishes running, .reduce() method which takes O(N) can be run. 
// In the worst case, all the elements in the array can be bigger than 5, and less than 20, so .reduce() method might get the array with original array length.
// space: O(1), we are not storing anything.
function sumFilteredData(array) { 
    return array.filter(function(element) { 
        return ((element > 5) && (element < 20)) 
    }).reduce(function(valueToAdd, currentValue) { 
        return valueToAdd + currentValue; 
    },0);
}
