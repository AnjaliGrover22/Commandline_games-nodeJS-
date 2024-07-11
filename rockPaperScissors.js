//asking user input
const readline = require("readline");

const userGot = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askChoice() {
  userGot.question("Choose your Choice: Rock/Paper/Scissors", (choice) => {
    choice = choice.trim();
    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
      console.log(`You have Chosen ${choice}`);
      userGot.close();
      //creating Bot logic
      const botOptions = ["Rock", "Paper", "Scissors"];

      const botGot = botOptions[Math.floor(Math.random() * 3)];
      console.log("Bot has Chosen", botGot);

      //Checking conditions
      ourWinner(choice, botGot);
    } else {
      console.log("Invalid Choice: Please choose Rock/ Paper or Scissors");
      askChoice();
    }
  });
}

function ourWinner(userChoice, botChoice) {
  if (userChoice === botChoice) {
    console.log("It is a draw");
  } else if (
    (userChoice === "Rock" && botChoice === "Scissors") ||
    (userChoice === "Scissors" && botChoice === "Paper") ||
    (userChoice === "Paper" && botChoice === "Rock")
  ) {
    console.log("You Win");
  } else {
    console.log("You lose");
  }
}

askChoice();
