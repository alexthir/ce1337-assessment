const prompt = require("readline-sync");

// Declaring points per player
let totalPoints = 0;
let totalPoints2 = 0;

// Declaring objects of questions and answers
const questions = {
    Tv:[
        {
            question: "What is the name of the school in Harry Potter?",
            choices: ["Durmstrang","Hogwarts", "Ministry of Magic", "Mordor"],
            answer: "Hogwarts",
            number: 2
        },
        {
            question: "What tv series features Walter White and Jesse Pinkman?",
            choices: ["The Walking Dead", "Attack on Titan", "Breaking Bad", "Modern family"],
            answer: "Breaking Bad",
            number: 3
        },
        {
            question: "What franchise has the main character who has the powers of a spider?",
            choices: ["Spider-Man", "Ant-Man", "John Wick", "Batman"],
            answer: "Spider-Man",
            number: 1
        },
        {
            question: "what year is the movie blade runner 1982 set in?",
            choices: ["1982", "2019", "2028", "2077"],
            answer: "2019",
            number: 2
        },
        {
            question: "Which studio Ghibli features a girl named Chihiro working in a bath house for spirits?",
            choices: ["Washing Spirits", "Spirited Away", "Cleaning Spirits", "Ghost House"],
            answer: "Spirited Away",
            number: 2
        },
        {
            question: "What score did Elle Woods get on her LSAT in Legally Blonde?",
            choices: ["179", "178", "172", "192"],
            answer: "179",
            number: 1
        },
        {
            question: "Who directed the 2017 movie Get Out?",
            choices: ["Jordan Peele", "Christopher Nolan", "Steven Spielberg", "James Cameron"],
            answer: "Jordan Peele",
            number: 1
        },
        {
            question: "Which movie does not feature Jonah Hill?",
            choices: ["Superbad", "Fight Club", "21 Jump Street", "The Wolf of Wall Street"],
            answer: "Fight Club",
            number: 2
        },
        {
            question: "What is the name of Jessie's horse in Toy Story 2?",
            choices: ["Buckshot", "Slinky", "Woody", "Bullseye"],
            answer: "Bullseye",
            number: 4
        }
    ],

    Geography:[
        {
            question: "What is the capital of Mongolia?",
            choices: ["Venice", "Ulaanbaatar", "Erdenet", "Paris"],
            answer: "Ulaanbaatar",
            number: 2
        },
        {
            question: "How many continents are there?",
            choices: ["5", "6", "7", "8"],
            answer: "7",
            number: 3
        },
        {
            question: "Which is the largest desert in the world?",
            choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
            answer: "Antarctic Desert",
            number: 4
        },
        {
            question: "What is the smallest country in the world?",
            choices: ["Scotland", "Wales", "Greenland", "Vatican City"],
            answer: "Vatican City",
            number: 4
        },
        {
            question: "Which country has the highest population?",
            choices: ["China","India", "Pakistan", "Japan"],
            answer: "India",
            number: 2
        },
        {
            question: "What is the longest river in the world?",
            choices: ["River Nile", "River Clyde", "River Amazon", "River Yenisei"],
            answer: "River Nile",
            number: 1
        },
        {
            question: "What is the capital of Canada?",
            choices: ["Ontario", "Vancouver","Ottawa", "Quebec"],
            answer: "Ottawa",
            number: 3
        },
        {
            question: "What is the only country without any rivers?",
            choices: ["Saudi Arabia", "Dubai", "Ethiopia", "Nigeria"],
            answer: "Saudi Arabia",
            number: 1
        },
        {
            question: "Which country has more pyramids than Egypt?",
            choices: ["Morrocco", "Syria", "Libya", "Sudan"],
            answer: "Sudan",
            number: 4
        },
        {
            question: "What is the capital of Turkey?",
            choices: ["Ankara", "Istanbul", "Bursa", "Adana"],
            answer: "Ankara",
            number: 1
        },
        {
            question: "Which country has the largest coral reef system in the world?",
            choices: ["Madagascar", "New Zealand", "Australia", "USA"],
            answer: "Australia",
            number: 3
        },
        {
            question: "Which country has the most time zones?",
            choices: ["Germany", "France", "United Kingdom", "Switzerland"],
            answer: "France",
            number: 2
        },
        {
            question: "Which country is both an island and a continent?",
            choices: ["Africa", "America", "Europe", "Australia"],
            answer: "Australia",
            number: 4
        }
    ],

    History:[
        {
            question: "who was the main power in the axis power during WW2?",
            choices: ["Japan", "Germany", "America", "Italy"],
            answer: "Germany",
            number: 2
        },
        {
            question: "In what year did World War 2 end?",
            choices: ["1939", "1912", "1984", "1945"],
            answer: "1945",
            number: 4
        },
        {
            question: "What was the Bubonic Plague that swept through Europe in the 14th Century often called?",
            choices: ["Bubonic virus", "Bluetooth disease", "The Black Death", "Black Disease"],
            answer: "The Black Death",
            number: 3
        },
        {
            question: "What year did the attack on Pearl Harbour occur?",
            choices: ["1941", "1945", "1921", "1939"],
            answer: "1941",
            number: 1
        },
        {
            question: "Who was the first person to walk on the moon?",
            choices: ["Buzz Aldrin", "John Glenn", "Alan Shepard", "Neil Armstrong"],
            answer: "Neil Armstrong",
            number: 4
        },
        {
            question: "Who was the first person in space?",
            choices: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Sally Ride"],
            answer: "Yuri Gagarin",
            number: 1
        },
        {
            question: "How many flights were hijacked during the September 11th attacks in 2001?",
            choices: ["4", "3", "2", "5"],
            answer: "4",
            number: 1
        },
        {
            question: "Who was the artist famous for painting the Mona Lisa?",
            choices: ["Leonardo Dicaprio","Leonardo da Vinci", "Vincent Van Gogh", "Banksy"],
            answer: "Leonardo da Vinci",
            number: 2
        },
        {
            question: "What is the Greek God of the Sea?",
            choices: ["Zeus", "Aphrodite", "Thor", "Poseidon"],
            answer: "Poseidon",
            number: 4
        }
    ],

    Music:[
        {
            question: "How many members were there in The Spice Girls?",
            choices: ["4", "3", "5", "6"],
            answer: "5",
            number: 3
        },
        {
            question: "What is the highest selling album of all time?",
            choices: ["AM","Thriller", "The Fame", "Legacy"],
            answer: "Thriller",
            number: 2
        },
        {
            question: "Who sang Rolling in the Deep?",
            choices: ["Adele", "Beyonce", "Lady Gaga", "Rihanna"],
            answer: "Adele",
            number: 1
        },
        {
            question: "What musical term means to gradually get louder?",
            choices: [ "Alto", "Crescendo", "Baritone", "Tenor"],
            answer: "Crescendo",
            number: 2
        },
        {
            question: "What band performed Bohemian Rhapsody?",
            choices: ["Queen", "The Beatles", "ACDC", "Led Zepplin"],
            answer: "Queen",
            number: 1
        },
        {
            question: "Which rapper's real name is Marshall Mathers?",
            choices: ["Tupac", "Biggie Smalls", "Dr Dre", "Eminem"],
            answer: "Eminem",
            number: 4
        },
        {
            question: "Which famous band featured WILL.I.AM?",
            choices: ["Oasis", "Daftpunk", "The Black Eyed Peas", "The Pussycat Dolls"],
            answer: "The Black Eyed Peas",
            number: 3
        },
        {
            question: "Which artist has won the most Grammy Awards of all time?",
            choices: ["Cheryl Cole", "Lady Gaga", "Mariah Carey", "Beyonce"],
            answer: "Beyonce",
            number: 4
        },
        {
            question: "Which band sang Stayin' Alive in 1977?",
            choices: ["Bee gees", "Queen", "Led Zepplin", "Metallica"],
            answer: "Bee gees",
            number: 1
        },
        {
            question: "Who sang Umbrella in 2007?",
            choices: ["Beyonce", "Rihanna", "Katy Perry", "Taylor Swift"],
            answer: "Rihanna",
            number: 2
        },
        {
            question: "Which song spent the most weeks at number one in the 2010s?",
            choices: ["Shape of You", "We Found Love", "Old Town Road", "Uptown Funk"],
            answer: "Old Town Road",
            number: 3
        },
        {
            question: "What was Lady Gaga's debut single?",
            choices: ["Just Dance", "Telephone", "Umbrella", "Born This Way"],
            answer: "Just Dance",
            number: 1
        },
        {
            question: "What spy movie did Elton john appear in?",
            choices: ["Golden Eye", "Johnny English", "Kingsmen", "James bond"],
            answer: "Kingsmen",
            number: 3
        },
        {
            question: "What part of the UK was the group Franz Ferdinand founded in?",
            choices: ["England", "Ireland", "Wales", "Scotland"],
            answer: "Scotland",
            number: 4
        }
    ],

    Hard:[
        {
            question: "What chess piece is the only one not to move in a straight line",
            choices: ["Queen", "Bishop", "Knight", "King"],
            answer: "Knight",
            number: 3
        },
        {
            question: "What is the strongest muscle in the human body",
            choices: ["Jaw", "Thigh", "Tongue", "Forearms"],
            answer: "Jaw",
            number: 1
        },
        {
            question: "Which language is the most natively spoken",
            choices: ["Indian", "Mandarin", "English", "Spanish"],
            answer: "Mandarin",
            number: 2
        },
        {
            question: "What does ram mean in terms of computers",
            choices: ["Reboot Accessible Memory", "Random Access Memory", "Redo Applicable Memory", "Research Access Memory"],
            answer: "Random Access Memory",
            number: 2
        }
    ]
}


