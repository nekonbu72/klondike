import { Card, Color, Deck, Rank, Suit, Updown } from "./card.ts";

export class Foundation {
  cards: Card[];
  constructor(public suit: Suit) {
    this.cards = [];
  }
}

export function makeFoundations() {
  const foundations: Foundation[] = [];
  for (const suit of Object.values(Suit)) {
    foundations.push(new Foundation(suit));
  }
  return foundations;
}

const myFoundations = makeFoundations();
console.log(makeFoundations());
