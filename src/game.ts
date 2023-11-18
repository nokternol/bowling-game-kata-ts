export default class Game {
  private _score = 0;
  score() {
    return this._score;
  }
  roll(pins: number) {
    this._score += pins;
  }
}
