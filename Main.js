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
            answer: "Hogwarts"
        },
        {
            question: "What tv series features Walter White and Jesse Pinkman?",
            choices: ["The Walking Dead", "Attack on Titan", "Breaking Bad", "Modern family"],
            answer: "Breaking Bad"
        },
        {
            question: "What franchise has the main character who has the powers of a spider?",
            choices: ["Spider-Man", "Ant-Man", "John Wick", "Batman"],
            answer: "Spider-Man"
        },
        {
            question: "what year is the movie blade runner 1982 set in?",
            choices: ["1982", "2019", "2028", "2077"],
            answer: "2019"
        },
        {
            question: "Which studio Ghibli features a girl named Chihiro working in a bath house for spirits?",
            choices: ["washing spirits", "spirited away", "cleaning spirits", "ghost house"],
            answer: "spirited away"
        },
        {
            question: "What score did Elle Woods get on her LSAT in Legally Blonde?",
            choices: ["179", "178", "172", "192"],
            answer: "179"
        },
        {
            question: "Who directed the 2017 movie Get Out?",
            choices: ["Jordan Peele", "Christopher Nolan", "Steven Spielberg", "James Cameron"],
            answer: "Jordan Peele"
        },
        {
            question: "Which movie does not feature Jonah Hill?",
            choices: ["Superbad", "Fight Club", "21 Jump Street", "The Wolf of Wall Street"],
            answer: "Fight Club"
        },
        {
            question: "What is the name of Jessie's horse in Toy Story 2?",
            choices: ["Buckshot", "Slinky", "Woody", "Bullseye"],
            answer: "Bullseye"
        }
    ],
    Geography:[
        {
            question: "What is the capital of Mongolia?",
            choices: ["Venice", "Ulaanbaatar", "Erdenet", "Paris"],
            answer: "Ulaanbaatar"
        },
        {
            question: "How many continents are there?",
            choices: ["5", "6", "7", "8"],
            answer: "7"
        },
        {
            question: "Which is the largest desert in the world?",
            choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
            answer: "Antarctic Desert"
        },
        {
            question: "What is the smallest country in the world?",
            choices: ["Scotland", "Wales", "Greenland", "Vatican City"],
            answer: "Vatican City"
        },
        {
            question: "Which country has the highest population?",
            choices: ["China","India", "Pakistan", "Japan"],
            answer: "India"
        },
        {
            question: "What is the longest river in the world?",
            choices: ["River Nile", "River Clyde", "River Amazon", "River Yenisei"],
            answer: "Arabian Desert"
        },
        {
            question: "What is the capital of Canada?",
            choices: ["Ontario", "Vancouver","Ottawa", "Quebec"],
            answer: "Ottawa"
        },
        {
            question: "What is the only country without any rivers?",
            choices: ["Saudi Arabia", "Dubai", "Ethiopia", "Nigeria"],
            answer: "Saudi Arabia"
        },
        {
            question: "Which country has more pyramids than Egypt?",
            choices: ["Morrocco", "Syria", "Libya", "Sudan"],
            answer: "Sudan"
        },
        {
            question: "What is the capital of Turkey?",
            choices: ["Ankara", "Istanbul", "Bursa", "Adana"],
            answer: "Ankara"
        },
        {
            question: "Which country has the largest coral reef system in the world?",
            choices: ["Madagascar", "New Zealand", "Australia", "USA"],
            answer: "Australia"
        },
        {
            question: "Which country has the most time zones?",
            choices: ["Germany", "France", "United Kingdom", "Switzerland"],
            answer: "France"
        },
        {
            question: "Which country is both an island and a continent?",
            choices: ["Africa", "America", "Europe", "Australia"],
            answer: "Australia"
        }
    ],
    History:[
        {
            question: "who was the main power in the axis power during WW2?",
            choices: ["Japan", "Germany", "America", "Italy"],
            answer: "Germany"
        },
        {
            question: "In what year did World War 2 end?",
            choices: ["1939", "1912", "1984", "1945"],
            answer: "1945"
        },
        {
            question: "What was the Bubonic Plague that swept through Europe in the 14th Century often called?",
            choices: ["Bubonic virus", "Bluetooth disease", "The Black Death", "Black Disease"],
            answer: "The Black Death"
        },
        {
            question: "What year did the attack on Pearl Harbour occur?",
            choices: ["1941", "1945", "1921", "1939"],
            answer: "1941"
        },
        {
            question: "Who was the first person to walk on the moon?",
            choices: ["Buzz Aldrin", "John Glenn", "Alan Shepard", "Neil Armstrong"],
            answer: "Neil Armstrong"
        },
        {
            question: "Who was the first person in space?",
            choices: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Sally Ride"],
            answer: "Yuri Gagarin"
        },
        {
            question: "How many flights were hijacked during the September 11th attacks in 2001?",
            choices: ["4", "3", "2", "5"],
            answer: "4"
        },
        {
            question: "Who was the artist famous for painting the Mona Lisa?",
            choices: ["Leonardo Dicaprio","Leonardo da Vinci", "Vincent Van Gogh", "Banksy"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the Greek God of the Sea?",
            choices: ["Zeus", "Aphrodite", "Thor", "Poseidon"],
            answer: "Poseidon"
        }
    ],
    Music:[
        {
            question: "How many members were there in The Spice Girls?",
            choices: ["4", "3", "5", "6"],
            answer: "5"
        },
        {
            question: "What is the highest selling album of all time?",
            choices: ["AM","Thriller", "The Fame", "Legacy"],
            answer: "Thriller"
        },
        {
            question: "Who sang Rolling in the Deep?",
            choices: ["Adele", "Beyonce", "Lady Gaga", "Rihanna"],
            answer: "Adele"
        },
        {
            question: "What musical term means to gradually get louder?",
            choices: [ "Alto", "Crescendo", "Baritone", "Tenor"],
            answer: "Crescendo"
        },
        {
            question: "What band performed Bohemian Rhapsody?",
            choices: ["Queen", "The Beatles", "ACDC", "Led Zepplin"],
            answer: "Queen"
        },
        {
            question: "Which rapper's real name is Marshall Mathers?",
            choices: ["Tupac", "Biggie Smalls", "Dr Dre", "Eminem"],
            answer: "Eminem"
        },
        {
            question: "Which famous band featured WILL.I.AM?",
            choices: ["Oasis", "Daftpunk", "The Black Eyed Peas", "The Pussycat Dolls"],
            answer: "The Black Eyed Peas"
        },
        {
            question: "Which artist has won the most Grammy Awards of all time?",
            choices: ["Cheryl Cole", "Lady Gaga", "Mariah Carey", "Beyonce"],
            answer: "Beyonce"
        },
        {
            question: "Which band sang Stayin' Alive in 1977?",
            choices: ["Bee gees", "Queen", "Led Zepplin", "Metallica"],
            answer: "Bee gees"
        },
        {
            question: "Who sang Umbrella in 2007?",
            choices: ["Beyonce", "Rihanna", "Katy Perry", "Taylor Swift"],
            answer: "Rihanna"
        },
        {
            question: "Which song spent the most weeks at number one in the 2010s?",
            choices: ["Shape of You", "We Found Love", "Old Town Road", "Uptown Funk"],
            answer: "Old Town Road"
        },
        {
            question: "What was Lady Gaga's debut single?",
            choices: ["Just Dance", "Telephone", "Umbrella", "Born This Way"],
            answer: "Just Dance"
        },
        {
            question: "What spy movie did Elton john appear in?",
            choices: ["Golden Eye", "Johnny English", "Kingsmen", "James bond"],
            answer: "Kingsmen"
        },
        {
            question: "What part of the UK was the group Franz Ferdinand founded in?",
            choices: ["England", "Ireland", "Wales", "Scotland"],
            answer: "Scotland"
        }
    ],
    Hard:[
        {
            question: "What chess piece is the only one not to move in a straight line",
            choices: ["Queen", "Bishop", "Knight", "King"],
            answer: "Knight"  
        },
        {
            question: "What is the strongest muscle in the human body",
            choices: ["Jaw", "Thigh", "Tongue", "Forearms"],
            answer: "Jaw"
        },
        {
            question: "Which language is the most natively spoken",
            choices: ["Indian", "Mandarin", "English", "Spanish"],
            answer: "Mandarin"
        },
        {
            question: "What does ram mean in terms of computers",
            choices: ["Reboot Accessible Memory", "Random Access Memory", "Redo Applicable Memory", "Research Access Memory"],
            answer: "Random Access Memory"
        }
    ]
}

