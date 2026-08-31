class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
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



function insertAtFront(data, x){
    let newNode = new Node(x)
    newNode.next = data
    return newNode
}


let head = new Node(50)
head.next = new Node(60)
head.next.next = new Node(70)

head = insertAtFront(head, 10)

traverseList(head)