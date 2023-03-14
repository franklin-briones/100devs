// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink=" Beer ".trim()
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multWords="This is a string of multiple words"
if (multWords.includes("apple")) {
    alert('This string contains the word apple in it!');
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps (){
    let possible=Math.random()*3
    if (possible<=1){
        return "rock";
    }
    else if (possible <=2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRIPS(playerChoice){
    let AIChoice=rps();
    let userChoice=playerChoice;
    if (userChoice===AIChoice){
        console.log("You tied!")
    }
    else if (userChoice==="rock" && (AIChoice==="scissors" || AIChoice==="paper")) {
        console.log(`You chose ${userChoice} and beat ${AIChoice}`)
    }
    else if (userChoice==="scissors" && AIChoice==="paper") {
        console.log(`You chose ${userChoice} and beat ${AIChoice}`)
    }
    else {
        console.log(`You chose ${userChoice} and lost to ${AIChoice}`)
    }

}
playRIPS('rock')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playMultiple(aryChoices){
    aryChoices.forEach(userChoice => {
        playRIPS(userChoice)
    });
}

playMultiple(['rock','paper','scissors','rock','paper','scissors','rock','paper','scissors'])