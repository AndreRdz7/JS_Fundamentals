//numbers and math object
const num1 = 100;
const num2 = 50;
let val;

//simple math
val = num1 + num2;
console.log(val);
val = num1 * num2;
console.log(val);
val = num1 - num2;
console.log(val);
val = num1 / num2;
console.log(val);
val = num1 % num2;
console.log(val);

//math object
val = Math.PI;
console.log(val);
val = Math.E;
console.log(val);

//rounding, ceil and floor
val = Math.round(2.8);
console.log(val);
val = Math.round(2.4);
console.log(val);
val = Math.ceil(2.4);
console.log(val);
val = Math.floor(2.8);
console.log(val);

//math op
val = Math.sqrt(2);
console.log(val);
val = Math.abs(-2.4);
console.log(val);
val = Math.pow(2,8);
console.log(val);
val = Math.min(2,1,-3,5,3,3,1);
console.log(val);
val = Math.max(2,4,6,7,3,0);
console.log(val);
//rand 1 to 20
val = Math.floor(Math.random() * 20 + 1);
console.log(val);