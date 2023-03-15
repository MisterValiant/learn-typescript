// traversy

class Person {
    person_id: number
    person_name: string


    constructor(c_id: number, c_name: string) {
        this.person_id = c_id
        this.person_name = c_name
    }
}

const sarv = new Person(1, 'Sarv');
console.log(sarv)

// animal class
//-------------------------------------------------------------------------------------
class Animal {
    animal_id: number
    animal_name: string
    animal_type: string

    constructor(c_id: number, c_name: string, c_type: string) {
        this.animal_id = c_id
        this.animal_name = c_name
        this.animal_type = c_type
    }
}

const bouldou = new Animal(2, 'Bouldou', 'Dog');
console.log(bouldou);

// class + interface
//-------------------------------------------------------------------------------------
interface HumanInterface {
    human_id: number,
    human_name: string,
    register(): string
}

class Human implements HumanInterface {
    human_id: number
    human_name: string


    constructor(c_id: number, c_name: string) {
        this.human_id = c_id
        this.human_name = c_name
    }

    register(): string {
        return `${this.human_name} is now registered!`
    }
}

const valiant = new Human(3, 'Valiant');
console.log(valiant)
console.log(valiant.register())

// extending classes
//-------------------------------------------------------------------------------------

class Labourer extends Person {
    position: string

    constructor(l_id: number, l_name: string, l_position: string) {
        super(l_id, l_name)
        this.position=l_position
    }
}

const labour = new Labourer(4, 'Barber', 'General worker');
console.log(labour)