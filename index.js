var readlineSync =require('readline-sync');
const chalk = require('chalk');
var score =0

// list of question

var questions =[{
  question:"What is my last name ? ",
  answer:"Deshmukh"
},
{
  question:"How many pets do I have ? ",
  answer:"1"
},
{
  question:"What is the name of my pet ? ",
  answer:"Ruby"
},
{
  question:"Which bike do I own ? ",
  answer:"Bullet"
},
{
  question :"What am I passionate about ? ",
  answer : "cars"
},
{
  question:"Name of my Youtube channel ? ",
  answer:"BhushanVirtual"
},
{
  question:"My dream bike ? ",
  answer:"ninja"
},
{
  question:"My favourite Youtuber ? ",
  answer:"Flyingbeast"
},
{
  question:"What is my birthday month ? ",
  answer: "March"
}
]
// highScore data
var highScore = [{
  name : "Mahesh",
  score:"9"
},
{
  name:"Yash",
  score:"8"
},
{
  name:"Jay",
  score:"8"
}
]
// welcome user with hello
var userName = readlineSync.question("May I have your name -");
console.log(chalk.blue('Hello ' + userName ));

// ask for the permission
var userResponse = readlineSync.question("Would u like to participate in the quiz - DO YOU KNOW BHUSHAN ! (y/n) ")
if (userResponse.toUpperCase()=="y"){
  console.log("Great let's start");
}else{
  


// function
function quiz (question , answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log(chalk.black.bgGreen.bold("Correct "));

    score++;
    console.log ("Current Score "+ score);
    console.log("_________________")
  }else{
    console.log(chalk.black.bgRed.bold("Incorrect Answer"));
    console.log("Current Score "+ score);
    console.log("_________________")
  }
}
// for loop
for (i=0 ; i<questions.length ; i++){
// it will run all questions
var currentQuestion=(questions[i]);

// function call
quiz (currentQuestion.question , currentQuestion.answer); 
}
// Score 
console.log(chalk.black.bgYellow("Your score was "+score+ "/9 below are the top scorers. Send me a screenshot if you are in the top "));
console.log("____________________");

for (i = 0 ; i < highScore.length ; i++){
  console.log(highScore[i].name +"===> "+highScore[i].score);
}
console.log(chalk.bgMagenta("Thank you for visiting the quiz ! "))
}
