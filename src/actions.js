import { 
  ENABLE_DARKMODE,
  CHANGE_ROUTE 
} from './constants'


export const enableDarkMode = () => ({
  type: ENABLE_DARKMODE
})

export const changeRoute = ( route ) => ({
  type: CHANGE_ROUTE,
  payload: route
})