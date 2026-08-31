// Last in First Out (arrays)

class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.items.length !== 0){
            return this.items.pop()
        }
    }

    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length == 0
    }

    clear(){
        this.items = []
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}


// stack.push(5)
// stack.push(10)
// stack.push(8)
// stack.pop()
// stack.pop()

// console.log(stack.isEmpty())
// console.log(stack.peek())
// console.log(stack.size())
// stack.clear()

// stack.print()

const devideBy2 = (decNumber, base) => {
    const remStack = new Stack()
    let rem;
    let binaryString = ''
    const digits = '0123456789ABCDEF'

    while( decNumber > 0 ){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base)
    }
    while(!remStack.isEmpty()){
        const digit = remStack.pop()
        binaryString += digits[digit].toString();
    }
    console.log(binaryString)
    return binaryString
}


//balanced parentheses

const isBalanced = (text) => {
    const balStack = new Stack()
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for(const chr of text){
        if(chr === '(' || chr === '{' || chr === '['){
            balStack.push(chr)
        }else if(chr === ')' ||  chr === '}' || chr === ']'){
            if(balStack.isEmpty() || balStack.pop() !== pairs[chr]){
                return false
            }
        }
    }
    return balStack.isEmpty()
}



console.log(isBalanced('(([]))'))
console.log(isBalanced('[{})'))
console.log(isBalanced('(()'))