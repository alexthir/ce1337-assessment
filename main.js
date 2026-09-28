const prompt = require("readline-sync")

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
}, 1000)