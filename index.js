//chalk to beutify the font color on CLI
import chalk from 'chalk'
//readlinesync to take user input on CLI
import readlineSync from 'readline-sync'

console.log(chalk.green.bgBlue.bold("Lets find out how well do you know me!!! 🙈 \n")) //welcoming the user 

const inputName = readlineSync.question(chalk.cyanBright("❤ Please enter your name❤" + " :"))//taking player name as input
console.log("Hi" + " " + chalk.yellowBright(inputName) + " ," + "How well do you know Me? Lets get it.") //declaring quiz goal
//select game rules whether to read it or ignore it
const gameRules = readlineSync.question(chalk.magentaBright("Would you like to read the Game rules,Press 1 to read it OR press ENTER to directly play the game."))
let userInput = gameRules
if (userInput == 1) {

  console.log(chalk.magentaBright("Game Rules"))//game rules

  console.log("(a) for every right answer you will get " + (chalk.green("2 Marks.")))
  console.log("(b) for every wrong answer you will get " + (chalk.red("1 Mark.")))
  console.log("(c)Enter a/ b/ c for each question to answer")

}
//leaderboard score 
let highScores = [
  {
    name: "Ravi",
    score: 12,
  },

  {
    name: "Anurag",
    score: 9,
  },

  {
    name: "Ankit",
    score: 8,
  },
]
let scoreCard = 0 //scoreCard variable 

//function to play quiz
function play(quizQuestion, quizAnswer) {
  console.log('\t')
  let userAnswer = readlineSync.question(quizQuestion)

  //taking the user input 
  console.log(chalk.cyan("you have selected :") + userAnswer)//displayig the user input what is selected 
  if (userAnswer === quizAnswer) //condition to check the answers and update the score 
  {
    console.log(chalk.green("you are right"))
    scoreCard = scoreCard + 2 //socre updatation
  } else {

    console.log(chalk.red("you have selected incorrect option"))
    scoreCard = scoreCard - 1
  }
  console.log(chalk.yellow("your score is") + ":" + chalk.white(scoreCard)) //final score to be displayed
}

//questions and answers in an array of objects
let questionOne = {
  question: "(1)What is my Favourite team? \na.MI \nb.CSK \nc.RCB",
  answer: "a"
};

let questionTwo = {
  question: "(2)Where do I live?\na.Delhi \nb.Samastipur \nc.Banglore",
  answer: "b"
}

let questionThree = {
  question: "(3)What do I like most? \na.Pasta \nb.Pizza  \nc.Samosa",
  answer: "c"
}

let questionFour = {
  question: "(4)Who is my best friend? \na.Prashant \nb.Mohit \nc.Shivyansh",
  answer: "b"
}

let questionFive = {
  question: "(5)What language I can speak apart from Hindi? \na.English \nb.Spanish \nc.Bhojpuri",
  answer: "c"
}
let questionSix = {
  question: "(6)What do I prefer most ? \na.City \nb.Village \nc.Metro",
  answer: "b"
}
//array of questions
let questionBank = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix]
console.log('\n')
//accesing the array elements
for (i = 0; i < questionBank.length; i++) {
  //fetching the questions and answers through loop and putting those in play function
  play(questionBank[i].question, questionBank[i].answer)
}
//score card to evaluate how well someone know me
if (scoreCard == 12) {
  console.log("and you know me very well")
}
else if (scoreCard < 0) {
  console.log("you have scored" + " " + chalk.red("zero") + " because your score is in negative values")
  console.log("but we could be friends.\t")
}
else if (scoreCard < 10) {
  console.log("and you know me \t")
}
else {
  console.log("Invalid \t ")
}

console.log("\t")
console.log("--------\nCheck out the top scores and send me a screenshot if you've beaten them I will update!\n")

//displaying leaderboard leaders
console.log("Name\t\tScore")
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + "\t\t" + highScores[i].score);
}
console.log(chalk.green("thanks for taking the quiz ,your final score is : ") + chalk.yellow(scoreCard))