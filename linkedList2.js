class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next
    }
}


const d1 = new Node(20)

d1.next = new Node(30)

d1.next.next = new Node(40)


d1.next.next.next = new Node(50)


let temp = d1

// function traverseList(head){
//     while(head !== null){
//         process.stdout.write(head.data.toString())
//         if(head.next !== null){
//             process.stdout.write('-->')
//         }
//         head = head.next;
//     }

//     console.log()
// }


function traverseList(head){
    if(head !== null){
        process.stdout.write(head.data.toString())
        if(head.next !== null){
            process.stdout.write(' --> ')
        }
        traverseList(head.next)
    }
}


let head = new Node(30)

head.next = new Node(20)
head.next.next = new Node(10)
head.next.next.next = new Node(0)

traverseList(head)