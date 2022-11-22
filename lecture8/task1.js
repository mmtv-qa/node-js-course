

const readline = require('readline-sync');


function endGame() {
    const userInput  = readline.question('Are you want to end game? (Y/n)::');
    switch (userInput.toLowerCase()) {
        case ('y'): {
            return  true
        } case ('n'): {
            return  false
        } default: {
            console.warn('Input y or n !!!')
            return endGame()
        }
}}


function getNumberFromInput() {
    let userInput = readline.question('Input digit (1-6) ::')
    if (parseInt(userInput) in [1, 2, 3, 4, 5, 6]) {
        return parseInt(userInput);
    }
    console.warn('Input a digit from 1 to 6 !!')
    return getNumberFromInput()
}


function guessNumber() {
    const expectedResult = Math.floor(6);
    const actualResult = getNumberFromInput()
    switch (expectedResult) {
        case actualResult: {
            console.log('You guessed the number')
            return 2;
        } case actualResult - 1 || actualResult + 1: {
            console.log('You guessed the number with one mistake')
            return 1;
        } default: {
            console.log('You did not guess the number')
            return 0
        }
    }
}




function gameGuess() {
    let grades = 0;
    let end = false;
    while (end === false) {
        grades += guessNumber();
        end = endGame();
    }
    console.info(`Your grades: ${grades}`)
}

gameGuess()
