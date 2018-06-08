//if statements and comparator operators

let id = 100;

//equal to
if(id == 100){
    console.log('Correct');
} else {
    console.log('Incorrect');
}

//not equal to
if(id != 100){
    console.log('Correct');
} else {
    console.log('Incorrect');
}

//tree equal signs
//equal value and type
if(id === 100){
    console.log('Correct');
} else {
    console.log('Incorrect');
}

id = '100';

if(id === 100){
    console.log('Correct');
} else {
    console.log('Incorrect');
}

id = 100;

//unequal value and type
if(id !== 100){
    console.log('Correct');
} else {
    console.log('Incorrect');
}

id = '100';

if(id !== 100){
    console.log('Correct');
} else {
    console.log('Incorrect');
}


//check if exists (incorrect way)
if(id){
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}

//check if exists (correct way)
if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}


//greater or less than <
if( id > 200){
    console.log('Correct');
} else {
    console.log('Incorect');
}

//if else
const color = 'red';

if(color === 'red'){
    console.log('Color is red');
} else if(color === 'blue'){
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue');
}

//logical operators
const name = 'Steve';
const age = 20;

//and
if (age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19 ){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

//or
if (age > 65 || age < 16){
    console.log(`Can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

//ternary
id = 100;
console.log(id === 100 ? 'Correct' : 'Incorrect');

//brackets are optional
if(id === 100)
    console.log('Correct');
else    
    console.log('Incorrect');