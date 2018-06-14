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
    winningNum = 2, //will be random,
    guessesLeft = 3;

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
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
        //wrong number
        guessesLeft --;
        //GO lost
        if(guessesLeft === 0){
            gameOver(false,`Game Over, you lost. The correct number was ${winningNum}`)
        } else {
            gameOver(false,`${guess} is not correct, ${guessesLeft} guesses left`);
        }
    }
});

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable input
    guessInput.disabled = true;
    //change border
    guessInput.style.borderColor = color;
    //set text color
    message.style.color = color;
    //set message
    setMessage(msg);
}