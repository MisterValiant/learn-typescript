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

let mySize: Size = Size.Medium

console.log(mySize)
console.log('Done')

// Functions
function calculateTax(income: number) {
    return 0;
}

// Function + return no values
function calculateTTax(income: number): void {

}

// Function + return annotation
function calculateTTTax(income: number, taxYear:number): number {
    let x;
    if (taxYear<2022)
        return income * 1.2;
    return income * 1.3; //else   
}

calculateTTTax(10_000, 2022);

// optional parameter
function calculateTTTTax(income: number, taxYear=2022): number {
    if (taxYear<2022)
        return income * 1.2;
    return income * 1.3; //else   
}

calculateTTTTax(10_000);

// Always properly annotate functions, parameters and return types
// enable noUnusedlocals, noUnsedParametes, noImplicitReturns in config