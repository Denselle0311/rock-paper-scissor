const h1 = document.querySelector('h1');
const para = document.querySelector('p');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor'); 
let buttons = document.querySelector('.container');
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let buttonArr = [...buttons.querySelectorAll('button')];
// console.log(buttonArr);
buttonArr.forEach(btn => {
    btn.addEventListener('click',() => {
        let rnd = Math.floor(Math.random()*3);
        let computerChoice = buttonArr[rnd];
        moveResult(btn,computerChoice);
    })
});

function moveResult(player,computer) {
    let playerI = player.dataset.value;
    let computerI = computer.dataset.value;
   
    if((player == computer)) {
        h1.style.color = 'yellow';
        h1.textContent = 'Draw';
    }
    else if((playerI - computerI) == 1 ||
            (playerI - computerI) == -2
    ) {
        h1.style.color = 'green';
        h1.textContent = 'You Won!';
        playerScore++

    } else {
        h1.style.color = 'red';
        h1.textContent = 'You Loss!';
        computerScore++
    }
    para.textContent = `${playerScore} WIN : ${computerScore} LOSS`;
    roundCount++
}