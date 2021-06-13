import { Card, Color, Deck, Rank, Suit, Updown } from "./card.ts";

export class Pile {
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
}

export function makePiles(deck: Deck) {
  const plies: Pile[] = [];
  const NUMBEROFPILES = 7;
  for (let i = 1; i <= NUMBEROFPILES; i++) {
    const pile = new Pile(deck.cards, i);
    plies.push(pile);
  }
  return plies;
}

const myDeck = new Deck();
const myPiles = makePiles(myDeck);
console.log(myPiles);
console.log(myDeck.cards.length);
