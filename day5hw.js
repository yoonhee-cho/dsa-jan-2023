/*
DAY 5 ASSIGNMENT 
 
Problem #1:  
Please construct the two classes with the appropriate properties for the Node and SLL, 
then for the SLL, please write the methods for:  
- Shift() 
- Unshift() 
- Push() 
- Pop() 
- Get() 
- Set() 
- Insert() 
- Remove() 
*/

class Node{ 
    constructor(val){ 
        this.val = val;
        this.next = null;
    } 
} 
 
class SinglyLinkedList{ 
    constructor(){ 
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    shift() {
        if (!this.length) return ;

        let removedHead = this.head;
        // Q) no need to do removedHead.next = null ?
        this.head = this.head.next;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return removedHead;
    }
    // O(1) time | O(1) space

    unshift(val) {
        let newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }
    // O(1) time | O(1) space

    push(val) {
        let newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }
    // O(1) time | O(1) space

    pop() {
        if (!this.length) return ;

        let removedNode = this.tail;

        let curr = this.head;
        let prev = this.head;

        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }

        prev.next = null;
        this.tail = prev;
        this.length--;

        if(!this.length) {
            this.head = null;
            this.tail = null;
        }

        return removedNode;
    }
    // O(N) time | O(1) space


    get(idx) {
        if (idx < 0 || idx >= this.length) return ;

        let arbIdx = 0;
        let curr = this.head;

        while (idx !== arbIdx) {
            curr = curr.next;
            arbIdx++;
        }

        return curr;
    }
    // O(N) time | O(1) space


    set(idx, val) {
        let nodeToSet = this.get(idx);
        if (nodeToSet) {
            nodeToSet.val = val;
            return this;
        }
        else {
            return false;
        }
    }
    // O(N) time | O(1) space


    insert(idx, val) {
        if (idx < 0 || idx > this.length) return;
        if (idx === 0) return this.shift(val);
        if (idx === this.length) return this.push(val);

        let newNode = new Node(val);
        let prev = this.get(idx-1);
        let temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;

        this.length++;

        return this;
    }
    // O(N) time | O(1) space

    remove(idx) {
        if (idx < 0 || idx >= this.length) return ;
        if (idx === 0) return this.shift();
        if (idx === this.length-1) return this.pop();

        let prev = this.get(idx-1);
        let removedNode = prev.next;

        prev.next = removedNode.next;
        this.length--;

        return removedNode;
    }   
    // O(N) time | O(1) space

    mostFrequent() { 
        if (!this.length) return;
        if (this.length === 1) return this.head.val;
    
        let freqObj = {}; 
    
        let curr = this.head;
        while(curr) {
            freqObj[curr.val] = (freqObj[curr.val] || 0) + 1;
            curr = curr.next;
        }
    
        let maxFreq = 0;
        for (let key in freqObj) {
            let currFreq = freqObj[key];
            maxFreq = Math.max(maxFreq, currFreq);
        }
    
        let valToReturn = Object.keys(freqObj).find(key => freqObj[key] === maxFreq);
        
        return valToReturn;
    } 
    // O(N) time | O(N) space
} 

//let sll = new SinglyLinkedList();
// sll.push(1);
// sll.push(1);
// sll.push(2);
// sll.push(2);
// sll.push(3);

// Q) if two keys have maxFreq, how to make the code to return two vals instead of one?

//console.log('sll', sll.set(0, 4));
//console.log('sll', sll.remove(0));
//console.log('sll', sll.mostFrequent(sll));

/*
Problem #2:  
Given a linked list, create a method called mostFrequent(this) 
that returns the node that occurs the most in the list. 
     
For example, given the following linked list:  
 
1 -> 1 -> 2 -> 2 -> 2 -> 3 -> null 
 
This function should return the node of 2.  
The function should take in a argument of a linked list and  
return a value of the node that occurs the most often.  
 
** this – referrers to the linked list passed into the method 
*/


/*
BONUS PROBLEM: Please solve this pattern using time complexity of O(n) and using the appropriate pattern 
 
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). 
 
Find two lines that together with the x-axis form a container, such that the container 
contains the most water. 
 
Return the maximum amount of water a container can store. 
 
Notice that you may not slant the container. 
 
Example 1: (SEE PICTURE BELOW!) 
 
Input: height = [1,8,6,2,5,4,8,3,7] 
Output: 49 
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49. 
 
Example 2: 
 
Input: height = [1,1] 
Output: 1 
 
* @param {number[]} height 
* @return {number} 
*/ 

function maxArea (height) { 
    // leng has to be greater than 2 to calculate the size
    if (height.length < 2) return ;

    let maxSize = 0;

    // how to iterate height array without using nested for loop?
    // think i gotta use slicing window or muliple pointers pattern
    let left = 0;
    let right = height.length-1;

    while (left < right) {
        let w = right - left;
        let h = Math.min(height[left], height[right]);
        let currSize = w * h;
        maxSize = Math.max(currSize, maxSize);

        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxSize;
}; 
// O(N) time | O(1) space


let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));

