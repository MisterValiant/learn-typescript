// Traversy

interface UserInterface {
    id: number,
    name: string
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x+y