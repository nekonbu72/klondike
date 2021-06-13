import { Card, Color, Deck, Rank, Suit, Updown } from "./card.ts";
import { makePiles, Pile } from "./pile.ts";
import { Foundation, makeFoundations } from "./foundation.ts";
import { Stock } from "./stock.ts";

export class Move {
  constructor(
    public piles: Pile[],
    public stock: Stock,
    public foundations: Foundation[],
  ) {}
}
