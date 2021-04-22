import { socket } from './components/WebSocket'
import { 
  ENABLE_DARKMODE,
  CHANGE_PHASE,
  CARD_TO_HAND,
  HAND_TO_CARD,
  DECIDE_HAND,
  DISCARD_PENDING,
  DISCARD_SUCCESS,
  DO_NOTHING,
  START_PENDING,
  START_SUCCESS,
  OPPONENT_DECIDE,
  OPPONENT_DISCARD,
  INPUT_NAME,
  SET_ROOMID,
  ONE_USER,
  TWO_USER
} from './constants'



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

export const oneUser = () => ({
  type: ONE_USER
})

export const twoUser = () => ({
  type: TWO_USER
})

export const startGameReq = () => ({
  type: START_PENDING
})

export const startSuccess = ( data ) => ({
  type: START_SUCCESS,
  payload: data
})


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

export const changePhase = ( Phase, socket ) => async ( dispatch ) => {

  dispatch({ type: START_PENDING })

  await socket.emit('decide', true)

  // 상대방도 준비완료해야 넘어감
  dispatch({
    type: CHANGE_PHASE,
    payload: Phase
  })
};

export const hintAction = ( card ) => ({
  type: 'HINT',
  payload: card
})

export const initHint = () => ({
  type: 'INIT_HINT'
})

// 버림 단계 ***********************************************

export const discard = ( card, socket ) => async ( dispatch ) => {
  dispatch({ type: DISCARD_PENDING })

  await socket.emit('discard', card)

  dispatch({
    type: DISCARD_SUCCESS,
    payload: card
  })
}

export const opponentDiscard = ( card ) => ({
  type: OPPONENT_DISCARD,
  payload: card
})


export const ron = () => ({
  type: 'RON'
})



// 결과 ******************************************************

export const win = ( result ) => ({
  type: 'WIN',
  pan: result.pan,
  yakuman: result.yakuman,
  point: result.point,
  yakuNameArr: result.yakuNameArr,
  tiles: result.tiles,
  uradora: result.uradora
})

export const lose = ( result ) => ({
  type: 'LOSE',
  pan: result.pan,
  yakuman: result.yakuman,
  point: result.point,
  yakuNameArr: result.yakuNameArr,
  tiles: result.tiles,
  uradora: result.uradora
})

export const draw = () => ({
  type: 'DRAW'
})

export const accept = () => ({
  type: 'ACCEPT'
})

export const opponentAccept = () => ({
  type: 'OPPONENT_ACCEPT'
})

export const newGameReq = () => async (dispatch) => {
  dispatch({ type: START_PENDING })

  await socket.emit('newGame')

  dispatch({ type: 'ACCEPT'})
}

export const doNothing = () => ({
  type: DO_NOTHING
})