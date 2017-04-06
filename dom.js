// Hi/Lo Game Webpage
//
// Challenges:
//
// Create webpage that allows a user to play the Hi/lo game.
// Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
// If the users guess is too high or too low, the computer notifies them of that; and if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
// If the user has not guessed the secret number in seven tries, the user loses.
// Validate the users input. If the user puts a anything other than a number, tell the user they can only use numbers, can clear the input field.
// Allow the user to put there name in before the game starts. When the user has won the game, let the user know they have won, using their name.
var a = Math.floor((Math.random() * 100) + 1);
var count = 0;
function hiLo() {
  var number=document.getElementById("textBox").value
  if ((number > a) && count < 7){
    count++;
    console.log(count);
    console.log(number);
    document.getElementById("response").innerHTML="TOO HIGH"
  }
  else if ((number < a) && count < 7) {
    count++;
    console.log(count);
    console.log(number);
    document.getElementById("response").innerHTML="TOO LOW"
  }
  else if ((isNaN != parseInt(number))&& count<7) {
    document.getElementById("response").innerHTML="Only Numbers";
    count++
    console.log(count);
    console.log(number);
  }
  else if (count >=7){
    document.getElementById("response").innerHTML="GAME OVER"
    console.log(count);
    console.log(number);
  }
  if ((parseInt(number) == a) && count < 7){
    document.getElementById("response").innerHTML="!!!!!!!"
  }
}
