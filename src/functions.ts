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