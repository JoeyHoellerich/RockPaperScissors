var computerChoice = ""
let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = Math.random(); //Randomly generate a number   
// console.log(computerSelection)

//Conditional logic goes here to determine the computers selection

if (computerSelection <= 0.33){
  computerChoice = "rock"
}
else if (computerSelection > 0.33 && computerSelection <= 0.67){
  computerChoice = "paper"
}
else {
  computerChoice = "scissors"
}

// console.log(computerChoice)

//Function to compare the userSelection and the computerSelection to determine the winner
let compare=function(selection1,selection2){
  
  if (selection1 == "rock" && selection2 == "scissors"){
    console.log("player wins (rock beats scissors)")
  }

  else if (selection1 == "scissors" && selection2 =="rock"){
    console.log("computer wins (rock beats scissors)")
  }

  else if (selection1 == "rock" && selection2 == "paper"){
    console.log("computer wins (paper covers)")
  }

  else if (selection1 == "scissors" && selection2 =="paper"){
    console.log("player wins (scissors cuts paper)")
  }

  else if (selection1 == "paper" && selection2 == "rock"){
    console.log("player wins (paper covers rock)")
  }

  else if (selection1 == "paper" && selection2 =="scissors"){
    console.log("computer wins (scissors cuts paper)")
  }

  else {
    console.log("tie (same selected)")
  }
    
}

compare(userSelection, computerChoice)