
const sayHello1 = function(){
    console.log('Hello');
}



//to arrow
const sayHello2 = () => {
    console.log('Hello');
}


//super compact
const sayHello = () => console.log('Hello');
//return in one line
const sayBye = () => 'Bye';

//for object literals
const sayHello3 = () => ({msg: 'Hello'});

//with 1 parameter
const sayHello4 = name => console.log(`Hello ${name}`);

//with 2+ parameters
const sayHello5 = (firstName,lastName) => console.log(`Hello ${firstName} ${lastName}`);

//arrow functions as callbacks
/*
const users = ['Nathan','John','William'];
const nameLenghts = users.map(function(name){
    return name.length;
});
*/
//to arrow
const users = ['Nathan','John','William'];
const nameLenghts = users.map(name => name.length); 

console.log(nameLenghts);

sayHello4('World');
sayHello5('Andre','Rodriguez');
sayHello1();
console.log(sayHello3());
console.log(sayBye());
