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
        //grab values from old list
        let newArr = []
        let curr = this.head;
        while (curr) {
            newArr.push(curr.value)
            curr = curr.next;
        }

        //create new list with values from old list
        let newList = new SinglyLinkedList();
        newList.head = new SinglyLinkedNode(newArr[newArr.length - 1]);  //tail -> head
        curr = newList.head;
        for (let i = newArr.length - 2; i >= 0; i--) {
            curr.next = new SinglyLinkedNode(newArr[i]);  //create new node with value from newArr
            curr = curr.next;
        }
        return newList
    }

    reverseInPlace() {
        //grab values from old list
        let newArr = []
        let curr = this.head;
        while (curr) {
            newArr.push(curr.value)
            curr = curr.next;
        }
        //loop through the list again, assign each node new values
        curr = this.head;
        while (curr) {
            curr.value = newArr.pop();
            curr = curr.next;
        }
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

        let rightPointer = this.tail;
        let leftPointer = this.head;

        while (rightPointer !== leftPointer) {
            rightPointer = rightPointer.prev;
            if(leftPointer === rightPointer){
                // console.log(leftPointer.value)
                // console.log(rightPointer.value)

                return leftPointer;

            }
            leftPointer = leftPointer.next;
        }
        // console.log(leftPointer.value)
        // console.log(rightPointer.value)
        return leftPointer

    }

    reverse() {
        let newArr = []
        let curr = this.head;
        while (curr) {
            newArr.push(curr.value)
            curr = curr.next;
        }

        //create new list with values from old list
        let newList = new DoublyLinkedList();
        newList.head = new DoublyLinkedNode(newArr[newArr.length - 1]);  //tail -> head
        curr = newList.head;
        let previousNode = null
        for (let i = newArr.length - 2; i >= 0; i--) {
            curr.prev = previousNode;
            curr.next = new SinglyLinkedNode(newArr[i]);  //create new node with value from newArr
            previousNode = curr;
            curr = curr.next;
        }
        return newList
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        let rightPointer = this.tail;
        let leftPointer = this.head;

        while (rightPointer !== leftPointer) {
            // console.log("left: ", leftPointer.value)
            // console.log("right: ", rightPointer.value)
            // console.log("------")
            let rightVal = rightPointer.value;
            let leftVal = leftPointer.value;
            leftPointer.value = rightVal;
            rightPointer.value = leftVal;
            // console.log("left: ", leftPointer.value)
            // console.log("right: ", rightPointer.value)

            rightPointer = rightPointer.prev;
            if(leftPointer === rightPointer) return
            leftPointer = leftPointer.next;

        }
        // Write your hypothesis on the time complexity of this method here
    }
}

let newList = new DoublyLinkedList()
newList.addToTail(1);
newList.addToTail(2);
newList.addToTail(3);
newList.addToTail(4);
newList.addToTail(5);
// console.log(newList.findMid().value)

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
