class PriorityQueue{
    constructor(){
        this.items = []
    }

    enqueue(element, priority){
        const queueElement = { element, priority }

        if(!this.isEmpty){
            this.items.push(queueElement)
        }else{
            let added = false
            for(let i = 0; i < this.items.length; i++){
                if(queueElement.priority < this.items[i].priority){
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break;
                }
            }

            if(!added){
                this.items.push(queueElement)
            }
        }
        
    }

    dequeue(){
        return this.items.shift()
    }

    front(){
        return this.items[0]
    }

    size(){
        return this.items.length
    }

    isEmpty(){
        return this.items.length == 0
    }

    print(){
        for(let i = 0; i < this.items.length; i++){
            console.log(`${this.items[i].element} - ${this.items[i].priority}`)
        }
    }
}


const queue = new PriorityQueue()

queue.enqueue('John', 3)
queue.enqueue('Jane', 1)

console.log(queue.isEmpty())
// queue.dequeue(
console.log(queue.front())
console.log(queue.size())
queue.print()