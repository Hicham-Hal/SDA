//construct single node
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

// Create/Get/Remove Nodes from Linked List
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    //Insert first Node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++;
    }


    //Insert last node
    insertLast(data){
        let node = new Node(data)
        let current;

        // if empty, make head
        if(!this.head){
            this.head = node
        }else{
            current = this.head

            while(current.next){
                current = current.next
            }

            current.next = node
        }
        this.size++;
    }

    //Insert at index
    insertAt(data, index){
        // If index is out of range
        if(index < 0 || index > this.size) return

        //If first index
        if(index == 0){
            this.head = new Node(data)
            return;
        }

        const node = new Node(data)
        let current, previous;

        //Set current to first
        current = this.head;
        let count = 0
        while(count < index){
            previous = current //node before index
            current = current.next //node after index
            count++
        }

        node.next = current
        previous.next = node;

        this.size++;
    }

    //Get at index
    getAt(index){
        let current = this.head
        let count = 0;

        while(current){
            if(count == index){
                console.log(current.data)
            }
            count++
            current = current.next;
        }

        return null;
    }

    //Get at index
    getAt(index){
        if(index < 0 || index > this.size) return

        let current = this.head
        let previous;
        let count = 0

        //Remove first
        if(index === 0){
            this.head = current.next;
        }else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
                // console.log('remove first steps',previous, current)
            }

            previous.next = current.next;
        }

        this.size--
    }


    //Clear list
    clearList() {
        this.head = null;
        this.size = 0
    }

    //Print list data
    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}


const a = new Node(200)
const b = a;


const ll = new LinkedList()

ll.printListData()