/**
 * Gets the card value
 * @param {String} card
 * @returns {Number} returns the value from a card
 */
export const cardValue = (card) => {
  let value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1; // to convert to number
};
