//ok for one object
/*
const brad = {
    name: 'Brad',
    age: 30
}
console.log(brad);
*/

//multiple instances
//constructor
function Person(name,dob){
    this.name = name;
    // scope = constructor - object
    // console.log(this);
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// scope = global - window
// console.log(this);


const brad = new Person('Brad','9/10/1981');
console.log(brad);
console.log(brad.calculateAge());



 