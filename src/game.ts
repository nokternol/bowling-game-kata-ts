export default class Game {
  private scores = Array(21).fill(0);
  private currRoll = 0;
  score() {
    return this.scores.reduce((acc, score, index, scores) => {
        const frameEnd = index % 2 === 0;
        let result:  number;
        if (frameEnd) {
            const isSpare = score + scores[index-1] === 10;
            result = isSpare ? score + scores[index+1] : score;
        } else {
            result = score;
        }
        return acc+result;
    }, 0);
  }
  roll(pins: number) {
    this.scores[++this.currRoll] = pins;
  }
}
