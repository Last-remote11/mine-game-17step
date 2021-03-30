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
  WS_CONNECT,
  OPPONENT_DECIDE,
  ITSMYTURN,
  INPUT_NAME,
  SET_ROOMID
} from './constants'

import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'

export const socket = io("http://localhost:3001");


export const enableDarkMode = () => ({
  type: ENABLE_DARKMODE
})



// 로그인, 배패 단계 **********************************************

export const setName = ( text ) => ({
  type: INPUT_NAME,
  payload: text
})

export const setRoomID = ( roomID ) => ({
  type: SET_ROOMID,
  payload: roomID
})


export const startGame = (myName) => async ( dispatch ) => {
  dispatch({ type: START_PENDING })

  await socket.emit('login', {
    name: myName
  })

  await socket.on('login', data =>   
  dispatch({
    type: START_SUCCESS,
    payload: data
  }
))



  // try {
  //   const res = await fetch('http://localhost:3001/start',
  //   {
  //     method: 'put',
  //     headers: {'Content-Type': 'application/json'},
  //   })
  //   const data = await res.json()

  //   dispatch({
  //     type: START_SUCCESS,
  //     payload: data
  //   })
  // } catch(error) {
  //   dispatch({
  //     type: START_FAILED,
  //     payload: error
  //   })
  // }
}

// 조패 단계 *********************************************

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


export const opponentDecide = () => ({
  type: OPPONENT_DECIDE
})

// 조패끝 결정 *********************************************

export const changePhase = ( Phase ) => async ( dispatch ) => {

  dispatch({ type: START_PENDING })

  await socket.emit('decide', true)

  // 상대방도 준비완료해야 넘어감
  await socket.on('opponentDecide', data =>   
  dispatch({
    type: CHANGE_PHASE,
    payload: Phase
  })
)
};

// 버림 단계 ***********************************************

export const discard = ( card ) => async ( dispatch ) => {
  dispatch({ type: DISCARD_PENDING })

  await socket.emit('discard', card)

  await socket.on('discard', data =>   
  dispatch({
    type: DISCARD_SUCCESS,
    payload: data
  })
)

  // try {

  //   const res = await fetch('http://localhost:3001/discard',
  //   {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //     card
  //   })
  // })
  //   const data = await res.json()

  //   if (!data.card.ron) { // 버렸는데 안쏘임
  //     dispatch({
  //       type: DISCARD_SUCCESS,
  //       payload: data
  //     })
  //   } else { // 쏘임
  //     dispatch({
  //       type: DEAL_IN,
  //       payload: data
  //     })
  //   }
  // } catch(error) {
  //   dispatch({
  //     type: DISCARD_FAILED,
  //     payload: error
  //   })
  // }

}


    

// 강제로 턴을 가져옴 (테스트용)
export const itsMyTurn = () => ({
  type: ITSMYTURN
})

export const doNothing = () => ({
  type: DO_NOTHING
})

