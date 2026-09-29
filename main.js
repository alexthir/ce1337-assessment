const prompt = require("readline-sync")
// Prompt for the players to enter their names
let name1 = prompt.question("Player 1 please enter your name.")
console.log("Welcome "+ name1)
let name2 = prompt.question("Player 2 please enter your name.")

// Countdown for the player to answer within
console.log("Welcome "+ name2)
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

