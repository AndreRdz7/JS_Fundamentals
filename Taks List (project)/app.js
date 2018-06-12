//define UI vars
//# id . class
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

//load all event listeners
loadEventListeners();

function loadEventListeners(){
    //add task event
    form.addEventListener('submit',addTask);
    //event delegation for multiple deleting
    taskList.addEventListener('click',removeTask);
    //delete all tasks
    clearBtn.addEventListener('click',clearTasks);
    //filter tasks
    filter.addEventListener('keyup',filterTasks);
}

//add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
    //create li
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link elemnt
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append link
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
    //clear input
    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e){
    //target delete item
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure it\'s done ?')){
            e.target.parentElement.parentElement.remove();
        } 
    }
}

function clearTasks(e){
    // option 1
    // taskList.innerHTML = '';
    // option 2 (faster)
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
    function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}