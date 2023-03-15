"use strict";
class People {
    constructor(c_id, c_name) {
        this.person_id = c_id;
        this.person_name = c_name;
    }
}
class MyWorker extends People {
    constructor(l_id, l_name, l_position) {
        super(l_id, l_name);
        this.position = l_position;
    }
}
const emp = new MyWorker(5, 'Paint', 'General Worker');
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'John', 'Jill']);
numArray.push(5);
strArray.push('Sarv');
console.log(numArray);
console.log(strArray);
//# sourceMappingURL=generic.js.map