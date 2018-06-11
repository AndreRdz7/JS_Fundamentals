//event bubbling stads for, an action performed in a child
//it happens in the parent and so on an so forth
//delegation stands for, an event in the parent goes to the
//right child to perform the action

//event bubbling
document.querySelector('.card-title').addEventListener('click',
function(){
    console.log('card title');
}); 

document.querySelector('.card-content').addEventListener('click',
function(){
    console.log('card content');
}); 

document.querySelector('.card').addEventListener('click',
function(){
    console.log('card');
}); 

document.querySelector('.col').addEventListener('click',
function(){
    console.log('col');
}); 

//event delegation

//this only works in the first element
/*
const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click',deleteItem);
*/

//this triggers by clicking anywhere
document.body.addEventListener('click',deleteItem);

function deleteItem(e){
    //this works if all elements share same classes, which is the most common thing to happen
    /*
    console.log(e.target);
    if(e.target.parentElement.className === 'delete-item secondary-content'){
        console.log('delete item');
    }
    */
   //best way
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        //we are going to delete the parent of the a tag
        e.target.parentElement.parentElement.remove();
    }
}