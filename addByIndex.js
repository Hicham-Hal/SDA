class Node{
    constructor(data, next= null){
        this.data = data;
        this.next = next
    }
}


function insertAt(index, data, head){
    let newNode = new Node(data)
    let count = 0
    let current = head
    let previous

   
    if(head === null){
        return
    }
    if(index === 0){
        newNode.next = head
        return newNode
    }

    while(count < index){
        count++
        previous = current
        current = current.next
    }

    newNode.next = current
    previous.next = newNode

    return head

}

function traverseList(head){
    if(head == null){
        return
    }

    process.stdout.write(head.data.toString())
    if(head.next !== null){
        process.stdout.write(' --> ')
    }

    traverseList(head.next)
}


let head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)
head.next.next.next = new Node(40)

head = insertAt(3, 33, head)

traverseList(head)