// Gathering player names
let name1 = prompt.question("Player 1 please enter your name: ")
console.log("Welcome "+ name1 + ", You are Player 1.")
let name2 = prompt.question("Player 2 please enter your name: ")
console.log("Welcome "+ name2 + ", You are Player 2.")

// Introducing players to the game and rules
console.log("===== QUIZ ====")
console.log("Welcome to the quiz Player 1 and Player 2")

let rules 
console.log("Would you like to be told the rules of the game?");

// While the answer isnt yes or no it asks for the user to answer again
while(rules != "yes" || rules !="Yes" || rules !="YES" || rules !="no" || rules !="No" || rules !="NO" ){
    rules = prompt.question("Please enter Yes or No: ");
    if(rules == "yes" || rules =="Yes" || rules =="YES"){
        console.log("=====RULES=====");
        console.log("1.For every correct answer your point score will increase by one, and hard questions give 2 points.\n2.You have thirty seconds to give an answer.\n3.If the timer runs out before you have given a correct answer,then the point is lost.\n4.When a topic is picked it cannot be picked again, even for the other player.\n6.Whichever player has the most points at the end wins!");
        break;
        }else if(rules == "no" || rules =="No" || rules =="NO"){
            console.log("Let the game begin!");
            break;
    }
}

// Starting the game
console.log("=====================================================")
console.log("You can choose one of these topics: 1.Tv 2.Geography 3.History 4.Music ");

