const h1 = document.querySelector('h1');
const para = document.querySelector('p');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor'); 
const buttons = document.querySelector('.container');
const roundInput = document.getElementById('rounds');
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const buttonArr = [...buttons.querySelectorAll('button')];
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
    roundInput.disabled = true;
    roundCount++ 
    para.textContent = `WIN :${playerScore} - ROUNDS: ${roundCount} - LOSS: ${computerScore}`;
    if(roundCount === Number(roundInput.value)){
        gameOver();
    }
}

function gameOver() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    modal.innerHTML = `<h1>!!! Game Over !!!</h1>
                        <p>Your score: <span>${playerScore}</span></p>
                        <button>Start new game</button>`;
    document.body.appendChild(modal);
    if(playerScore > computerScore) {
       const h1 = document.querySelector('.modal h1');
       h1.style.color = 'green';
       h1.textContent = '!!! YOU WON !!!';
    }
    
    const btn = document.querySelector('.modal button');
    btn.addEventListener('click', () => {
        h1.style.color = 'black';
        h1.textContent = 'Rock Paper Scissor Game!';
        para.textContent = 'choose a move';
        roundInput.disabled = false;
        roundInput.value = roundInput.defaultValue;
        roundCount = 0;
        playerScore = 0;
        computerScore = 0;
        para.textContent = `WIN :${playerScore} - ROUNDS: ${roundCount} - LOSS: ${computerScore}`;
        document.body.removeChild(modal);
    })
}