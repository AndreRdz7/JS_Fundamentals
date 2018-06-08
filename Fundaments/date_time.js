//dates and time
let val;

const today = new Date();

val = today ;
console.log(val);
console.log(typeof val);

val = today.toString()
console.log(val);
console.log(typeof val);
//valid
let birthday = new Date('9-10-1981 11:25:00');
console.log(birthday);
//invaluid
birthday = new Date('9 September 1981');
console.log(birthday);
//valid
birthday = new Date('9/10/1981');
console.log(birthday);

val = today.getMonth();
console.log(val);
val = today.getDate();
console.log(val);
val = today.getDay();
console.log(val);
val = today.getFullYear();
console.log(val);
val = today.getMinutes();
console.log(val);
val = today.getMilliseconds();
console.log(val);
//seconds since date to today
val = today.getTime();
console.log(val);

birthday.setMonth(2);
console.log(birthday);

birthday.setDate(12);
console.log(birthday);