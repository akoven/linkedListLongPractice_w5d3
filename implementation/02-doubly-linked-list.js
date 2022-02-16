// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        if(this.length > 0){
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }else{
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if (!this.head) return undefined;
        let returnedNode = this.head;
        if (!this.head.next) {
            this.head = null;
            this.tail = null
        } else {
            this.head.next.prev = null;
            this.head = this.head.next
        }
        this.length--;
        return returnedNode.value
    }

    removeFromTail() {
       if (!this.head) return undefined
       let returnedNode;
       if (!this.head.next) {
           returnedNode = this.tail;
            this.head = null;
            this.tail = null
        } else {
            returnedNode = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev
        }
        this.length--;
        return returnedNode.value
    }

    peekAtHead() {
        if (!this.head) return undefined;
        return this.head.value
    }

    peekAtTail() {
        if (!this.head) return undefined;
        return this.tail.value
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
