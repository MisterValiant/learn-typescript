// Note: make sure code you write conceptually makes sense

let employee: {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
} = { id: 1, name: 'Sarv', retire: (date: Date) => {
console.log(date);
}};

employee.name = 'Valiant';

// problem with above object:
// in order to create another employee object, we have to repeat the code (code duplication/repetition)

//use type alias instead