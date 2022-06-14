export default class Player {
  constructor(playerNumber) {
    this.name = ''
    this.selectedDice = []
    this.playerNumber = playerNumber
    this.tokens = 0
  }

  getSelectedDice() {
    return this.selectedDice
  }

  setSelectedDice(selectedDice) {
    this.selectedDice = selectedDice
  }

  setName(name) {
    this.name = name
  }

  static getTokens() {
    return this.tokens
  }

  setTokens(num) {
    this.tokens = num
  }
}