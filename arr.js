const numbers = [1,2,3,4,5,6,7,8,9]


let iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value)
console.log(iterator.next().value)

//entries

let aEntries = numbers.entries(); //return iteratro of key/value
console.log(aEntries.next().value)
console.log(aEntries.next().value)

//Keys

let aKeys = numbers.keys();
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next()) //done: true


//Values

let aValues = numbers.values()

console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next()) //done: true


//Using the form method

let numbers2 = Array.from(numbers)
console.log(numbers2)

let evens = Array.from(numbers, (x) => x % 2 == 0)
console.log(evens)


// Array.of

let arrNum = Array.of(1,2,3)
let arrNum2 = [1,2,3]
console.log(arrNum, arrNum2)

let arrNumCopy = Array.of(...arrNum)
console.log(arrNumCopy)

// fill

let numbersFill = Array.of(1,2,3,4,5,6,7,8)
console.log(numbersFill)

numbersFill.fill(0)
console.log(numbersFill)

numbersFill.fill(2, 1)
console.log(numbersFill)

numbersFill.fill(1, 3, 5) //5 not inclusive
console.log(numbersFill)

// if we want to create an array and initialize its values

let ones = Array(6).fill(1)
console.log(ones)

//Copywithin method

const copyArr = [1,2,3,4,5,6]
console.log(copyArr)

copyArr.copyWithin(0, 3)
console.log(copyArr)

const copyArr2 = [1,2,3,4,5,6]
console.log(copyArr2)

copyArr2.copyWithin(1, 3, 5) //5 not inclusive
console.log(copyArr2)


//Sorting elements

const sortNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

sortNumbers.sort()
console.log(sortNumbers)

const sortNumbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

sortNumbers2.reverse()
console.log(sortNumbers2)

const sortNumbers3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

sortNumbers3.sort((a,b) => b - a)
console.log(sortNumbers3)


//Custom sorting

const friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25}
]

const comparePerson = (a, b) => {
    if(a.age > b.age){
        return 1
    }
    if(a.age < b.age){
        return -1
    }
    return 0;
}

console.log(friends.sort(comparePerson))


//Sorting strings

const names = ['Ana', 'ana', 'John', 'john']
names.sort()
console.log(names) //Ana, John, ana, John because A:65, J:74, a:97, j:106 (ASCII values)


//Searching

//indexOf and lastIndexOf
const searchWithIndexNumber = [32, 4, 43, 432, 2, 1, 3, 4]
console.log(searchWithIndexNumber.indexOf(1))
console.log(searchWithIndexNumber.indexOf(100))

searchWithIndexNumber.push(1)
console.log(searchWithIndexNumber.lastIndexOf(1))

//find and findIndex

const searchWithFindNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const multipleOf13 = (element, index, array) => {
    return (element % 13 == 0) ? true : false
}

console.log(searchWithFindNumber.find(multipleOf13))
console.log(searchWithFindNumber.findIndex(multipleOf13))

// includes

console.log(searchWithFindNumber.includes(15))
console.log(searchWithFindNumber.includes(16))

const numberIncludesMethod = [7,6,5,4,3,2,1]
console.log(numberIncludesMethod.includes(4, 5)) //seaching for number 4 starting at the index 5

//Outputting the array into a string

//toString()

const numberMethString = [1,2,3,4,5,6,7,8,9,10]
console.log(numberMethString.toString())

//join()

const joinedNumbers = numberMethString.join('-')
console.log(joinedNumbers)

//typedArray class

//ArrayBuffer       is a row block of memory(it's the low level foundation that TypedArrays sit on top of)

const buffer = new ArrayBuffer(8)   // allocate 8 bytes of raw memory
console.log(buffer.byteLength) // 8

console.log(buffer[0]) // undefined - can't access it directly!

//View 

//save buffer different interpretations:

const asInt8 = new Int8Array(buffer);       // 8 elements (1 byte each)
asInt8[0] = 10000
console.log(asInt8)
const asInt16 = new Int16Array(buffer);     // 4 elements (2 bytes each)
console.log(asInt16)
const asFloat64 = new Float64Array(buffer);   // 1 element (8 bytes)
console.log(asFloat64)


const length = 5
const int16 = new Int16Array(length)

const array16 = []
array16.length = length

for(let i =0; i < length; i++){
    int16[i] = i+1;
}

console.log(int16)