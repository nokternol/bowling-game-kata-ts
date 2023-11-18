export default class Game {
  private scores = Array(21).fill(0);
  private currRoll = 0;
  private spare = false;
  score() {
    return this.scores.reduce((acc, curr) => acc+curr, 0);
  }
  roll(pins: number) {
    this.scores[++this.currRoll] = pins;
    if (this.spare) {
        this.scores[this.currRoll-1] += pins;
        this.spare = false;
    }
    if (this.currRoll % 2 === 0 && this.scores[this.currRoll-1] + pins === 10) {
        this.spare = true;
    }

  }
}
