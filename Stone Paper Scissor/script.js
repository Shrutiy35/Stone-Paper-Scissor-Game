//Initially userScore and compScore is set to 0
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoremsg=document.querySelector('#user-score');
const compScoremsg=document.querySelector('#comp-score');

const genCompChoice=()=>{
//generate random choices of comp
const options=["stone","paper","scissors"];
const randomIdx=Math.floor(Math.random()*3);
return options[randomIdx];
};

const drawGame=()=>{//when game is a draw between userChoice and CompChoice
    console.log("game was a draw");
    msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner=(userwin,UserChoice,compChoice)=>{//Display Winner
if(userwin){
    console.log("you win!");
    userScore++;
    userScoremsg.innerText=userScore;
    msg.innerText = `You win! Your ${UserChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
}
else{
    console.log("you lose");
    compScore++;
    compScoremsg.innerText=compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${UserChoice}`;
    msg.style.backgroundColor = "red";
}
};

const playGame=(UserChoice)=>{//PLay game
    console.log("userChoice=",UserChoice);
const compChoice=genCompChoice();
console.log("compchoice=",compChoice);
if(UserChoice===compChoice){
    drawGame();
}
else{
    let userwin=true;
    if(UserChoice==="stone"){
       //rock will either beat comp choice paper or scissor
      userwin= compChoice==="paper"?false:true;
    }
    else if(UserChoice==="paper"){
        //paper will either beat rock or scissor
        userwin= compChoice==="scissor"?false:true;
    }
    else{//scissor will beat either rock or paper
userwin=compChoice==="stone"?false:true;
    }
    showWinner(userwin,UserChoice,compChoice);
}
};

choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const UserChoice=choice.getAttribute("id");
playGame(UserChoice);
    });
});