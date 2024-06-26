let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock, paper, scissor
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){ 
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beated ${compChoice} `;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beated yours ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //computer choice
    const compChoice = genCompChoice();

    //game logic
    if(userChoice === compChoice){
        //draw 
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((ch)=>{
    ch.addEventListener("click",() => {
        const userChoice = ch.getAttribute("id");
        playGame(userChoice);
    });
});
