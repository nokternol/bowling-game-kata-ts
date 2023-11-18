import { describe, expect, it } from "vitest";
import Game from "../src/game";
describe("bowling game tests", () => {
  it("gutter game", () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) game.roll(0);
    expect(game.score()).to.equal(0);
  });
  it("single pin game", () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) game.roll(1);
    expect(game.score()).to.equal(20);
  });
});
