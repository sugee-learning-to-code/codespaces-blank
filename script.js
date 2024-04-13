setTimeout(function() {
    document.querySelector('.buttonA').classList.add('visible');
}, 20000);


const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

fetch("Data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function restart() {
  resetBoard();
  shuffleCards();
  score = 0;
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = "";
  generateCards();
}


//game complete 

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  
    isMatch ? disableCards() : unflipCards();
  
    // Check if the game is completed
    if (isGameComplete()) {
      showGameCompleteButton();
    }
  }
  
  function isGameComplete() {
    return document.querySelectorAll('.card.flipped').length === cards.length;
  }
  
  function showGameCompleteButton() {
    const gameCompleteButton = document.getElementById('gameCompleteButton');
    gameCompleteButton.style.display = 'block';
  }
  
  function showGameCompleteMessage() {
    alert('Congratulations! You completed the game!');
  }



  // rock paper scissors // 

  function playerChoice(playerSelection) {
    var choices = ["rock", "paper", "scissors"];
    var computerSelection = choices[Math.floor(Math.random() * choices.length)];

    var result = determineWinner(playerSelection, computerSelection);

    document.getElementById('result').innerText = `Player chose ${playerSelection}, Computer chose ${computerSelection}. ${result}`;
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}



// calculator // 

// Calculator 1 Functions

function dis(val) { 
    document.getElementById("result").value += val; 
} 

function myFunction(event) { 
    if (
        (event.keyCode >= 48 && event.keyCode <= 57) || // Numbers 0-9
        (event.keyCode >= 96 && event.keyCode <= 105) || // Numpad 0-9
        event.keyCode === 107 || // Plus
        event.keyCode === 109 || // Minus
        event.keyCode === 106 || // Asterisk
        event.keyCode === 111 || // Slash
        event.keyCode === 190 || // Dot
        event.keyCode === 110 // Numpad Dot
    ) {
        document.getElementById("result").value += event.key; 
    }
} 

document.addEventListener("keydown", myFunction);

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        solve();
    } 
}; 

function solve() { 
    let x = document.getElementById("result").value;
    let y = math.evaluate(x); 
    document.getElementById("result").value = y;
} 

function clr() { 
    document.getElementById("result").value = ""; 
}

// Calculator 2 Functions
function disNine(val) { 
    document.getElementById("resultNine").value += val; 
} 

function myFunctionNine(event) { 
    if (
        (event.keyCode >= 48 && event.keyCode <= 57) || // Numbers 0-9
        (event.keyCode >= 96 && event.keyCode <= 105) || // Numpad 0-9
        event.keyCode === 107 || // Plus
        event.keyCode === 109 || // Minus
        event.keyCode === 106 || // Asterisk
        event.keyCode === 111 || // Slash
        event.keyCode === 190 || // Dot
        event.keyCode === 110 // Numpad Dot
    ) {
        document.getElementById("resultNine").value += event.key; 
    }
} 

var calNine = document.getElementById("calcululu"); 
calNine.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        solveNine();
    } 
}; 

function solveNine() {
    document.getElementById("resultNine").value = 9;
}

function clrNine() { 
    document.getElementById("resultNine").value = ""; 
}
