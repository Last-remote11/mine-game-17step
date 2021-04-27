import { createAction } from '@reduxjs/toolkit'
import { socket } from './components/WebSocket'


export const enableDarkMode = createAction('ENABLE_DARKMODE')


// 로그인, 배패 단계 **********************************************

export const setName = createAction('INPUT_NAME')
// ( text ) => ({
//   type: INPUT_NAME,
//   payload: text
// })

// export const setRoomID = ( roomID ) => ({
//   type: SET_ROOMID,
//   payload: roomID
// })

export const oneUser = createAction('ONE_USER')

export const twoUser = createAction('TWO_USER')
// (roomID) => ({
//   type: TWO_USER,
//   payload: roomID
// })

export const startGameReq = createAction('START_PENDING')

export const startSuccess = createAction('START_SUCCESS')


// 조패 단계 *********************************************

export const cardToHand = createAction('CARD_TO_HAND')

export const handToCard = createAction('HAND_TO_CARD')

export const decideHand = createAction('DECIDE_HAND')

export const opponentDecide = createAction('OPPONENT_DECIDE')

// 조패끝 결정 *********************************************

export const meDecide = createAction('ME_DECIDE')

// export const changePhase = ( Phase, socket ) => async ( dispatch ) => {

//   dispatch({ type: START_PENDING })

//   await socket.emit('decide', true)

//   // 상대방도 준비완료해야 넘어감
//   dispatch({
//     type: CHANGE_PHASE,
//     payload: Phase
//   })
// };

export const hintAction = createAction('HINT')

export const initHint = createAction('INIT_HINT')

// 버림 단계 ***********************************************

export const discard = createAction('DISCARD_SUCCESS', function prepare(card) {
  socket.emit('discard', card)
  return {
    payload: card
  }
})

export const opponentDiscard = createAction('OPPONENT_DISCARD')

export const ron = createAction('RON')



// 결과 ******************************************************

export const win = createAction('WIN')

export const lose = createAction('LOSE')

export const draw = createAction('DRAW')

export const accept = createAction('ACCEPT')

export const opponentAccept = createAction('OPPONENT_ACCEPT')

export const newGameReq = createAction('ACCEPT')

export const playerLeft = createAction('PLAYER_LEFT')

export const doNothing = createAction('DO_NOTHING')