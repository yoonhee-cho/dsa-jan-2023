/*
DAY 6 ASSIGNMENT 

Problem #1:  
 
Please construct the two classes with the appropriate properties for the Node and DLL, then for the DLL, 
please write the methods for:  
 
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
        this.prev = null;
    } 
} 
 
class DoublyLinkedList{ 
    constructor(){ 
        this.head = null;
        this.tail = null;
        this.length = 0;
    } 

    shift() {
        if (!this.length) return ;
 
        let removedNode = this.head;

        if (this.length===1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            removedNode.next = null;
            this.head.prev = null;
        }

        this.length--;
        return removedNode;
    }

    unshift(val) {
        let newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    push(val) {
        let newNode = new Node(val);

        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        this.length++;

        return this;
    }

    pop() {
        if(!this.length) return ;

        let removedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return removedNode;
        }
    
        this.tail = removedNode.prev;
        this.tail.next = null;
        removedNode.prev = null;

        this.length--;

        return removedNode;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return ;
        if (!this.length) return ;

        let arbIdx;
        let curr;

        if (idx > this.length / 2) {
            arbIdx = this.length-1;
            curr = this.tail;

            while (arbIdx !== idx) {
                arbIdx--;
                curr = curr.prev;
            }
        }
        else {
            arbIdx = 0;
            curr = this.head;
            while (arbIdx !== idx) {
                arbIdx++;
                curr = curr.next;
            }
        }

        return curr;
    } 
    // linear time

    set(idx, val) {
        let foundNode = this.get(idx);

        if (foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }
    // linear time

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return;
        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);

        let newNode = new Node(val);

        let prevNode = this.get(idx-1);
        let after = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = after;
        after.prev = newNode;

        this.length++;

        return this;
    }
    // linear time
   
    remove(idx) {
        if (idx < 0 || idx > this.length-1) return ;
        if (idx === 0) return this.shift();
        if (idx === this.length-1) return this.pop();

        let removedNode = this.get(idx);

        let prevNode = removedNode.prev;
        let after = removedNode.next;

        prevNode.next = after;
        after.prev = prevNode;
        
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;

        return removedNode;
    }
    // linear time

    removeOccurences(dll, val) {
        let curr = this.head;
        let arbIdx = 0;

        while(curr) {
            if(arbIdx === 0 && curr.val === val) { 
                let removedHead = this.head;
                this.head = removedHead.next;

                removedHead.next = null;
                this.head.prev = null;
            
                curr = this.head;
                this.length--;
                arbIdx = 0;
            }
            else if (arbIdx === this.length-1 && curr.val === val) {
                let removedTail = this.tail;
                this.tail = this.tail.prev;
                this.tail.next = null;

                removedTail.prev = null;
                curr = this.tail;
                this.length--
                arbIdx = this.length-1;
            }
            else if (curr.val === val) {
                let removedNode = curr;

                let prevNode = curr.prev;
                let afterNode = curr.next;
                prevNode.next = afterNode;
                afterNode.prev = prevNode;

                removedNode.prev = null;
                removedNode.next = null;
                this.length--;
                curr = afterNode;
            }
            else {
                curr = curr.next;
                arbIdx++;
            }
        }
        return this;
    }
}   

let dll = new DoublyLinkedList();
dll.push(2)
dll.push(2)
dll.push(10)
dll.push(8)
dll.push(4)
dll.push(2)
dll.push(5)
dll.push(2)
//console.log(dll.removeOccurences(dll, 2));

/*
Problem 2

Given a doubly linked list and a value x. Create a method called removeOccurences(this, x) that 
removes all occurrences of x from the doubly linked list. The removeOccurences method accepts a DLL as the 
first argument and x as the value to remove.  
 
** this, is in reference to the DLL passed into the method.  
 
For example:  
Input : DLL : 2 <-> 2 <-> 10 <-> 8 <-> 4 <-> 2 <-> 5 <-> 2
        x = 2
Output : 10 <-> 8 <-> 4 <-> 5
*/
  
/* 
Problem 3

Given a SORTED doubly linked list of positive, DISTINCT elements, create a function called 
firstPair(this, target) that finds the FIRST pair of numbers that equal to the sum called target. 
Return the sum in a array. The firstPair method accepts a DLL as the first argument and target of the value that the pair must 
sum up to.  
 
For example;  
 
Input: DLL: 1 <-> 3 <-> 4 <-> 5 <-> 6 <-> 7,  target = 7,  
 
Output: Should return a array of [1, 6] 
*/

function firstPair(dll, target) {
    let leftNode = dll.head;
    let leftIdx = 0;

    let rightNode = dll.tail;
    let rightIdx = dll.length-1;

    while(leftIdx < rightIdx) {
        let currSum = leftNode.val + rightNode.val;
        if (currSum === target) {
            return [leftNode.val, rightNode.val];
        }
        else if (currSum > target) {
            rightIdx--;
            rightNode = rightNode.prev;
        }
        else if (currSum <= target) {
            leftIdx++;
            leftNode = leftNode.next;
        }
    }
    
    return false;
}

const dll_1 = new DoublyLinkedList();
dll_1.push(1);
dll_1.push(3);
dll_1.push(4);
dll_1.push(5);
dll_1.push(6);
dll_1.push(7);

console.log(firstPair(dll_1, 7))