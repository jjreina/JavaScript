import _ from "underscore";

/**
 * Creates a new cards deck shuffled
 * @param {Array<String>} typeCards Example ["C", "D", "H", "S"]
 * @param {Array<String>} specialCards Example ["A", "J", "Q", "K"]
 * @returns {Array<String>} returns a new cards deck shuffled
 */
export const createDeck = (typeCards, specialCards) => {
  if (!typeCards || typeCards.length === 0)
    throw new Error("typeCards is mandatory");
  if (!specialCards || specialCards.length === 0)
    throw new Error("specialCards is mandatory");

  let deck = [];
  // Normal cards, from 2 to 10
  for (let i = 2; i <= 10; i++) {
    typeCards.forEach((typeCard) => {
      deck.push(i + typeCard);
    });
  }
  // Special cards, AS, J, Q, K
  specialCards.forEach((specialCard) => {
    typeCards.forEach((typeCard) => {
      deck.push(specialCard + typeCard);
    });
  });

  deck = _.shuffle(deck);
  return deck;
};
