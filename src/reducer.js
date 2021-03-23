import { 
  ENABLE_DARKMODE,
  CHANGE_ROUTE,
  SWITCH_HAND
} from './constants'

import { MockDatabase } from './components/MockDatabase'

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
  cards : MockDatabase
}

export const switchHand = (state=initialCard, action={}) => {
  switch (action.type) {
    case SWITCH_HAND:
      let cardId = action.payload.order
      for (var i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === cardId) {
          state.cards[i].myHand === true
          ? state.cards[i].myHand = false 
          : state.cards[i].myHand = true
          break
        }
      }
      return state
    default:
      return state
  }
}

