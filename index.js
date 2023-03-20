let player ={
             name: "mubin",
             chips: 125
       
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
//let sumEl = document.querySelector('#sum-el')
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": " + player.chips;

function getRandomCard() {
  /* math.floor rounds down nearest whole number. Math.random generate a value between 0 and .9999 (almost one)
     if we  multiply math.random() with number x then it will print second highest number for ex:
     Math.floor(Math.random() * 6)
     print: 0, 1, 2, 3, 4, 5
     now if we want to print highest number we can simply add + 1 to the math.random fpr ex:
     Math.floor(Math.random() * 6) +1
     print: 1, 2 , 3, ,4 ,5 ,6
*/
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card";
  } else if (sum === 21) {
    message = "You've got blackjack";

    hasBlackJack = true;
  } else {
    message = "You're out of the game";

    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);

    renderGame();
  }
}
