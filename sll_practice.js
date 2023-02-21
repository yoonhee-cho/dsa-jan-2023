class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    // remove head
    shift() {
        // if there is nothing, we cannot remove anything
        if(!this.length) return ;

        let removedNode = this.head;
        this.head = removedNode.next;
        this.length--;

        if(!this.length){
            this.tail=null;
        }
        return removedNode;
    }

    // add newNode to head
    unshift(val) {

        let newNode = new Node(val);
        if(!this.length) {
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

    push(val) {
        let newNode = new Node(val);
        if(!this.length) {
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

    get(idx) {
        if (idx < 0 || idx > this.length-1) return ;

        let currNode = this.head;
        let arbIdx = 0;

        // while(currNode) {
        //     if(idx === arbIdx) {
        //         return currNode;
        //     }
        //     currNode = currNode.next;
        //     arbIdx++;
        // }

        while(idx !== arbIdx) {
            currNode = currNode.next;
            arbIdx++;
        }

        return currNode;
    }

    set(idx, val) {
        if (idx < 0 || idx > this.length-1) return ;

        let foundNode = this.get(idx);
        if(foundNode) {
            foundNode.val= val;
            return this;
        }

        return false;
    }

    pop() {
        if(!this.length) return ;

        let removedTail = this.tail;
        // let prevLastNode = this.get(this.length-2);
        // prevLastNode.next = null;
        // this.tail = prevLastNode;

        let currNode = this.head;
        let prevNode = this.head;

        while (currNode.next) {
            prevNode = currNode;
            currNode = currNode.next;
        }

        prevNode.next = null;
        this.tail = prevNode;
        this.length--;

        if(!this.length) {
            this.head = null;
            this.tail = null;
        }

        return removedTail;
    }

    insert(idx, val){
        if (idx < 0 || idx > this.length) return ;
        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);

        // if idx is inbetween 0 and last idx
        let prevNode = this.get(idx-1);
        let afterNode = prevNode.next;

        let newNode = new Node(val);

        prevNode.next = newNode;
        newNode.next = afterNode;

        this.length++;

        return this;
    }

    remove(idx) {
        if (!this.length) return ;
        if (idx < 0 || idx >= this.length) return ;
        if (idx === 0) return this.shift();
        if (idx === this.length-1) return this.pop();

        let prevNode = thi.get(idx-1);
        let removedNode = prevNode.next;
        let afterNode = removedNode.next;

        prevNode.next = afterNode;

        this.length--;

        // what happen on head tail if there are only two or one node?
        // gotta console.log it out
        return removedNode;
    }



}

const sll = new SinglyLinkedList();
sll.push(1);

console.log(sll.pop());
console.log('sll', sll);