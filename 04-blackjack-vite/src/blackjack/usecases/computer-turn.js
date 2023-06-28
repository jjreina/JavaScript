import { takeCard, cardValue } from "./index";
import { checkWinner, createCard } from "./utils";

// turn - The last position is the computer player
export const accumulatePounts = (
  turn,
  card,
  playerPointsArray,
  playersScoreTag
) => {
  playerPointsArray[turn] = playerPointsArray[turn] + cardValue(card);
  playersScoreTag[turn].innerText = playerPointsArray[turn];
  return playerPointsArray[turn];
};

/**
 *
 * @param {Number} minimunPoints
 * @param {Array<String>} deck
 * @param {HTMLElement} computerCardDiv
 * @param {Array<Number>} playerPointsArray
 */
export const computerTurn = (
  minimunPoints,
  deck,
  computerCardDiv,
  playerPointsArray,
  playersScoreTag
) => {
  if (!deck) throw new Error("Deck is mandatory");
  if (!computerCardDiv) throw new Error("Card HTML Div is mandatory");

  let computerPoints = 0;
  do {
    let card = takeCard(deck);
    computerPoints = accumulatePounts(
      playerPointsArray.length - 1,
      card,
      playerPointsArray,
      playersScoreTag
    );
    computerCardDiv.append(createCard(card));
  } while (computerPoints < minimunPoints && minimunPoints <= 21);

  checkWinner(computerPoints, minimunPoints);
};
