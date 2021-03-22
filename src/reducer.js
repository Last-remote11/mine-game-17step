import { 
  ENABLE_DARKMODE,
  CHANGE_ROUTE 
} from './constants'

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

