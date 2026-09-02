class Node{
    constructor(element, next = null){
        this.element = element
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }

    append(element){
        const node = new Node(element)
        let current;

        if(this.head === null){
            this.head = node
        }else{
            current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    removeAt(position){
        if(position > -1 && position < this.length){

            let current = this.head,
            previous,
            index = 0
            
            if(position === 0){
                this.head = current.next
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next
                }
                previous.next = current.next
            }
            this.length--
            return current.element
        }else{
            return null;
        }
    }

    insert(position, element){
        if(position >= 0 && position <= this.length){
            const node = new Node(element)
            let current = this.head,
            previous,
            index = 0;
            if(position === 0){
                node.next = current;
                this.head = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            this.length++
            return true
        }else{
            return false
        }
    }

    toString(){
        let current = this.head,
        string = '';

        while(current){
            string += current.element + (current.next ? 'n' : '')
            current = current.next
        }

        return string
    }

    indexOf(element){
        let current = this.head,
        index = 0;

        while(current){
            if(element === current.element){
                return index
            }
            index++
            current = current.next
        }

        return -1
    }

    remove(element){
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    isEmpty(){
        return this.length == 0
    }

    size(){
        return this.length
    }

    getHead(){
        return this.head
    }
}

const list = new LinkedList()
list.append(15)
list.append(14)
list.append(13)
list.insert(1, 18)
// console.log(list.removeAt(1))
// console.log(list.indexOf(10)
list.remove(13)
console.log(list.isEmpty())
console.log(list.size())
console.log(list.getHead())
console.log(list.toString())