export const Rank = {
  Ace: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 11,
  Queen: 12,
  King: 13,
} as const;
export type Rank = typeof Rank[keyof typeof Rank];

export const Suit = {
  Club: "Club",
  Diamond: "Diamond",
  Spade: "Spade",
  Heart: "Heart",
} as const;
export type Suit = typeof Suit[keyof typeof Suit];

export const Color = {
  Red: "Red",
  Black: "Black",
} as const;
export type Color = typeof Color[keyof typeof Color];

export const Updown = {
  Up: "Up",
  Down: "Down",
} as const;
export type Updown = typeof Updown[keyof typeof Updown];

export class Card {
  constructor(
    public color: Color,
    public suit: Suit,
    public rank: Rank,
    public updown: Updown,
  ) {}

  clone() {
    return new Card(this.color, this.suit, this.rank, this.updown);
  }
}

interface CardSet {
  cards: Card[];

  clone():

}

export class Deck {
  cards: Card[];

  constructor() {
    this.cards = [];
    for (const rank of Object.values(Rank)) {
      for (const suit of Object.values(Suit)) {
        let card: Card;
        switch (suit) {
          case Suit.Diamond:
          case Suit.Heart:
            card = new Card(Color.Red, suit, rank, Updown.Down);
            break;
          default:
            card = new Card(Color.Black, suit, rank, Updown.Down);
        }
        this.cards.push(card);
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

let myDeck = new Deck();

console.log(myDeck.shuffle());
console.log(myDeck.cards.length);
