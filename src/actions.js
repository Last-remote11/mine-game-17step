import { 
  ENABLE_DARKMODE,
  CHANGE_ROUTE,
  CARD_TO_HAND,
  HAND_TO_CARD,
  START_GAME,
  DECIDE_HAND
} from './constants'


export const enableDarkMode = () => ({
  type: ENABLE_DARKMODE
})

export const changeRoute = ( route ) => ({
  type: CHANGE_ROUTE,
  payload: route
})

export const cardToHand = ( card ) => ({
  type: CARD_TO_HAND,
  payload: card
})

export const handToCard = ( card ) => ({
  type: HAND_TO_CARD,
  payload: card
})

export const startGame = () => ({
  type: START_GAME
})

export const decideHand = () => ({
  type: DECIDE_HAND
})