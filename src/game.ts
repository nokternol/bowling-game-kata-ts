function isSpare([roll1, roll2]: [number, number]) {
  return roll1 + roll2 === 10 && roll2 > 0;
}
function isStrike([roll1, roll2]: [number, number]) {
  return roll1 === 10 && roll2 === 0;
}

export default class Game {
  private scores = Array<number>(21).fill(0);
  private currRoll = 0;
  score() {
    return this.scores.reduce((acc, score, index, scores) => {
      const frameEnd = index % 2 !== 0;
      if (!frameEnd) return acc;

      const frameScore = score + scores[index - 1];
      let frameBonus = 0;
      if (frameScore === 10) {
        const frameScores: [number, number] = [scores[index - 1], score];
        if (isStrike(frameScores)) {
          frameBonus = scores[index + 1] + scores[index + 2];
        } 
        
        if (isSpare(frameScores)) {
          frameBonus = scores[index + 1];
        }
      }
      return acc + frameScore + frameBonus;
    }, 0);
  }
  roll(pins: number) {
    this.scores[this.currRoll++] = pins;
    // If a strike was rolled and it's the first roll of ther frame, then skip a roll (except on the final frame)
    if (pins === 10 && this.currRoll % 2 !== 0 && this.currRoll <= this.scores.length - 4)
      this.currRoll++;
  }
}
