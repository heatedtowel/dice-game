export default class Player {
  constructor(playerNumber) {
    this.name = ''
    this.color = ''
    this.selectedDice = []
    this.playerNumber = playerNumber
    this.items = []
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

  setColor(color) {
    this.color = color
  }

  static getTokens() {
    return this.tokens
  }

  setTokens(num) {
    this.tokens = num
  }

  addTokens(tokensToAdd) {
    this.tokens += tokensToAdd
  }

  addItem(newItem) {
    this.items.push(newItem)
  }

  removeItem(removedItem) {
    this.items.filter((item) => item !== removedItem)
  }
}