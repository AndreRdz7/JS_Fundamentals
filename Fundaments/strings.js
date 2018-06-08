const fName = 'Pato';
const lName = 'Rdz';
const age = 21;
const str = 'Hello there my name is Andre';
const tags = 'web design, web dev, programming'

let val;


val = fName + lName;

//concat
val = fName + ' ' + lName
console.log(val);
//append
val = 'Andre ';
val += 'Rodriguez';
console.log(val);

val = 'Hello, my name is ' + fName + ' and I am' + age;
console.log(val);

//scaping strings
val = "That's awesome :D, I can't wait";
console.log(val);

val ='That\'s awesome :D, I can\'t wait';
console.log(val);
 
//lenght
val = fName.length;
console.log(val);

//concat method
val = fName.concat(' ',lName);
console.log(val);

//uppercase/lowercase
val = fName.toUpperCase();
console.log(val);
val = fName.toLowerCase();
console.log(val);

//arrays
val = fName[0]; //first letter
console.log(val);

//indexof()
val = fName.indexOf('a');
console.log(val);
val = fName.lastIndexOf('o');
console.log(val);
 
//charAt()
val = fName.charAt('2');
console.log(val);

//last char
val = fName.charAt(fName.length - 1);
console.log(val);
//substring
val = fName.substring(0,2);
console.log(val);

//slice
val = fName.slice(0,2);
console.log(val);

val = fName.slice(-3);
console.log(val);

//split
val = str.split(' ');
console.log(val);//val is an array

val = tags.split(',');
console.log(val);

//replace
val = str.replace('Andre','David');
console.log(val);

//includes
val = str.includes('Pato');
console.log(val);