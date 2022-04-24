/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount, arrayGuesses;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
    do{

        intMin = prompt("Choose the lowest number in your guessing range (not less than zero): ", 0); //prompts user for their lower bound

    }while(isNaN(intMin) || intMin < 0) //validation









/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

do{

    intMax = prompt("Choose the highest number in your guessing range (must be 2 or more than your minimum): "); //prompts user for upper bound

}while(isNaN(intMax) || (intMax < (intMin - 2))) //validation







/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt(Math.floor(Math.random() * intMax));


// set the loop counter
intCount = 1;
arrayGuesses = [];



/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
function getGuess(){
    do{

        intGuess = prompt("Enter your guess: "); //prompt user for guess

    }while(isNaN(intGuess)) //validation
}
getGuess();





/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
while(intGuess != intRandom){
    if(intGuess > intRandom){
        alert("Your guess was too high!");
    }
    else if(intGuess < intRandom){
        alert("Your guess was too low.");
    }
    intCount++;
    getGuess();
}
 
 
 
 
 
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");


window.onload