class Snowboarder {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.scores = []
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  registerScore(score) {
    this.scores.push(score)
  }

  getAverageScore() {
    let sum = 0

    this.scores.forEach((score) => {
      sum += score
    })

    let avg = sum / this.scores.length
    return avg
  }
}

export default Snowboarder
