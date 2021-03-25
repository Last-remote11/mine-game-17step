import { 
  ENABLE_DARKMODE,
  CHANGE_ROUTE,
  CARD_TO_HAND,
  HAND_TO_CARD,
  START_GAME,
  DECIDE_HAND,
  DO_NOTHING,
  DISCARD_PENDING,
  DISCARD_SUCCESS,
  DISCARD_FAILED,
  DEAL_IN,
  DISCARD,
  START_PENDING,
  START_SUCCESS,
  START_FAILED,
} from './constants'

import { cardData } from './components/MockDatabase'
import { TextareaAutosize } from '@material-ui/core'

const initialStateBackground = {
  background: 'body { background-color: black; }'
}

export const enableDarkMode = (state = initialStateBackground, action={}) => {
    if (action.type === ENABLE_DARKMODE) {
        switch (state.background) {
            case 'body { background-color: black; }':
                return {...state, background: 'body { background-color: white; }'}
            case 'body { background-color: white; }':
                return {...state, background: 'body { background-color: black; }'}
            default:
                return state
        }
    }
    else {
        return state
    }
}

const initialRoute = {
  route: 'home'
}

export const changeRoute = (state=initialRoute, action={}) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {...state, route: action.payload}
    default:
      return state
  }
}

const initialCard = {
  cards: [],
  time: true,
  gameEnd: false,
  myScore: 32000,
  opponentScore: 32000,
  opponentDiscard: []
}

export const switchHand = (state=initialCard, action={}) => {
  
  switch (action.type) {

    case CARD_TO_HAND:
      for (var i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.order && state.cards[i].myHand === false) {
          state.cards[i].myHand = true
          break
        }
      }
      return {...state, time : Date.now()}

    case HAND_TO_CARD:
      for (var i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.order && state.cards[i].myHand === true) {
          state.cards[i].myHand = false
          break
        }
      }
      return {...state, time : Date.now()}

    case DISCARD_PENDING:
      return {...state, isPending: true, time: Date.now()}

    case DISCARD_SUCCESS:
      for (var i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.card.order && state.cards[i].myHand === false && !state.cards[i].discard) {
          state.cards[i].discard = true
          break
        }
      }
      return {...state, time : Date.now()}

    case DISCARD_FAILED:
      return {...state, error: action.payload}

    case DEAL_IN:
      for (var i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.card.order && state.cards[i].myHand === false && !state.cards[i].discard) {
          state.cards[i].discard = true
          break
        }
      }
      state.myScore -= action.payload.score
      state.opponentScore += action.payload.score
      return {...state, gameEnd: true, score: action.payload.card.score, isPending: false, time: Date.now()}

    case DO_NOTHING:
      return state


    case START_PENDING:
      return {...state, pending: true}

    case START_SUCCESS:
      for (var i of action.payload) {
        for (var j of cardData) {
          if (i === j.order) {
            state.cards.push({...j})
          }
        }
      }
      return {state, pending: false, time: Date.now()}

    case START_FAILED:
      return {...state, pending: action.payload}


    default:
      return state
  }
}


// const initialDiscarded = {
//   discarded: [],
//   isPending: false,
//   time: true
// }

// export const discardOrRon = (state=initialDiscarded, action={}) => {

//   switch (action.type) {

//     case DISCARD_PENDING:
//       return {...state, isPending: true, time: Date.now()}

//     case DISCARD_SUCCESS: // 안쏘임
//       state.discarded.push(action.payload)
//       return {...state, isPending: false, time: Date.now()}

//     case DEAL_IN:
//       return {...state, gameEnd: true, score: action.payload.score, isPending: false, time: Date.now()}

//     default:
//       return state
//   }

// }