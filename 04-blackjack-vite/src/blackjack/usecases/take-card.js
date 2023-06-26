/**
 * Picks the las card from deck
 * @param {Array<String>} deck
 * @returns {String} returns the last card from deck
 */
export const takeCard = (deck) => {
  if (!deck || deck.length === 0) {
    throw "The deck is empty";
  }
  return deck.pop();
};
