//removing and repacing elements

//repaclements:
// we need to first create an element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//new text node
newHeading.appendChild(document.createTextNode('Task List'));
//get old heading
const oldHeading = document.getElementById('task-title');
//get parent
const cardAction = document.querySelector('.card-action');
//replace
cardAction.replaceChild(newHeading, oldHeading);

//remove:
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
//remove list items
lis[0].remove();
//or remove by child
list.removeChild(lis[3]);

//classes and attributes

//classes:
const firstLi = document.querySelector('li:first-child');
//we look inside the first li, the first child is de a tag (remove)
const link = firstLi.children[0];
let val;
//shows classes
val = link.className;
//dom token list
val = link.classList[0];
//add class
link.classList.add('test');
//delete class
link.classList.remove('test')

//attributes:
val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com');
link.setAttribute('title',)
val = link.hasAttribute('title','Google');
console.log(val);
val = link;
console.log(val);
link.removeAttribute('title');