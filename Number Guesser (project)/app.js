/*
Game function
-player must guess a number between a min an a max
-player gets a certain amount of guesses
-notify player of guesses remaining
-notify the payer of the correct answer if loose
-let player choose to play again
*/

//game values
let min = 1, 
    max = 10,
    winnigNum = 2, //will be random,
    gussesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//ASSIGN MIN AND MAX   
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    //validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }
    //check if won
    if(guess === winnigNum){
        //disable input
        guessInput.disabled = true;
        //change border
        guessInput.style.borderColor = 'green';
        //set message
        setMessage(`${winnigNum} is correct, YOU WIN!`,'green');
    } else {

    }
});

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}