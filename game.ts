import { Card, Color, Rank, Suit, Updown } from "./card.ts";
import { Deck } from "./deck.ts";
import { Pile } from "./pile.ts";
import { Foundation } from "./foundation.ts";
import { Stock } from "./stock.ts";

export class Game {
  piles: Pile[];
  foundations: Foundation[];
  stock: Stock;
  moves: Move[];

  constructor() {
    const deck = new Deck();
    this.piles = Pile.makePiles(deck.cards);
    this.stock = new Stock(deck.cards);
    this.foundations = Foundation.makeFoundations();
    this.moves = [];
  }

  availableCards() {
    const availableCards: Card[] = [];
    for (const pile of this.piles) {
      for (const card of pile.cards) {
        if (card.updown == Updown.Up) {
          availableCards.push(card);
        }
      }
    }

    for (const card of this.stock.cards) {
      if (card.updown == Updown.Up) {
        availableCards.push(card);
      }
    }

    return availableCards;
  }
}

export class Move {
  selectedCard: Card;

  constructor(public game: Game) {
    this.selectedCard = this.game.piles[0].cards[0];
  }

  selectCard(card: Card) {
    if (this.game.availableCards().includes(card)) {
      this.selectedCard = card;
    }
  }

  // pile から pile へ
  // stock から pile へ
  // pile から foundation へ

  // stock をめくる
}

const game = new Game();
const move1 = new Move(game);
console.log(move1.selectedCard);
const card = move1.game.piles[1].cards[1];
console.log(card);
move1.selectCard(card);
console.log(move1.selectedCard);
