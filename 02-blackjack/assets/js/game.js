/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

(() => {
  "use strict";
  const TYPES_CARDS = ["C", "D", "H", "S"];
  const SPECIALS_CARDS = ["A", "J", "Q", "K"];

  let deck = [];
  let playerPoints = 0;
  let computerPoints = 0;

  // References to HTNL
  const btnNewCard = document.querySelector("#btnNewCard");
  const btnStop = document.querySelector("#btnStop");
  const btnNewGame = document.querySelector("#btnNewGame");
  const playerScoreTag = document.querySelectorAll("small")[0];
  const computerScoreTag = document.querySelectorAll("small")[1];
  const playerCardDiv = document.querySelector("#player-cards");
  const computerCardDiv = document.querySelector("#computer-cards");

  const startGame = () => {
    createDeck();
  };

  const createDeck = () => {
    deck = [];
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

    return _.shuffle(deck);
  };

  const takeCard = () => {
    if (deck.length === 0) {
      throw "The deck is empty";
    }
    return deck.pop();
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

  const computerTurn = (minimunPoints) => {
    do {
      let card = takeCard();
      computerPoints = computerPoints + cardValue(card);
      computerScoreTag.innerText = computerPoints;
      computerCardDiv.append(createCard(card));
      if (minimunPoints > 21) {
        break;
      }
    } while (computerPoints < minimunPoints && minimunPoints <= 21);

    setTimeout(() => {
      computerPoints === minimunPoints
        ? alert("Draw!!!")
        : minimunPoints > 21
        ? alert("You lose!!!")
        : computerPoints > 21
        ? alert("You win!!!")
        : alert("You lose!!!");
    }, 40);
  };

  let check21 = () => {
    if (playerPoints > 21) {
      btnNewCard.disabled = true;
      btnStop.disabled = true;
      computerTurn(playerPoints);
    } else if (playerPoints === 21) {
      btnNewCard.disabled = true;
      btnStop.disabled = true;
    }
  };

  // Events
  btnNewCard.addEventListener("click", () => {
    let card = takeCard();
    playerPoints = playerPoints + cardValue(card);
    playerScoreTag.innerText = playerPoints;
    playerCardDiv.append(createCard(card));
    check21();
  });

  btnStop.addEventListener("click", () => {
    btnNewCard.disabled = true;
    btnStop.disabled = true;
    computerTurn(playerPoints);
  });

  btnNewGame.addEventListener("click", () => {
    startGame();
    btnNewCard.disabled = false;
    btnStop.disabled = false;
    playerScoreTag.innerText = 0;
    computerScoreTag.innerText = 0;
    playerPoints = 0;
    computerPoints = 0;
    playerCardDiv.innerHTML = "";
    computerCardDiv.innerHTML = "";
  });
})();
