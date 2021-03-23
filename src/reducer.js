import { 
  ENABLE_DARKMODE,
  CHANGE_ROUTE,
  CARD_TO_HAND,
  HAND_TO_CARD,
  START_GAME,
  DECIDE_HAND
} from './constants'

import { playerHand } from './components/MockDatabase'

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
  cards : playerHand,
  hello : true
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
      return {...state, hello : action.payload}

    case HAND_TO_CARD:
      for (var i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.order && state.cards[i].myHand === true) {
          state.cards[i].myHand = false
          break
        }
      }
      return {...state, hello : action.payload}

    default:
      return state
  }
}

