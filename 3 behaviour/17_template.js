class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} выполняет ${this.responsibilities()}`
    }

    getPaid(){
        return `${this.name} получает ${this.salary}`;
    }
}

class Developer extends Employee{
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'процесс создания программ';
    }
}

class Tester extends Employee{
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'процесс тестирования программ';
    }
}

const dev = new Developer('Alex', 250000);
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Timur', 150000);
console.log(tester.getPaid())
console.log(tester.work())
