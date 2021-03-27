import { 
  ENABLE_DARKMODE,
  CHANGE_PHASE,
  CARD_TO_HAND,
  HAND_TO_CARD,
  DECIDE_HAND,
  DISCARD_PENDING,
  DISCARD_SUCCESS,
  DISCARD_FAILED,
  DEAL_IN,
  DO_NOTHING,
  START_PENDING,
  START_SUCCESS,
  START_FAILED,
} from './constants'

import { io } from "socket.io-client";


export const enableDarkMode = () => ({
  type: ENABLE_DARKMODE
})

export const changePhase = ( Phase ) => ({
  type: CHANGE_PHASE,
  payload: Phase
})

export const cardToHand = ( card ) => ({
  type: CARD_TO_HAND,
  payload: card
})

export const handToCard = ( card ) => ({
  type: HAND_TO_CARD,
  payload: card
})

export const decideHand = () => ({
  type: DECIDE_HAND
})


export const discard = ( card ) => async ( dispatch ) => {
  dispatch({ type: DISCARD_PENDING })


  try {
    const res = await fetch('http://localhost:3001/discard',
    {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      card
    })
  })
    const data = await res.json()

    if (!data.card.ron) { // 버렸는데 안쏘임
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
  } catch(error) {
    dispatch({
      type: DISCARD_FAILED,
      payload: error
    })
  }

}

export const startGame = () => async ( dispatch ) => {
  dispatch({ type: START_PENDING })

  try {
    const res = await fetch('http://localhost:3001/start',
    {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
    })
    const data = await res.json()

    dispatch({
      type: START_SUCCESS,
      payload: data
    })
  } catch(error) {
    dispatch({
      type: START_FAILED,
      payload: error
    })
  }
}
    



export const doNothing = () => ({
  type: DO_NOTHING
})
