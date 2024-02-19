let userscore = 0;
let compscore = 0;
let msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#User-score");
const compScorePara=document.querySelector("#Comp-score");


const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText=("Game was Draw. Play Again!");
    msg.style.backgroundColor="#081b31";

}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=(`You Win! Your ${userChoice} beats ${compChoice} `);
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=(`You Lose! ${compChoice} beats your ${userChoice}` );
        msg.style.backgroundColor="red";

    }
}





const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        // DRAW GAME
        drawGame();
    }
    else {
        let userWin = true;

        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }


};



choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);

    })
});