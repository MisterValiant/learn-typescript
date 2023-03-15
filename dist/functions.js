"use strict";
function calculateTTTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTTTax(10000, 2022);
function calculateTTTTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTTTTax(10000);
//# sourceMappingURL=functions.js.map