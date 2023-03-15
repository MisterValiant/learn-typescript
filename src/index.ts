// with anotations
let course: string = 'typescript';
let is_published: boolean = true;

// let sales: number=123_456_789;
// without annotations
let sales = 123_456_789;

// no initialisation (type any)
// Best practice to avoid 'any', else what the use of ts over js?
let level;

// May use "any type" in this context where the type is unknown
function render(document: any) {
    console.log(document);
}

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

let mySize: Size =Size.Medium

console.log(mySize)
console.log('Done')