/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const TYPES_CARDS = ["C", "D", "H", "S"];
const SPECIALS_CARDS = ["A", "J", "Q", "K"];

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
