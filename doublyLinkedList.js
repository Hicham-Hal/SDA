class Node{
    constructor(element, next = null, prev = null){
        this.element = element
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList{
    #head;
    #tail;
    #length

    append(element){
        const node = new Node(element)
        if(!this.#head){
            this.#head = node
            this.#tail = node
        }else{
            this.#tail.next = node
            node.prev = this.#tail
            this.#tail = node
        }
        this.#length++
    }

    preappend(element){
        const node = new Node(element)
        if(!this.#head){
            this.#head = node
            this.#tail = node
        }else{
            node.next = this.#head
            this.#head.prev = node
            this.#head = node
        }

        this.#length++
    }

    insert(position, element){
        if(position > -1 && position <= this.#length){
            const node = new Node(element)
            let current = this.#head,
            previous,
            index = 0
            
            if(position === 0){
                if(!this.#head){
                    this.#head = node
                    this.#tail = node
                }else{
                    node.next = current;
                    current.prev = node;
                    this.#head = node;
                }
            }else if(position === this.#length){
                current = this.#tail
                current.next = node
                node.prev = current
                this.#tail = node
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node

                node.prev = previous
                current.prev = node
            }

            this.#length++
            return true
        }else{
            return false
        }
    }

    removeAt(position){
        if(position > -1 && position < this.#length){
            let current = this.#head,
            index = 1,
            previous

            if(position === 0){
                this.#head = current.next
                if(#length === 1){
                    this.#tail = null
                }else{
                    this.#head.prev = null
                }
            }else if(position === this.#length-1){
                current = this.#tail
                this.#tail = current.prev
                this.#tail.next = null
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            this.#length--
            return current.element
        }else{
            return false
        }
    }
}

const dList = new DoublyLinkedList()
console.log(dList.insert(0, 14))
dList.insert(1, 13)
console.log(dList.removeAt(1))
console.log(dList)