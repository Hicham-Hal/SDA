class Node{
    constructor(data, next= null){
        this.data = data;
        this.next = next
    }
}


function insertEnd(head, x){
    let newNode = new Node(x)
    if(head == null){
        return newNode
    }

    let current = head
    while(current.next !== null){
        current = current.next
    }

    current.next = newNode

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

head = insertEnd(head, 50)

head = insertEnd(head, 60)

traverseList(head)