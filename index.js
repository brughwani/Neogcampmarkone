var readlineSync = require("readline-sync");

var score = 0;

// data of high score


var highscore=[
  {name:"Bhavesh",
  score:3
  },
  {
  name:"Kosmica",
    score:2
  }
]
var quiz=[
  {
    question:"Which is favourite podcast of Bhavesh Rughwani",
    answer:"Think fast"
  },
{
  question:"Where does Bhavesh Rughwani live?",
  answer:"Vadodara"
},
  {
    question:"Which institute did Bhavesh Rughwani passout from for his PG",
    answer:"SIBM Pune"
  },
  {
     question:"Which university did Bhavesh Rughwani passout from for his UG",
    answer:"PDEU"
  },
  {
   question:"What framework is Bhavesh Rughwani's favourite tech stack",
    answer:"Flutter"
  }
]
function Welcome() {
var usrname=readlineSync.question("Whats your name?")
 console.log("Welcome"+ usrname +" to How much you know Bhavesh ")
}
function playquiz(q,a)
  {
    usranswer=readlineSync.question(q)
    if (usranswer.toUpperCase === a.toUpperCase)
    {
      console.log("Right")
      score+=1
    }
    else
    {
      console.log("Wrong")
    }
    
    console.log("current score: ", score);
  console.log("-------------")
  }
function game() {
  for (let i = 0; i < quiz.length; i++) {
var currentq=quiz[i]
    playquiz(currentq.question,currentq.answer)
  }
}
function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highscore.map(score => console.log(score.name, " : ", score.score))
}

Welcome()
game()
showScores()