// Asking Player 1 for their first topic + letting them choose with a number
let topic = prompt.question(name1 + " please choose a topic: ");

if (topic == "1"){
    topic = "Tv";
}else if(topic == "2"){
    topic = "Geography";
}else if(topic == "3"){
    topic = "History";
}else if(topic == "4"){
    topic = "Music";
}

// Making it impossible to pick hard as their topic
while(topic == "Hard"){
    topic = prompt.question("That topic is only for the end! Please choose another: ");
}

// If Player 1 enters a topic that isnt valid then it will loop until the user picks a valid topic
while(topic != "Tv" && topic != "Geography" && topic != "History" && topic != "Music"){
    topic = prompt.question(name1 + " please choose a valid topic: ");
}

// Asking Player 1 to answer random questions based on the topic they chose
for (let i =0; i<3; i++){
    let randomIndex = Math.floor(Math.random() * questions[topic].length);
    let randomQuestion = questions[topic][randomIndex];
    console.log(name1 + " your question is: " + randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer || answer == randomQuestion.number){
        console.log("Correct!");
        totalPoints++;
    } else {
        console.log("Incorrect! The answer was: " + randomQuestion.answer);
    }
    // Removing the question so it can't be selected again
    questions[topic].splice(randomIndex, 1);
}

// Showing Player 1 what topics they can use for their second topic
let questionAvailability = ["Tv", "Geography", "History", "Music"];

