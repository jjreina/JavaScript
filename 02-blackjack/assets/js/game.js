/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

const TYPES_CARDS = ["C", "D", "H", "S"];
const SPECIALS_CARDS = ["A", "J", "Q", "K"];

let deck = [];
let playerPoints = 0;
let coputerPoints = 0;

// References to HTNL
const btnNewCard = document.querySelector("#btnNewCard");
const playerScoreTag = document.querySelector("small");
const playerCardDiv = document.querySelector("#player-cards");

const createDeck = () => {
  // Normal cards, from 2 to 10
  for (let i = 2; i <= 10; i++) {
    TYPES_CARDS.forEach((typeCard) => {
      deck.push(i + typeCard);
    });
  }
  // Special cards, AS, J, Q, K
  SPECIALS_CARDS.forEach((specialCard) => {
    TYPES_CARDS.forEach((typeCard) => {
      deck.push(specialCard + typeCard);
    });
  });

  deck = _.shuffle(deck);
  return deck;
};

createDeck();

const takeCard = () => {
  if (deck.length === 0) {
    throw "The deck is empty";
  }
  const card = deck.pop();
  return card;
};

const cardValue = (card) => {
  let value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1; // to convert to number
};

let createCard = (card) => {
  let imgCard = document.createElement("img");
  imgCard.classList.add("my-card");
  imgCard.src = `assets/cards/${card}.png`;
  return imgCard;
};

// Events
btnNewCard.addEventListener("click", () => {
  let card = takeCard();
  playerPoints = playerPoints + cardValue(card);
  playerScoreTag.innerText = playerPoints;
  playerCardDiv.append(createCard(card));
});
