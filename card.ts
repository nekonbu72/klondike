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
  color: Color;

  constructor(
    public suit: Suit,
    public rank: Rank,
    public updown: Updown,
  ) {
    this.color = Card.suitToColor(this.suit);
  }

  private clone() {
    return new Card(this.suit, this.rank, this.updown);
  }

  static cloneCards(cards: Card[]) {
    const cloneCards: Card[] = [];
    for (const card of cards) {
      cloneCards.push(card.clone());
    }
    return cloneCards;
  }

  static suitToColor(suit: Suit) {
    switch (suit) {
      case Suit.Diamond:
      case Suit.Heart:
        return Color.Red;
      default:
        return Color.Black;
    }
  }

  static stringToCard(cardInfo: string) {
    const suitStr = cardInfo.replace(/[0-9]/g, "");
    const rankStr = cardInfo.replace(/[^0-9]/g, "");
    let selectedSuit: Suit = Suit.Diamond;
    for (const suit of Object.values(Suit)) {
      if (suitStr == suit.slice(0, suitStr.length)) {
        selectedSuit = suit;
        break;
      }
    }
    let selectedRank: Rank = Rank.Ace;
    for (const rank of Object.values(Rank)) {
      if (rankStr == rank.toString()) {
        selectedRank = rank;
        break;
      }
    }
    return new Card(selectedSuit, selectedRank, Updown.Up);
  }
}

// const card = Card.stringToCard("4S");
// console.log(card);
