import _ from "underscore";

export const createDeck = (typeCards, specialCards) => {
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
