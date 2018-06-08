//type conversion

let val;
//num to string
val = 5;
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length);

//weird string
val = String(4+4);
console.log(val);
console.log(typeof val);
console.log(val.length);

//bool to string
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

//date to string
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

//array to string
val = String([1,2,3,4]);
console.log(val);
console.log(typeof val);
console.log(val.length);

//toString()
val = (5).toString;
val = (true).toString;

//string to number
val = Number('5');
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed());

//NaN case
val = Number('hello');
console.log(val);
console.log(typeof val);
console.log(val.length);

//parseInt() or parseFloat()
val = parseInt('100');
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//type cohersion
const val1 = '5';
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);