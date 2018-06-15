//prototypes

//object.prototype
//person.prototype
function Person(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    /*
    commenting for disabling in order to use proto

    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    */
}

const john = new Person('john','doe','8/9/1990');
const mary = new Person('mary','johnson','20/03/1990');
console.log(mary);
/*
first __proto__ is the person.prototype
second __proto__ is the object.prototype
the obj.proto includes constructors, tostring,valueof
since the calculated age is generic, it should not be included
in the constructor, it will be better if we put it into the 
prototype
*/

//calulated age moved into the prototype
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

console.log(john.calculateAge());
console.log(john.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
//since its in the proto, is not a property itself
console.log(mary.hasOwnProperty('getFullName'));