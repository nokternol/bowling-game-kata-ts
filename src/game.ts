export default class Game {
  private scores = Array(21).fill(0);
  private currRoll = 0;
  score() {
    return this.scores.reduce((acc, curr, i, arr) => {
        const frameEnd = i % 2 === 0;
        let score:  number;
        if (frameEnd) {
            const isSpare = curr + arr[i-1] === 10;
            score = isSpare ? curr + arr[i+1] : curr;
        } else {
            score = curr;
        }
        return acc+score;
    }, 0);
  }
  roll(pins: number) {
    this.scores[++this.currRoll] = pins;
  }
}
