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
        let newNode = new SinglyLinkedListNode(val)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++

        return this;
    }

    removeFromHead() {
        if(!this.head){
            return undefined;
        }else{
            this.head = this.head.next
            this.length--
        }

        if(this.length === 1){
            this.head = null;
        }
        return this.head

        // O(1)
    }

    removeFromTail() {
        if(!this.head){
            return undefined
        }
        let returnedNode;
        if(this.head.next){
            this.head = null;
        }else{
            let curr = this.head
            while(curr.next.next){
                curr = curr.next
            }
            returnedNode = curr.next;
            curr.next = null;
        }

        this.length--;
        return returnedNode

        // O(n)
    }

    peekAtHead() {
        if(!this.head){
            return undefined
        }
        return this.head.value

        // O(1)
    }

    print() {
        if(!this.head) return;

        let curr = this.head;
        while(curr){
            console.log(curr.value)
            curr = curr.next;
        }

        // O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
