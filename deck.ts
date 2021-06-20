import { Card, Color, Rank, Suit, Updown } from "./card.ts";

export class Deck {
  cards: Card[];

  constructor() {
    this.cards = [];
    for (const rank of Object.values(Rank)) {
      for (const suit of Object.values(Suit)) {
        this.cards.push(new Card(suit, rank, Updown.Down));
      }
    }
    this.shuffle();
  }

  shuffle() {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }
}
