"use strict";
class Person {
    constructor(c_id, c_name) {
        this.person_id = c_id;
        this.person_name = c_name;
    }
}
const sarv = new Person(1, 'Sarv');
console.log(sarv);
class Animal {
    constructor(c_id, c_name, c_type) {
        this.animal_id = c_id;
        this.animal_name = c_name;
        this.animal_type = c_type;
    }
}
const bouldou = new Animal(2, 'Bouldou', 'Dog');
console.log(bouldou);
class Human {
    constructor(c_id, c_name) {
        this.human_id = c_id;
        this.human_name = c_name;
    }
    register() {
        return `${this.human_name} is now registered!`;
    }
}
const valiant = new Human(3, 'Valiant');
console.log(valiant);
console.log(valiant.register());
class Labourer extends Person {
    constructor(l_id, l_name, l_position) {
        super(l_id, l_name);
        this.position = l_position;
    }
}
const labour = new Labourer(4, 'Barber', 'General worker');
console.log(labour);
//# sourceMappingURL=classes.js.map