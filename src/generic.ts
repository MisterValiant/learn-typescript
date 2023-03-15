class People {
    person_id: number
    person_name: string


    constructor(c_id: number, c_name: string) {
        this.person_id = c_id
        this.person_name = c_name
    }
}

class MyWorker extends People {
    position: string

    constructor(l_id: number, l_name: string, l_position: string) {
        super(l_id, l_name)
        this.position=l_position
    }
}



const emp = new MyWorker(5, 'Paint', 'General Worker')

// Remember: avoid using any
//-------------------------------------------------
// function getArray(items: any[]): any[]{
//     return new Array().concat(items)
// }

// let numArray = getArray([1,2,3,4])
// let strArray = getArray(['brad', 'John', 'Jill'])

// numArray.push('hello')


// instead use generics - placeholders
//-------------------------------------------------
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<String>(['brad', 'John', 'Jill'])

numArray.push(5)
strArray.push('Sarv')

console.log(numArray)
console.log(strArray)