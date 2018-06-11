//traversing the DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;

console.log(val);

val = list;
console.log(val);

//get child node
//node list
val = list.childNodes;
console.log(val);
val = list.childNodes[0];
console.log(val);
val = list.childNodes[0].nodeName;
console.log(val);
val = list.childNodes[1].nodeType;
console.log(val);

/*
1 - Element
2 - Attribute (deprecated)
3 - Text Node
8 - Comment
9 - Document itself
10 - Doctype
*/


//the \n is equivalent to the text in the count of childNodes

//get children nodes
//html collection
val = list.children;
console.log(val);
val = list.children[0];
console.log(val);
list.children[1].textContent = 'Hello';
//children of children
val = list.children[3].children;
console.log(val);
val = list.children[3].children[0].id = 'test-link';
console.log(val);

//includes text
val = list.firstChild;
console.log(val);

//not includes text
val = list.firstElementChild;
console.log(val);

//not includes text
val = list.childElementCount;
console.log(val);

//get parent
val = listItem.parentNode;
console.log(val);

val = listItem.parentElement;
console.log(val);

//parent of parent
val = listItem.parentElement.parentElement;
console.log(val);

//siblings
val = listItem.nextSibling;
console.log(val);
val = listItem.nextElementSibling;
console.log(val);
val = listItem.nextElementSibling.nextElementSibling;
console.log(val);

val = listItem.previousElementSibling;
console.log(val);