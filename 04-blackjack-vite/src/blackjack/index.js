import _ from "underscore";
import { createDeck } from "./usecases/create-deck";
import { takeCard } from "./usecases/take-card";
import { cardValue } from "./usecases/card-value";

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

const blackjackModule = (() => {
  "use strict";
  const TYPES_CARDS = ["C", "D", "H", "S"];
  const SPECIALS_CARDS = ["A", "J", "Q", "K"];

  let deck = [];
  let playerPointsArray = [];

  // References to HTNL
  const btnNewCard = document.querySelector("#btnNewCard");
  const btnStop = document.querySelector("#btnStop");
  const btnNewGame = document.querySelector("#btnNewGame");
  const playersScoreTag = document.querySelectorAll("small");
  const playerCardDiv = document.querySelector("#player-cards");
  const computerCardDiv = document.querySelector("#computer-cards");

  const startGame = (playersNumber = 2) => {
    deck = createDeck(TYPES_CARDS, SPECIALS_CARDS);
    playerPointsArray = [];
    for (let index = 0; index < playersNumber; index++) {
      playerPointsArray.push(0);
      playersScoreTag[index].innerText = 0;
    }
    btnNewCard.disabled = false;
    btnStop.disabled = false;
    playerCardDiv.innerHTML = "";
    computerCardDiv.innerHTML = "";
  };

  let createCard = (card) => {
    let imgCard = document.createElement("img");
    imgCard.classList.add("my-card");
    imgCard.src = `assets/cards/${card}.png`;
    return imgCard;
  };

  // turn - The last position is the computer player
  const accumulatePounts = (turn, card) => {
    playerPointsArray[turn] = playerPointsArray[turn] + cardValue(card);
    playersScoreTag[turn].innerText = playerPointsArray[turn];
    return playerPointsArray[turn];
  };

  const checkWinner = (computerPoints, minimunPoints) => {
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

  const computerTurn = (minimunPoints) => {
    let computerPoints = 0;
    do {
      let card = takeCard(deck);
      computerPoints = accumulatePounts(playerPointsArray.length - 1, card);
      computerCardDiv.append(createCard(card));
    } while (computerPoints < minimunPoints && minimunPoints <= 21);

    checkWinner(computerPoints, minimunPoints);
  };

  let check21 = (playerPoints) => {
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
    let card = takeCard(deck);
    let playerPoints = accumulatePounts(0, card);
    playerCardDiv.append(createCard(card));
    check21(playerPoints);
  });

  btnStop.addEventListener("click", () => {
    btnNewCard.disabled = true;
    btnStop.disabled = true;
    computerTurn(playerPointsArray[0]);
  });

  btnNewGame.addEventListener("click", () => {
    startGame();
  });

  return {
    newGame: startGame,
  };
})();
