//var, let, const

var name = 'Andre';
console.log(name);
name = 'David';
console.log(name);

var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

//letters, numbers, _,$
//multiword = camel case,underscore,pascal case

var firstName = 'Andre';
var first_name = 'Andre';
var FirstName = 'André';
var firsname = 'nolohagacompa';

//let works the same as var
let name;
name = 'Andre';
console.log(name);
name = 'David';
console.log(name);

//const stands for constant, cannot reasing and leaving unassigned
const name = 'Andre'
console.log(name);

const person = {
    name: 'Andre',
    age: 30
}
person.name = 'Sofia';
person.age = 21;

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);