for(i=0;i<questionAvailability.length; i++){
    if (topic == questionAvailability[i]){
        questionAvailability.splice(i, 1);
    }
}
let availabilitySentence = questionAvailability.join(",");
console.log("\nThe topics that are available are: " + availabilitySentence)


// Asking Player 1 for their second topic + letting them choose with a number
let topic2 = prompt.question(name1 + " please choose a different topic: ");

if (topic2 == "1"){
    topic2 = "Tv";
}else if(topic2 == "2"){
    topic2 = "Geography";
}else if(topic2 == "3"){
    topic2 = "History";
}else if(topic2 == "4"){
    topic2 = "Music";
}


// Making it impossible to pick hard as their topic
while(topic2 == "Hard"){
    topic2 = prompt.question("That topic is only for the end! Please choose another: ");
}

// If Player 1 enters a topic that isnt valid then it will loop until the user picks a valid topic
while(topic2 != "Tv" && topic2 != "Geography" && topic2 != "History" && topic2 != "Music"){
    topic2 = prompt.question(name1 + " please choose a valid topic: ");
}

// Making the user pick another topic if they pick a topic they have already done
while(topic2 == topic){ 
    topic2 = prompt.question("Please choose a another topic that isn't " + topic + " : ");
}

// Asking Player 1 to answer random questions based on the second topic they chose
for (let i =0; i<3; i++){
    let randomIndex = Math.floor(Math.random() * questions[topic2].length);
    let randomQuestion = questions[topic2][randomIndex];
    console.log(name1 + " your question is: " + randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer || answer == randomQuestion.number){
        console.log("Correct!");
        totalPoints++;
    } else {
        console.log("Incorrect! The answer was: " + randomQuestion.answer);
    }
    // Removing the question so it can't be selected again
    questions[topic2].splice(randomIndex, 1);
}

// ------------------------------
// Showing Player 2 what topics they can use for their first topic 
for(i=0;i<questionAvailability.length; i++){
    if (topic2 == questionAvailability[i]){
        questionAvailability.splice(i, 1);
    }
}

availabilitySentence = questionAvailability.join(",");
console.log("\nThe topics that are available are: " + availabilitySentence)

// Asking Player 2 for their first topic + letting them choose with a number
console.log("=====================================================")
console.log(name2 + " It is your turn now!")
let topic3 = prompt.question(name2 + " please choose a topic: ");

if (topic3 == "1"){
    topic3 = "Tv";
}else if(topic3 == "2"){
    topic3 = "Geography";
}else if(topic3 == "3"){
    topic3 = "History";
}else if(topic3 == "4"){
    topic3 = "Music";
}


// Making it impossible to pick hard as their topic
while(topic3 == "Hard"){
    topic3 = prompt.question("That topic is only for the end! Please choose another: ");
}

// If Player 2 enters a topic that isnt valid then it will loop until the user picks a valid topic
while(topic3 != "Tv" && topic3 != "Geography" && topic3 != "History" && topic3 != "Music"){
    topic3 = prompt.question(name1 + " please choose a valid topic: ");
}

// Making the user pick another topic if they pick a topic they have already done
while(topic3 == topic || topic3 == topic2){ 
    topic3 = prompt.question("Please choose a another topic that isn't " + topic + " or " + topic2 + ": ");
}

// Asking Player 2 to answer random questions based on the second topic they chose
for (let i =0; i<3; i++){
    let randomIndex = Math.floor(Math.random() * questions[topic3].length);
    let randomQuestion = questions[topic3][randomIndex];
    console.log(name2 + " your question is: " + randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer || answer == randomQuestion.number){
        console.log("Correct!");
        totalPoints2++;
    } else {
        console.log("Incorrect! The answer was: " + randomQuestion.answer);
    }
    // Removing the question so it can't be selected again
    questions[topic3].splice(randomIndex, 1);
}

// Showing Player 2 what topics they can use for their second topic
for(i=0;i<questionAvailability.length; i++){
    if (topic3 == questionAvailability[i]){
        questionAvailability.splice(i, 1);
    }
}

availabilitySentence = questionAvailability.join(",");
console.log("\nThe topics that are available are: " + availabilitySentence)

// Asking Player 2 for their second topic
let topic4 = prompt.question(name2 + " please choose another topic: ");

