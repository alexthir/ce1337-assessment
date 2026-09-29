const prompt = require("readline-sync")
// Prompt for the players to enter their names
let name1 = prompt.question("Player 1 please enter your name.")
console.log("Welcome "+ name1)
let name2 = prompt.question("Player 2 please enter your name.")
console.log("Welcome "+ name2)
// Hear the rules
let data = prompt.question("Would you like to be told the rules of the game?");

if(data == "yes" || "Yes") {
    console.log("For every correct answer your point score will increase by one. If the answer is not spelt correctly you will lose the point.You have thirty seconds to give an answer. If the timer runs out before you have given a correct answer,then the point is lost. Whichever player has the most points at the end wins!");
}else{
    console.log("Ok let's begin");
}


// Countdown for the player to answer within
function countdown(){
let time = 30 
    const timer = setInterval(() =>{
        if(time === 30){
    console.log("You have 30 seconds to answer starting now")}
        time--;
         if(time === 20){
    console.log("20 seconds left")}
     if(time === 10){
    console.log("10 seconds left")}
    if(time === 3){
    console.log("3")}
     if(time === 2){
    console.log("2")}
     if(time === 1){
    console.log("1")}
   if(time === 0){
    console.log("Your time is up!")
    clearInterval(timer)
}
}, 1000)}
// starting the countdown
let cdstart = prompt.question("Press 1 to run countdown")
if (cdstart==1){
countdown()
}

