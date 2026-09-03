class Set{
    constructor(){
        this.items = {}
    }

    has(value){
        return this.items.hasOwnProperty(value)
    }
}

