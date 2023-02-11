/*
Problem 1: Recursion 
Write a recursive function called flatTheArray which accepts an array of arrays  
and returns a new array with all values flattened. 
*/

const flatTheArray1 = (arr, res=[]) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatTheArray1(arr[i], res);
        }
        else {
            res.push(arr[i])
        }
    }
    return res;
}
// time : O(N) ..? cannot precisely explain total time complexity.. :/
// space : O(N) ..?

//console.log(flatTheArray1([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5] 
//console.log(flatTheArray1([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5] 
//console.log(flatTheArray1([[1],[2],[3]])) // [1,2,3] 
//console.log(flatTheArray1([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3] 
 
/*
Problem 2: Recursion 
Write a recursive function called capitalizeWords.  
Given an array of words, return a new array containing each word capitalized. 
*/
const capitalizeAllLetters = (array) => {
    let res = [];
    const charSet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    for(let i =0; i < array.length; i++) {
        let currEl = array[i];
        let currElUpper = '';

        for(let j = 0; j < currEl.length; j++) {
            if(!charSet.has(currEl[j])) {
                currElUpper += currEl[j].toUpperCase()
            }
        }
        res.push(currElUpper)
    } 
    return res;
} 
// time : O(N^2)
// space : O(N)

const capitalizeAllLetters1 = (array, i=0, res=[]) => {
    if (i === array.length) {
        return;
    };

    const helper = (str) => {
        let upperStr = '';

        for (let char of str) {
            upperStr += char.toUpperCase();
        }
        return upperStr;
    }

    res.push(helper(array[i]));
    capitalizeAllLetters1(array, i+1, res);

    return res;
}
// time : O(N^2)
// space : O(N) 
// Q)even tho I am returning res which has O(N) size, I put it in argument so, it does not considered as taking up space complexity?
//  but call stack can take maximum O(N)

// let words = ['tony', 'kim']; 
// console.log(capitalizeAllLetters(words)); // ['TONY', 'KIM'] 
 
/*
Problem 3: Recursion 
example 12: collect Strings 
Write a function called collectStrings which accepts an object and returns  
an array of all the values in the object that have a typeof string 
*/
//collectStrings(obj) // ["foo", "bar", "baz"]) 
let obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
  
function collectStrings(obj, res = []) { 
    for (let key in obj) {
        if(typeof obj[key] === 'string') {
            res.push(obj[key]);
        }
        else {
            collectStrings(obj[key], res)
        }
    }
    return res;
} 
// time: O(N)
// space: O(N)
//console.log(collectStrings(obj)); // Output: ['foo', 'bar', 'baz']
//recursion with helper 
 
/*
Problem #4: Bubble Sort 
Given the following data structure 
Using the bubble sort, please sort each profile 
by ascending order for the following properties:  
    - age 
    - rating 
*** If you want to know how to retrieve a value from a map,  
please see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get  
*/

const data = [  
  {  
      name: 'John Smith',   
      age: new Map([['age', 88]]),   
      favoriteMovie: [  
          {  
              title: 'Hulk',   
              genre: 'action',   
              rating: 6  
          }  
      ]  
  },  
  {  
      name: 'Tony Kim',   
      age: new Map([['age', 3]]),   
      favoriteMovie: [  
          {  
              title: 'Top Gun',   
              genre: 'action',   
              rating: 10  
          }  
      ]  
  },  
  {  
      name: 'John Smith',   
      age: new Map([['age', 35]]),   
      favoriteMovie: [  
          {  
              title: 'Saw',   
              genre: 'horror',   
              rating: 8  
          }  
      ]  
  }  
] 

const bubbleSortByAge = (data) => {
    for (let i = data.length-1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(data[j]['age'].get('age') > data[j+1]['age'].get('age')) {
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
    return data;
}

const bubbleSortByRating = (data) => {
    for (let i = data.length-1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(data[j].favoriteMovie[0].rating > data[j+1].favoriteMovie[0].rating) {
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
    return data;
}
// time: O(N^2)
// space: O(1)
//console.log('res', bubbleSortByAge(data));
console.log('res', bubbleSortByRating(data));

//age (solution should look like)
const sortedByAge = [  
  {  
      name: 'Tony Kim',   
      age: new Map([['age', 3]]),   
      favoriteMovie: [  
          {  
              title: 'Top Gun',   
              genre: 'action',   
              rating: 10  
          }  
      ]  
  },  
  {  
      name: 'John Smith',   
      age: new Map([['age', 35]]),   
      favoriteMovie: [  
          {  
              title: 'Saw',   
              genre: 'horror',   
              rating: 8  
          }  
      ]  
  }, 
  {  
      name: 'John Smith',   
      age: new Map([['age', 88]]),   
      favoriteMovie: [  
          {  
              title: 'Hulk',   
              genre: 'action',   
              rating: 6  
          }  
      ]  
  } 
] 

 
// favorite movie by rating (solution should look like) 
const sortedByRating = [  
  {  
      name: 'John Smith',   
      age: new Map([['age', 88]]),   
      favoriteMovie: [  
          {  
              title: 'Hulk',   
              genre: 'action',   
              rating: 6  
          }  
      ]  
  },  
  {  
      name: 'John Smith',   
      age: new Map([['age', 35]]),   
      favoriteMovie: [  
          {  
              title: 'Saw',   
              genre: 'horror',   
              rating: 8  
          }  
      ]  
  }, 
  {  
      name: 'Tony Kim',   
      age: new Map([['age', 3]]),   
      favoriteMovie: [  
          {  
              title: 'Top Gun',   
              genre: 'action',   
              rating: 10  
          }  
      ]  
  } 
] 
 
 
 
 
 
 
 