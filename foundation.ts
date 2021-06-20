import { Card, Color, Rank, Suit, Updown } from "./card.ts";

export class Foundation {
  cards: Card[];

  constructor(public suit: Suit) {
    this.cards = [];
  }

  clone() {
    const cloneFoundation = new Foundation(this.suit);
    cloneFoundation.cards = Card.cloneCards(this.cards);
    return cloneFoundation;
  }

  static makeFoundations() {
    const foundations: Foundation[] = [];
    for (const suit of Object.values(Suit)) {
      foundations.push(new Foundation(suit));
    }
    return foundations;
  }
}
