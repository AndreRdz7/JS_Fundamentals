//local and session storage
//this uses the reduced version of the index.html

//everything works fine, but conflicts with
//other functions, comment for disabling
/*
//set local storage item
localStorage.setItem('name','John');
localStorage.setItem('age','30');


//set session storage item, flushes at end of session
sessionStorage.setItem('name','Beth');

//remove from storaeg
// localStorage.removeItem('name');

//get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name);
console.log(age);

//clear local storage
localStorage.clear();
*/

document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;
    //we have to create an array of tasks to store many
    let tasks;
    if(localStorage.getItem('tasks') === null){
        //if not exists, create, if exists, retrive
        tasks = [];
    } else {
        tasks = JSON.parse(this.localStorage.getItem('tasks'));
    }

    //add task to array
    tasks.push(task);

    //set to local storage
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('Task saved !');
    
    e.preventDefault();
});

//we can access them via foreach, parsing it first
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
    console.log(task); 
});