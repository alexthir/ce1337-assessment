const prompt = require("readline-sync");

let data = prompt.question("Would you like to be told the rules of the game?");

if(data == "yes" || "Yes") {
    console.log("For every correct answer your point score will increase by one. If the answer is not spelt correctly you will lose the point.You have thirty seconds to give an answer. If the timer runs out before you have given a correct answer,then the point is lost. Whichever player has the most points at the end wins!");
}else{
    console.log("Ok let's begin");
}
