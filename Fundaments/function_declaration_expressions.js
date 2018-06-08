//function declarations
function greet(){
    console.log('Hello');
}

greet();

function greet2(){
    return 'Hello';
}

console.log(greet2());

function greet3(firstName){
    return `Hello ${firstName}`;
}

console.log(greet3('Andre'));

//if no parameters sent, we can use defaults
function greet4(firstName = 'Pato'){
    return `Hello ${firstName}`;
}

console.log(greet4());

//function expresions

const square = function(x = 1){
    return x*x;
};

console.log(square(8));

//immidiatley invokable function expression
//module patterns
(function(){
    console.log('IIFE Running...');
})();

(function(name){
    console.log(`Hello ${name}`);
})('Andre');

//function inside of object
const todo = {
    add: function(){
        console.log('Add todo');
    },
    edit: function(id){
        console.log(`${id} to edit`);
    }
}

todo.add();
todo.edit(1)

todo.delete = function(){
    console.log('Delete todo...');
}