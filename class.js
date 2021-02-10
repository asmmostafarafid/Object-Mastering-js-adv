class Person{
    constructor(firstName, lastName, salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }
}

// new keyword dea class thake akta new object bana no  hoi ........ 

const getInfo= new Person('asm','mostafa', 20000);
console.log(getInfo);

const frendlyPerson = new Person('hafha','buyaf', 5000);
console.log(frendlyPerson);

 // function e new use kora jai 
// function person1(firstName, lastName, salary){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.salary=salary;
// }
// const getFullInfo = new person1('uhguag','huhgui',45445);
// console.log(getFullInfo);






