import _ from "underscore";
import {
  createDeck,
  takeCard,
  accumulatePounts,
  computerTurn,
  createCard,
} from "./usecases";

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

  let check21 = (playerPoints) => {
    if (playerPoints > 21) {
      btnNewCard.disabled = true;
      btnStop.disabled = true;
      computerTurn(
        playerPoints,
        deck,
        computerCardDiv,
        playerPointsArray,
        playersScoreTag
      );
    } else if (playerPoints === 21) {
      btnNewCard.disabled = true;
      btnStop.disabled = true;
    }
  };

  // Events
  btnNewCard.addEventListener("click", () => {
    let card = takeCard(deck);
    let playerPoints = accumulatePounts(
      0,
      card,
      playerPointsArray,
      playersScoreTag
    );
    playerCardDiv.append(createCard(card));
    check21(playerPoints);
  });

  btnStop.addEventListener("click", () => {
    btnNewCard.disabled = true;
    btnStop.disabled = true;
    computerTurn(
      playerPointsArray[0],
      deck,
      computerCardDiv,
      playerPointsArray,
      playersScoreTag
    );
  });

  btnNewGame.addEventListener("click", () => {
    startGame();
  });

  return {
    newGame: startGame,
  };
})();
