export const checkWinner = (computerPoints, minimunPoints) => {
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

export let createCard = (card) => {
  let imgCard = document.createElement("img");
  imgCard.classList.add("my-card");
  imgCard.src = `assets/cards/${card}.png`;
  return imgCard;
};
