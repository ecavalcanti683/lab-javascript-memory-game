class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; // armazenaremos os cartões em que o usuário clicou para que possamos compará-los.
    this.pairsClicked = 0; 
    this.pairsGuessed = 0; // onde será adicionado toda vez que um usuário escolher e adivinhar um par
  }

  shuffleCards() {
    if (this.cards) {
    const shuffleArray = this.cards.sort(() => Math.random() - 0.5);
    return shuffleArray;
    } else {
      return undefined;
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }
  }
  checkIfFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) {
      return true;
    } else {
      return false;
    }
  }
}
