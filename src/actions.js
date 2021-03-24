import { 
  ENABLE_DARKMODE,
  CHANGE_ROUTE,
  CARD_TO_HAND,
  HAND_TO_CARD,
  START_GAME,
  DECIDE_HAND,
  DISCARD_PENDING,
  DISCARD_SUCCESS,
  DISCARD_FAILED,
  DEAL_IN,
  DO_NOTHING,
  DISCARD
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


export const discard = ( card ) => async ( dispatch ) => {
  dispatch({ type: DISCARD_PENDING })

  const res = await fetch('http://localhost:3001/discard',
  {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
    card: card
  })
})
  const data = await res.json()
  
  if (!data.ron) { // 버렸는데 안쏘임
    dispatch({
      type: DISCARD_SUCCESS,
      payload: data
    })
  } else { // 쏘임
    dispatch({
      type: DEAL_IN,
      payload: data
    })
  }

}

export const doNothing = () => ({
  type: DO_NOTHING
})