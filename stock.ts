import { Card, Color, Rank, Suit, Updown } from "./card.ts";

export class Stock {
  static readonly MAXNUMBEROFCARDS = 52 - 1 - 2 - 3 - 4 - 5 - 6 - 7;

  cards: Card[];
  position: number;

  constructor(cards: Card[]) {
    if (cards.length > Stock.MAXNUMBEROFCARDS) {
      throw new Error("Too Many Cards in Stock");
    }
    this.cards = cards;
    this.downturnAll();
    this.position = Stock.MAXNUMBEROFCARDS + 1;
  }

  upturn() {
    if (this.position >= Stock.MAXNUMBEROFCARDS) {
      this.downturnAll();
      this.position = 1;
    } else {
      this.position++;
    }
    this.cards[this.position - 1].updown = Updown.Up;
  }

  downturnAll() {
    this.cards.forEach((card) => {
      card.updown = Updown.Down;
    });
  }

  clone() {
    const cloneStock = new Stock(Card.cloneCards(this.cards));
    cloneStock.position = this.position;
    return cloneStock;
  }
}
