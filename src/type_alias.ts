type Employee = {
    // declare properties and methods an employee should have
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
}

let employees: Employee = {
    id: 1, name: 'Sarv', retire: (date: Date) => {
        console.log(date);
    }
};

employee.name = 'Valiant';