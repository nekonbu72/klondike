import {
  Card,
  Color,
  Deck,
  makeCloneCards,
  Rank,
  Suit,
  Updown,
} from "./card.ts";

export class Foundation {
  cards: Card[];

  constructor(public suit: Suit) {
    this.cards = [];
  }

  clone() {
    const cloneFoundation = new Foundation(this.suit);
    cloneFoundation.cards = makeCloneCards(this.cards);
    return cloneFoundation;
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
