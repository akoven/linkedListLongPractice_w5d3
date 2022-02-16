// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;
        return this;
    }

    removeFromHead() {
       if (!this.head) return undefined;
       let returnedNode = this.head;
       if (!this.head.next) {
           this.head = null
       } else {
           this.head = this.head.next;
       }
       this.length--;
       return returnedNode
    }

    removeFromTail() {
        if (!this.head) return undefined
        let returnedNode;
        if (!this.head.next) {
            returnedNode = this.head;
           this.head = null
        } else {
            let curr = this.head;
            while (curr.next.next) {
                curr = curr.next;
            }
            returnedNode = curr.next;
            curr.next = null;
        }
        this.length--;
        return returnedNode
    }

    peekAtHead() {
        if (!this.head) return undefined
        return this.head.value
    }

    print() {
        if (!this.head) return;
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
