// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        let length = 0;
        let curr = this.head;
        while (curr) {
            length++;
            curr = curr.next;
        }
        return length
    }

    sumOfNodes() {
        let sum = 0;
        let curr = this.head;
        while (curr) {
            sum += curr.value
            curr = curr.next;
        }
        return sum
    }

    averageValue() {
        let sum = 0;
        let length = 0;
        let curr = this.head;
        while (curr) {
            sum += curr.value;
            length++;
            curr = curr.next;
        }
        return sum / length
    }

    findNthNode(n) {
        let index = 0;
        let curr = this.head;
        while (curr) {
            if (index === n) return curr;
            index++;
            curr = curr.next;
        }
    }

    findMid() {
        let length = 0;
        let curr = this.head;
        while (curr) {
            length++;
            curr = curr.next;
        }

        let index = 0;
        curr = this.head;
        let target = (length - 1) / 2 - ((length - 1) / 2) % 1;
        while (curr) {
            if (index === target) return curr;
            index++;
            curr = curr.next;
        }
    }

    reverse() {
        let newList = new SinglyLinkedList();
        let newArr =[];
        let curr = this.head;

        while (curr) {
            newArr.push(curr.value)
            curr = curr.next;
        }

        let curr = newNode
        for(let i = newArr.length - 1; i >= 0; i--){
            let newNode = new SinglyLinkedNode(newArr[i]);
            if(i === newArr.length -1){
                newList.head = newNode
            }else{

            }
        }






        //this is what we would have with the initial linked list
        //this.head.next = newNode
        //this.tail.next = null

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}