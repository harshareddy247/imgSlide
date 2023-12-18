let player = {
    name :"Per",
    chips : 145
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let playerEl  = document.getElementById("player-el");

playerEl.textContent = player.name + ":$" + player.chips;

function startGame(){
  isAlive = true;
  let firstCard = getRandomNum();
  let secondCard = getRandomNum();
  cards = [firstCard,secondCard];
  sum = firstCard + secondCard
  renderGame();
}

function renderGame(){
  cardEl.textContent = "Cards: "
  for(let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] +" ";
  };
  sumEl.textContent = "Sum:" +sum;
    if(sum <= 20) {
      message = "Do you want to draw a new card?";
    }else if(sum === 21) {
      message = "Wohoo! You've got Blackjack!";
      hasBlackJack = true;
    }else {
      message = "You're out of the game!";
      isAlive = false;
    }
    messageEl.textContent = message;  
}

function newCard(){
  if(isAlive === true && hasBlackJack === false){
   let newCard = getRandomNum();
  sum += newCard; 
  cards.push(newCard);
  renderGame(); 
  }
}

function getRandomNum() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if(randomNumber === 1){
    return 11;
  }else if(randomNumber > 10){
    return 10;
  }else{
    return randomNumber;
  }
}