// Introducing player 1 to the game
console.log("===== QUIZ ====")
console.log("Welcome to the quiz show Player 1 and Player 2 \nFor every question you get right you earn 1 point, and with the hard questions you get 2 points each")
console.log("Each player gets 2 topics to answer from, with there being the 2 HARD topic questions at the end for extra points")
console.log("You can choose one of these topics: -Tv -Geography -History -Music ");

// Asking Player 1 for their first topic
let topic = prompt.question("Please choose a topic: ");

// Asking the user to answer random questions based on the topic they chose
for (let i =0; i<3; i++){
    let randomQuestion = questions[topic][Math.floor(Math.random() * questions[topic].length)];
    console.log(randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer){
        console.log("Correct!");
        totalPoints++;
    } else {
        console.log("Incorrect!");
    }
}

// Asking Player 1 for their second topic
let topic2 = prompt.question("Please choose another topic: ");


// ------------------------------
// Making the user pick another topic if they pick a topic they have already done
while(topic2 == topic){ 
    topic2 = prompt.question("Please choose a another topic that isn't " + topic + " : ");
}

// Asking the user to answer random questions based on the second topic they chose
for (let i =0; i<3; i++){
    randomQuestion = questions[topic2][Math.floor(Math.random() * questions[topic2].length)];
    console.log(randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer){
        console.log("Correct!");
        totalPoints++;
    } else {
        console.log("Incorrect!");
    }
}

