import PlayerModel from './models/player'

export const initialState = {
  start: false,
  difficulty: '',
  initialNumber: 0,
  player1: new PlayerModel(1),
  player2: new PlayerModel(2),
  turn: 1,
  winner: null
};
export const ACTIONS = {
  reset: 'reset',
  setDifficulty: 'setDifficulty',
  setInitialNumber: 'setInitialNumber',
  playerDiceAddition: 'playerDiceAddition',
  playerDiceRemoval: 'playerDiceRemoval',
  playerRoll: 'playerRoll',
  win: 'win',
}

export function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return {
        ...initialState
      };
    case 'win':
      return {
        ...initialState,
        winner: action.payload.winner
      };
    case 'setDifficulty':
      return { ...state, difficulty: action.payload };
    case 'setInitialNumber':
      return {
        ...state,
        start: true,
        initialNumber: action.payload,
      };
    case 'playerDiceAddition':
      let diceAddition = {
        ...state
      };
      diceAddition[`player${action.payload.playerNumber}`] = {
        ...state[`player${action.payload.playerNumber}`],
        selectedDice: [...state[`player${action.payload.playerNumber}`].selectedDice, action.payload.die]
      }
      return diceAddition
    case 'playerDiceRemoval':
      let diceRemoval = {
        ...state
      };
      diceRemoval[`player${action.payload.playerNumber}`] = {
        ...state[`player${action.payload.playerNumber}`],
        selectedDice: [...state[`player${action.payload.playerNumber}`].selectedDice.filter(dice => dice !== action.payload.die)]
      }
      return diceRemoval
    case 'playerRoll':
      return {
        ...state,
        initialNumber: action.payload.newNumber,
        turn: action.payload.turn
      };
    default:
      throw new Error();
  };
};