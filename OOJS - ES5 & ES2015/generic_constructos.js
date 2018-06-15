//built in constructors

//string
const name1 = 'Jeff';
const name2 = new String('Jeff');
name2.foo = 'bar';
console.log(name1);
console.log(name2);
console.log(typeof name2);

//not the same type
if(name2 === 'Jeff'){
    console.log('yes');
} else {
    console.log('no');
}

//number
const num1 = 5;
const num2 = new Number(5);

//booleans
const bool1 = true;
const bool2 = new Boolean(true);

//functions
const getSum1 = function(x,y){
    return x + y;
}
console.log(getSum1(1,1));
const getSum2 = new Function('x','y','return 1 + 1');
console.log(getSum2(1,1));

//objects
const john1 = {name:"john"};
const john2 = new Object({name:"john"});

//arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

//regex
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
console.log(re2);