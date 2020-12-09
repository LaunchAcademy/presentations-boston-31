// have a first name [x]
// have a last name [x]
// have a full name [x]
// start with an empty list of scores [x]
// have a way to register a score [x]
// has an average score [x]
// has a lowest score []

import Snowboarder from "../Snowboarder.js"

describe("Snowboarder class", () => {
  const firstName = "Shaun"
  const lastName = "White"
  let newBoarder

  beforeEach(() => {
    newBoarder = new Snowboarder(firstName, lastName)
  })

  it("has a first name", () => {
    expect(newBoarder.firstName).toEqual(firstName)
  })

  it("has a last name", () => {
    expect(newBoarder.lastName).toEqual(lastName)
  })

  it("has a full name", () => {
    expect(newBoarder.fullName()).toEqual(`${firstName} ${lastName}`)
  })

  it("starts with an empty array of scores", () => {
    expect(newBoarder.scores).toEqual([])
  })
  it("can register a new score to scores", () => {
    newBoarder.registerScore(10)
    expect(newBoarder.scores).toEqual([10])
  })
  it("has an average score", () => {
    newBoarder.registerScore(100)
    newBoarder.registerScore(50)

    expect(newBoarder.getAverageScore()).toEqual(75)
  })
})
