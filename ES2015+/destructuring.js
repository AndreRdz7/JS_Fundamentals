// destructuring assignment

let a,b ;
[a,b] = [100, 200];
//rest pattern
[a, b, c, ...rest] = [100,200,300,400,500];

console.log(rest);

//with objs
({a,b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(a,b);
// rest pattern
({a,b,...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(rest);

// Array destructuring
const people = ['John','Beth','Mike'];
const [person1,person2,person3] = people;

//parse array returned from function
function getPeople(){
    return ['John','Beth','Mike'];
}

let p1,p2,p3;
[p1,p2,p3] = getPeople();
console.log(p1,p2,p3)

//obj destructuring
const person = {
    name: 'John Doe',
    age: 32, 
    city: 'Miami',
    gender: 'Male',
    sayHello: function(){
        console.log('Hello');
    }
}
/*
//old ES5
const name = person.name,
      age = person.age,
      city = person.city,
      gender = person.gender;
*/
// new ES6
const {name,age,city,gender,sayHello} = person;
console.log(name,age,city,gender);
sayHello();