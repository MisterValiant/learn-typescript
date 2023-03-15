// Declaring arrays
let numbers: number[] = [1, 2, 3];
numbers[0] = 2;

// Fixed length array
let user: [number, string] = [1, "Sarv"]

// using enums to represent a group of related variables / constants

const small = 1;
const medium = 2;
const large = 3;

const enum Size { Small = 0, Medium, Large };
// enum automatically add the numbers starting from initial number

let mySize: Size = Size.Medium

console.log(mySize)
console.log('Done')