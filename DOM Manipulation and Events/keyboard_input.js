//keyboard and input events
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
//to use this, commet the materialize css
const select = document.querySelector('select');

//clear input
taskInput.value = '';

//commenting to check events in the input, not the form
//form.addEventListener('submit',runEvent);

//keydown
// taskInput.addEventListener('keydown',runEvent);
//keyup *best*
// taskInput.addEventListener('keyup',runEvent);
// keypress
// taskInput.addEventListener('keypress',runEvent);
//focus (click inside input)
// taskInput.addEventListener('focus',runEvent);
//blur (oposite of focus)
// taskInput.addEventListener('blur',runEvent);
//cut (ctrl + x)
// taskInput.addEventListener('cut',runEvent);
//paste
// taskInput.addEventListener('paste',runEvent);
//input event
// taskInput.addEventListener('input',runEvent);
//change
// select.addEventListener('change',runEvent);



function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    heading.innerText = e.target.value;
    //commenting to check events in the input, not the form
    /*
    //get input value
    console.log(taskInput.value);
    e.preventDefault();
    */
}