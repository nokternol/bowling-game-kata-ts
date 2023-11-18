import { beforeEach, describe, expect, it } from "vitest";
import Game from "../src/game";
describe("bowling game tests", () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });

  function rollMany(times: number, pins: number) {
    for (let i = 0; i < times; i++) game.roll(pins);
  }
  const roll = {
    a: {
      spare: () => {
        rollMany(2, 5);
      },
      strike: () => {
        game.roll(10);
        game.roll(0);
      },
    },
  };

  it("gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).to.equal(0);
  });

  it("single pin game", () => {
    rollMany(20, 1);
    expect(game.score()).to.equal(20);
  });

  it("single spare game", () => {
    roll.a.spare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).to.equal(16);
  });

  it("single strike game", () => {
    roll.a.strike();
    rollMany(2, 3)
    rollMany(17, 0);
    expect(game.score()).to.equal(22);
  });
});
