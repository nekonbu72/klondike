import { Card, Color, Rank, Suit, Updown } from "./card.ts";

export class Pile {
  static readonly NUMBEROFPILES = 7;

  cards: Card[];
  position: number;

  constructor(cards: Card[], position: number) {
    if (position < 1 || position > 7) {
      throw new Error("Position Range Error");
    }
    this.position = position;
    this.cards = cards.splice(-this.position, this.position);

    this.cards.forEach((card, i) => {
      if (i == this.cards.length - 1) {
        card.updown = Updown.Up;
      } else {
        card.updown = Updown.Down;
      }
    });
  }

  clone() {
    return new Pile(Card.cloneCards(this.cards), this.position);
  }

  static makePiles(cards: Card[]) {
    const plies: Pile[] = [];
    for (let i = 1; i <= this.NUMBEROFPILES; i++) {
      const pile = new Pile(cards, i);
      plies.push(pile);
    }
    return plies;
  }
}
