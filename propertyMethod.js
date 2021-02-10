const normalPerson={
    firstName: "ASM",
    lastName: "Rafid",
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(ammount){
        this.salary = this.salary - ammount;
        return this.salary;
    }
}
normalPerson.chargeBill(200); // chargebill e kata hbe ....
console.log(normalPerson.salary);


const heroPerson={
    firstName: "kamal",
    lastName: "Khan",
    salary: 10000
}

const hroPerson={
    firstName: "balam",
    lastName: "Khan",
    salary: 20000
}

const rowPerson={
    firstName: "sakib",
    lastName: "Khan",
    salary: 30000
}

// bind return hishab e akta function dibe ..... nutun akta method k nea ashe bind korte hbe ... 

const heroResult = normalPerson.chargeBill.bind(heroPerson);
heroResult(2000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

// call onno method thake k bair thake call korar jonno bebo har kora hoi ...j oect kcall korbo seta first e pass korte hbe er por parameter gula ,,, dea pathaite hbe ....  
normalPerson.chargeBill.call(heroPerson, 500);
normalPerson.chargeBill.call(heroPerson, 400);
console.log(heroPerson.salary);

/// apply prorthom parameter ta array hishab e pathano hbe..[ value gula dite hbe ....]..

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);


// method  call , bind , apply  
