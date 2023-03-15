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