//creating element and iserting it in the DOM

//create the element
const li = document.createElement('li');
//add class
li.className = 'collection-item';
//add id
li.id = 'new-item';
//add attr
li.setAttribute('title','New Item');
//create text node and append
li.appendChild(document.createTextNode('Hello World'));
//create new link element
const link = document.createElement('a');
//add classes
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//append link to li
li.appendChild(link);
//apend li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);