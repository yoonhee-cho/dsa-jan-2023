class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // constant time, constant space
    push(val) {
        let newNode = new Node(val);

        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next= newNode;
        this.tail = newNode;

        this.length++;

        return this;
    }

    // linear time, constant space
    pop(){
        if (!this.length) return ;

        // 노드가 하나만 있을 때  끝에 노드를 제거하려고할때
        // 전에 노드로 가야 됨
        let prevNode = this.head;
        let currNode = this.head;

        while (currNode.next) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        let removedTail = this.tail; 
        this.tail = prevNode;
        this.tail.next = null;

        this.length--;

        // 노드가 하나뿐인 상황일 때는 와일룹에 들어가지 않아서, prev, curr, head, tail이 다 같은 한 노드에 멈춰있어서
        // 만약에 길이가 0이라면 아무것도 없는 상태의 리스트로 만들어줘야함.
        if(!this.length) {
            this.head = null;
            this.tail = null;
        }
        return removedTail;
    }

    // constant time, space
    shift(){
        // 리스트가 비어있다면 아무것도 제거할 수 없는 상태
        if(!this.length) return ;

        let removedHead = this.head;

        this.head = removedHead.next;
        removedHead.next = null;

        this.length--;

        if(!this.length) {
            this.head = null;
            this.tail = null;
        }

        return removedHead;
    }

    // constant time, space
    unshift(val){
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

    // linear time, constant space
    get(idx){
        if (idx < 0 || idx > this.length-1) return ;

        if ( idx === 0 ) return this.head;
        if ( idx === this.length-1 ) return this.tail;

        // shift나 pop을 쓰면 그 노드를 리턴할 지는 몰라도 오리지널 리스트에서 그 노드들이 삭제되는 사이드이펙트가 생기는거아님?
        // 근데 써도 되는겨? i don't think so... 

        let arbIdx = 0;
        let currNode = this.head;

        while (arbIdx !== idx) {
            arbIdx++;
            currNode = currNode.next;
        }

        return currNode;
    }

    // linear time, constant psace
    set(idx, val){
        if (idx < 0 || idx > this.length-1) return ;
        if ( idx === 0 ) return this.head.val = val;
        if ( idx === this.length-1 ) return this.tail.val = val;

        let foundNode = this.get(idx);
        if ( foundNode ) {
            foundNode.val = val;
            return this;
        }
        return false;
    }

    insert(idx, val){
        if (idx < 0 || idx > this.length) return ;
        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);

        let prevNode = this.get(idx-1);
        let afterNode = prevNode.next;
        let newNode = new Node(val);

        prevNode.next = newNode;
        newNode.next = afterNode;

        this.length++;
        
        return this;
    }

    remove(idx){
        if (idx < 0 || idx > this.length-1) return ;
        if (idx === 0) return this.shift();
        if (idx === this.length-1) return this.pop();

        let prevNode = this.get(idx-1);
        let removedNode = prevNode.next;
        let afterNode = removedNode.next;

        prevNode.next = afterNode;

        this.length--;

        return removedNode;
    }
}

