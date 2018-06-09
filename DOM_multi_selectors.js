//document.getElementsByClassName
//global scope}

/* comment for disabling
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

//only inside the ul
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

works fine
*/

//get elements by tagname
/* comment for disabling
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

//convert html collection to array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li,index){
    console.log(li);
    li.textContent = `${index}: Hello`;
});
works fine
*/

//super query selector
//nodelist
const items = document.querySelectorAll('ul.collection li.collection-item');
//already an array
items.forEach(function(item,index){
    item.textContent = `${index}: Hello`;
}); 

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li,index){
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}

console.log(items);