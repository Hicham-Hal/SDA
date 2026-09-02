class Node{
    constructor(element, next = null){
        this.value = element
        this.next = next
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    enqueue(value){
        const node = new Node(value)

        if(this.isEmpty()){
            this.front = node
            this.rear = node
        }else{
            this.rear.next = node;
            this.rear = node
        }
        this.size++
        return this;
    }

    dequeue(){
        if(this.isEmpty()) return undefined;

        const node = this.front;
        this.front = this.front.next

        if(this.front === null){
            this.rear = null
        }

        this.size--
        return node.value
    }

    peek(){
        return this.isEmpty() ? undefined : this.front.value;
    }

}

const q = new Queue()
q.enqueue(10).enqueue(20).enqueue(30)

console.log(q.peek())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.isEmpty())