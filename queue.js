//FIFO

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
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
        console.log(this.items.toString())
    }
}



const hotPotato = (nameList, num) => {
    const queue = new Queue()

    for(let i = 0; i < nameList.length; i++){
        queue.enqueue(nameList[i])
    }

    let eliminated = ''
    while( queue.size() > 1 ){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' was eliminated from the Hot Potato game!')
    }

    return queue.dequeue()
}

let name = ['John', 'Jane', 'Doe', 'Micheal', 'Jessy']
let winner = hotPotato(name, 3)
console.log(`The winner is ${winner}`)