//object literals
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }
}

let val;

val = person;

console.log(val);

//get an specific value
val = person.firstName;
console.log(val);
//or
val = person['firstName'];
console.log(val);

val = person.age;
console.log(val);

val = person.hobbies[1];
console.log(val);

val = person.address.state;
console.log(val);

val = person.getBirthYear();
console.log(val);

//array of objects
const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 35}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
    
}