if (topic4 == "1"){
    topic4 = "Tv";
}else if(topic4 == "2"){
    topic4 = "Geography";
}else if(topic4 == "3"){
    topic4 = "History";
}else if(topic4 == "4"){
    topic4 = "Music";
}

// Making it impossible to pick hard as their topic
while(topic4 == "Hard"){
    topic4 = prompt.question("That topic is only for the end! Please choose another: ");
}

// If Player 2 enters a topic that isnt valid then it will loop until the user picks a valid topic
while(topic4 != "Tv" && topic4 != "Geography" && topic4 != "History" && topic4 != "Music"){
    topic4 = prompt.question(name1 + " please choose a valid topic: ");
}

// Making the user pick another topic if they pick a topic they have already done
while(topic4 == topic || topic4 == topic2 || topic4 == topic3){ 
    topic4 = prompt.question("Please choose a another topic that isn't " + topic + ", " + topic2 + " or " + topic3 + ": ");
}

// Asking Player 2 to answer random questions based on the second topic they chose
for (let i =0; i<3; i++){
    let randomIndex = Math.floor(Math.random() * questions[topic4].length);
    let randomQuestion = questions[topic4][randomIndex];
    console.log(name2 + " your question is: " + randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer || answer == randomQuestion.number){
        console.log("Correct!");
        totalPoints2++;
    } else {
        console.log("Incorrect! The answer was: " + randomQuestion.answer);
    }
    // Remove the question so it can't be selected again
    questions[topic4].splice(randomIndex, 1);
}

// Introducing the hard questions
console.log("=====================================================")
console.log("It is time for the hard questions. \n ")
console.log("Player 1, these are your two HARD questions: ")

let topic5 = "Hard";

// Player 1 hard questions
for (let i =0; i<2; i++){
    let randomIndex = Math.floor(Math.random() * questions[topic5].length);
    let randomQuestion = questions[topic5][randomIndex];
    console.log(name1 + " your question is: " + randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer || answer == randomQuestion.number){
        console.log("Correct!");
        totalPoints++;
    } else {
        console.log("Incorrect! The answer was: " + randomQuestion.answer);
    }
    // Removing the question so it can't be selected again
    questions[topic5].splice(randomIndex, 1);
}

// Player 2 hard questions
console.log("=====================================================")
console.log("Player 2, these are your two HARD questions: ")
for (let i =0; i<2; i++){
    let randomIndex = Math.floor(Math.random() * questions[topic5].length);
    let randomQuestion = questions[topic5][randomIndex];
    console.log(name2 + " your question is: " + randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer || answer == randomQuestion.number){
        console.log("Correct!");
        totalPoints2++;
    } else {
        console.log("Incorrect! The answer was: " + randomQuestion.answer);
    }
    // Removing the question so it can't be selected again
    questions[topic5].splice(randomIndex, 1);
}

// End of the game
console.log("Thats the game over!")
console.log("Player 1 Points: " + totalPoints);
console.log("Player 2 Points: " + totalPoints2);

if(totalPoints>totalPoints2){
    console.log("Player 1 is the winner")
}else{
    console.log("Player 2 is the winner")
}

console.log("Thanks for playing!");



// =====additions/fixes=====
// add more questions (there is still way more on WORD document) (DONE)
// when testing when it says"enter your answer" maybe make it with player 1/2aswell so it looks more unique (DONE)
// add an outro with points and score(DONE)
// add rules section (ALEX - DONE)
// If the player gets the question wrong, print out the real answer so they learn (DONE)
// Fix the rules (while and if statements) (DONE)
// make it so the player cannot choose hard (DONE)
// Make the user lose a point if they answer incorectly (DONE)
// Make it so if the user enters an invalid topic it will ask them to enter a valid one (DONE)
// Make it so questions can't repeat (DONE)
// When asking for a new topic, print the ones that can be done (DONE)
// Make it so the user can enter a number to answer the multiple choice questions (DONE)
// Make it so the user can enter a number to choose a topic (DONE)

//Add a filter so if the player enters an answer or topic without a capital letter it will still work (DANIEL DONE IT) <--- make sure to add to the main code
// Add timer function and call it for questions (ALEX DONE IT)  <--- make sure to add to the main code
