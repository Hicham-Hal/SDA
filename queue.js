//First is First out

class Queue{
    constructor() {
        this.items = {}
        this.front = 0 
        this.rear = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++;
    }

    dequeue(){
        if(this.isEmpty()) return 'Queue is Empty'
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item;
    }

    peek(){
        if(this.isEmpty()) return 'Queue is Empty'
        return this.items[this.front]
    }

    isEmpty(){
        return this.rear === this.front
    }
}

const q = new Queue()
q.enqueue('fd')
q.enqueue('fs')
q.enqueue('fa')
console.log(q.dequeue())
console.log(q.peek())
console.log(q.isEmpty())
console.log(q)