export default class Player {
  constructor(playerNumber) {
    this.name = ''
    this.selectedDice = []
    this.playerNumber = playerNumber
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
}