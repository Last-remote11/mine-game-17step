import { 
  ENABLE_DARKMODE,
  CHANGE_ROUTE,
  SWITCH_HAND 
} from './constants'


export const enableDarkMode = () => ({
  type: ENABLE_DARKMODE
})

export const changeRoute = ( route ) => ({
  type: CHANGE_ROUTE,
  payload: route
})

export const switchHand = ( card ) => ({
  type: SWITCH_HAND,
  payload: card
})