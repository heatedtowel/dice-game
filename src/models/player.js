export default class Player {
  constructor(playerNumber) {
    this.selectedDice = []
    this.playerNumber = playerNumber
  }

  getSelectedDice() {
    return this.selectedDice
  }

  setSelectedDice(selectedDice) {
    this.selectedDice = selectedDice
  }
}