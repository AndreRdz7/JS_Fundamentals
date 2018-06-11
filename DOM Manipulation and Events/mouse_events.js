//mouse events
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


//they work fine, console clear
/*
//click
clearBtn.addEventListener('click',runEvent);
//double click
clearBtn.addEventListener('dblclick',runEvent);
//mousedown (click and hold)
clearBtn.addEventListener('mousedown',runEvent);
//mouseup (event fire upon stop clicking)
clearBtn.addEventListener('mouseup',runEvent);
//mouseenter
card.addEventListener('mouseenter',runEvent);
//mouseleave
card.addEventListener('mouseleave',runEvent);
//elements insde elements
//mouseover
card.addEventListener('mouseover',runEvent);
//mouseout
card.addEventListener('mouseouts',runEvent);
//mousemove
*/
card.addEventListener('mousemove',runEvent);

//event handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    val = (e.offsetY + e.offsetX) % 7;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${val})`
}