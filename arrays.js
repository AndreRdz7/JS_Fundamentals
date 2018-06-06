//usage of arrays
//create it
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

console.log(numbers);
console.log(numbers2);
console.log(fruit);
console.log(mixed);

let val;

//get array length
val = numbers.length;
console.log(val);
//check if is an array
val = Array.isArray(mixed);
console.log(val);
//get a single value
val = numbers[3];
console.log(val);
//insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(36);
console.log(val);

//mutating arrays
//add on to end
numbers.push(250);
console.log(numbers);
//add on to end
numbers.unshift(120);
console.log(numbers);
//take off from end
numbers.pop();
console.log(numbers);
//take off from front
numbers.shift()
console.log(numbers);
//splice values
numbers.splice(1,3);
console.log(numbers);
//reverse array
numbers.reverse();
console.log(numbers);
//concatenate array
val = numbers.concat(numbers2);
console.log(val);
//sorting arrays (not very effective)
val = fruit.sort()
console.log(val);
val = numbers.sort();
console.log(val);

//sorting using the compare function (low to high)
val = numbers.sort(function(x,y){
    return x - y;
});
console.log(val);

//sorting using the compare function (high to low)
val = numbers.sort(function(x,y){
    return y - x;
});
console.log(val);

//find
function under50(num){
    return num < 50;
}
val = numbers.find(under50);