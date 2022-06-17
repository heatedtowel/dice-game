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
  playerItemRemoval: 'playerItemRemoval',
  minusOpponentTokens: 'minusOpponentTokens',
  skipTurn: 'skipTurn',
  giftBasket: 'giftBasket',
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
      console.log(payload.item)
      let itemRemoval = {
        ...state,
      };
      itemRemoval[`player${payload.playerNumber}`] = {
        ...state[`player${payload.playerNumber}`],
        items: [...state[`player${payload.playerNumber}`].items.filter(item => item.name !== payload.item)],
      }
      return itemRemoval
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
    case 'minusOpponentTokens':
      let opponentTokens = {
        ...state,
      };
      opponentTokens[`player${payload.opposingPlayer}`] = {
        ...state[`player${payload.opposingPlayer}`],
        tokens: state[`player${payload.opposingPlayer}`].tokens - payload.minusTokenAmmount
      }
      return opponentTokens
    case 'giftBasket':
      let giftBasket = {
        ...state,
      };
      giftBasket[`player${payload.playerNumber}`] = {
        ...state[`player${payload.playerNumber}`],
        tokens: state.player1.tokens + payload.additionalTokens
      }
      return giftBasket
    case 'skipTurn':
      let skipTurn = {
        ...state,
        turn: payload.turn
      };
      return skipTurn
    default:
      throw new Error();
  };
};