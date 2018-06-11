//event listeners and event object

//add event in clear tasks button
//using a function
/*
document.querySelector('.clear-tasks').addEventListener('click',
function(e){
    //it only flashes in the console for micro seconds
    console.log('hello world');
    //prevent default link behaviour
    // e.preventDefault();
});
*/

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
    //console.log('Clicked');
    let val = e;
    console.log(val);
    //target is the most importan part of the event
    //in this case, is the a tag
    //event target element
    val = e.target;
    console.log(val);
    val = e.target.id;
    console.log(val);
    val = e.target.className;
    console.log(val);
    val = e.target.classList;
    console.log(val);
    //change text on click
    e.target.innerText = 'Hello';
    
    //event type
    val = e.type;
    console.log(val);

    //timestamp
    val = e.timeStamp;
    console.log(val);

    //coord event relative to the window
    val = e.clientY;
    console.log(val);
    val = e.clientX;
    console.log(val);

    //coord relative to element
    val = e.offSetY;
    console.log(val);
}