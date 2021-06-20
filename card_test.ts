import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts";
import { Card, Color, Rank, Suit, Updown } from "./card.ts";

Deno.test("Card.stringToCard", () => {
  const card = Card.stringToCard("C13");
  assertEquals(card.color, Color.Black);
  assertEquals(card.rank, Rank.King);
  assertEquals(card.suit, Suit.Club);
  assertEquals(card.updown, Updown.Up);
});
