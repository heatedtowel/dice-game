import PlayerModel from './models/player'

export const initialState = {
  start: false,
  difficulty: '',
  initialNumber: 0,
  player1: new PlayerModel(1),
  player2: new PlayerModel(2),
  tokensPerTurn: 0,
  turn: 1,
  winner: null
};
export const ACTIONS = {
  reset: 'reset',
  setDifficulty: 'setDifficulty',
  start: 'start',
  playerDiceAddition: 'playerDiceAddition',
  playerDiceRemoval: 'playerDiceRemoval',
  playerRoll: 'playerRoll',
  purchaseItem: 'purchaseItem',
  useItem: 'useItem',
  win: 'win',
}

export function reducer(state, action) {
  let { type, payload } = action
  switch (type) {
    case 'start':
      return {
        ...state,
        start: true,
        initialNumber: payload.initialNumber,
        tokensPerTurn: payload.tokensPerTurn,
        turn: state.player2.name,
      };
    case 'reset':
      return {
        ...initialState
      }
    case 'win':
      return {
        ...initialState,
        winner: payload.winner
      };
    case 'setDifficulty':
      return { ...state, difficulty: payload };
    case 'playerDiceAddition':
      let diceAddition = {
        ...state
      };
      diceAddition[`player${payload.playerNumber}`] = {
        ...state[`player${payload.playerNumber}`],
        selectedDice: [...state[`player${payload.playerNumber}`].selectedDice, payload.die],
        tokens: payload.tokens
      }
      return diceAddition
    case 'playerDiceRemoval':
      let diceRemoval = {
        ...state,
      };
      diceRemoval[`player${payload.playerNumber}`] = {
        ...state[`player${payload.playerNumber}`],
        selectedDice: [...state[`player${payload.playerNumber}`].selectedDice.filter(dice => dice !== payload.die)],
        tokens: payload.tokens
      }
      return diceRemoval
    case 'purchaseItem':
      let itemAddition = {
        ...state,
      };
      itemAddition[`player${payload.playerNumber}`] = {
        ...state[`player${payload.playerNumber}`],
        items: [...state[`player${payload.playerNumber}`].items, payload.item],
        tokens: payload.tokens
      }
      return itemAddition
    case 'playerItemRemoval':
      let ItemRemoval = {
        ...state,
      };
      ItemRemoval[`player${payload.playerNumber}`] = {
        ...state[`player${payload.playerNumber}`],
        selectedDice: [...state[`player${payload.playerNumber}`].selectedDice.filter(dice => dice !== payload.die)],
        tokens: payload.tokens
      }
      return ItemRemoval
    case 'playerRoll':
      let playerRoll = {
        ...state,
        initialNumber: payload.newNumber,
        turn: payload.turn
      };
      playerRoll[`player${payload.playerNumber}`] = {
        ...state[`player${payload.playerNumber}`],
        selectedDice: [],
        tokens: payload.tokens + state.tokensPerTurn
      }
      return playerRoll
    default:
      throw new Error();
  };
};