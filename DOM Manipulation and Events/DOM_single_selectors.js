//document.getElementById()

console.log(document.getElementById('task-title'));

//get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

//change styling
taskTitle.style.background = '#333';
taskTitle.style.padding = '5px';
//delete
// taskTitle.style.display = 'none';

//change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//document.querySelector()
//works like jquery
//by id
console.log(document.querySelector('#task-title'));
//by class
console.log(document.querySelector('.card-title'));
//by tag
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello';
document.querySelector('li:nth-child(even)').style.background = '#cccs';