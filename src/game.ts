export default class Game {
  private scores = Array(21).fill(0);
  private currRoll = 0;
  score() {
    return this.scores.reduce((acc, score, index, scores) => {
        const frameEnd = index % 2 !== 0;
        if (!frameEnd) return acc;

        let frameScore: number = score + scores[index-1];
        if (frameScore === 10) {
          if (score === 0) { //strike
            frameScore += scores[index+1] + scores[index+2];
          } else { //spare
            frameScore += scores[index+1];
          }
        }
        return acc+frameScore;
    }, 0);
  }
  roll(pins: number) {
    this.scores[this.currRoll++] = pins;
  }
}
