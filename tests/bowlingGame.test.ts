import { beforeEach, describe, expect, it } from "vitest";
import Game from "../src/game";
describe("bowling game tests", () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });

  it("gutter game", () => {
    for (let i = 0; i < 20; i++) game.roll(0);
    expect(game.score()).to.equal(0);
  });
  
  it("single pin game", () => {
    for (let i = 0; i < 20; i++) game.roll(1);
    expect(game.score()).to.equal(20);
  });
});
