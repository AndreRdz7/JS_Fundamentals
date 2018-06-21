
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

//with parameters
const sayHello4 = (name) => console.log(`Hello ${name}`);


sayHello4('World');
sayHello1();
console.log(sayHello3());
console.log(sayBye());