// ------------------------------
// Asking Player 2 for their first topic
let topic3 = prompt.question("Player 2 please choose another topic: ");

// Making the user pick another topic if they pick a topic they have already done
while(topic3 == topic || topic3 == topic2){ 
    topic3 = prompt.question("Please choose a another topic that isn't " + topic + " or " + topic2 + ": ");
}

// Asking the user to answer random questions based on the second topic they chose
for (let i =0; i<3; i++){
    randomQuestion = questions[topic3][Math.floor(Math.random() * questions[topic3].length)];
    console.log(randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer){
        console.log("Correct!");
        totalPoints2++;
    } else {
        console.log("Incorrect!");
    }
}

// ------------------------------
// Asking Player 2 for their second topic
let topic4 = prompt.question("Please choose another topic: ");

// Making the user pick another topic if they pick a topic they have already done
while(topic4 == topic || topic4 == topic2 || topic4 == topic3){ 
    topic4 = prompt.question("Please choose a another topic that isn't " + topic + ", " + topic2 + " or " + topic3 + ": ");
}

// Asking the user to answer random questions based on the second topic they chose
for (let i =0; i<3; i++){
    randomQuestion = questions[topic4][Math.floor(Math.random() * questions[topic4].length)];
    console.log(randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer){
        console.log("Correct!");
        totalPoints2++;
    } else {
        console.log("Incorrect!");
    }
}

// ------------------------------
// Introducing the hard questions
console.log("It is time for the hard questions. \n ")
console.log("Player 1, these are your two HARD questions: ")

let topic5 = "Hard";

// Player 1 hard questions
for (let i =0; i<2; i++){
    randomQuestion = questions[topic5][Math.floor(Math.random() * questions[topic5].length)];
    console.log(randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer){
        console.log("Correct!");
        totalPoints2 = totalPoints + 2;
    } else {
        console.log("Incorrect!");
    }
}

// ------------------------------
// Player 2 hard questions
console.log("Player 2, these are your two HARD questions: ")
for (let i =0; i<2; i++){
    randomQuestion = questions[topic5][Math.floor(Math.random() * questions[topic5].length)];
    console.log(randomQuestion.question);
    console.log("1. " + randomQuestion.choices[0]);
    console.log("2. " + randomQuestion.choices[1]);
    console.log("3. " + randomQuestion.choices[2]);
    console.log("4. " + randomQuestion.choices[3]);
    let answer = prompt.question("Enter your answer: ");

    if (answer == randomQuestion.answer){
        console.log("Correct!");
        totalPoints2 = totalPoints2 + 2;
    } else {
        console.log("Incorrect!");
    }
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
// add more questions (there is still way more on WORD document)
// when testing when it says"enter your answer" maybe make it with player 1/2aswell so it looks more unique (DONE)
// add an outro with points and score(DONE)
// add rules section
// Make it so questions can't repeat
// If the player gets the question wrong, print out the real answer so they learn
//  When asking for a new topic, print the ones that can be done (because the player can forget which topics are left)
//  If the user enters a topic that isnt in the OBJECT then just print"invalid topic, pelase try again" <---- (!=)
// maybe add a filter so if the player enters a topic without a capital letter it will still work


