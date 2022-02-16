const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(val) {
        let newNode = new SinglyLinkedNode(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this.length;

        // O(1)
    }

    dequeue() {
        let removedHead
        if(!this.head) return null;

        if(!this.head.next){
            removedHead = this.head
            this.head = null;
            this.tail = null;
        }else{
            removedHead = this.head
            this.head = this.head.next

        }
        this.length--
        return removedHead.value

        // O(1)
    }

}
let queue = new Queue()
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
console.log(queue)

module.exports = {
    Queue,
    SinglyLinkedNode
}
