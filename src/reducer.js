import { 
  ENABLE_DARKMODE,
  CHANGE_PHASE,
  CARD_TO_HAND,
  HAND_TO_CARD,
  START_GAME,
  DECIDE_HAND,
  DO_NOTHING,
  DISCARD_PENDING,
  DISCARD_SUCCESS,
  DISCARD_FAILED,
  DEAL_IN,
  DISCARD,
  START_PENDING,
  START_SUCCESS,
  START_FAILED,
  WS_CONNECT,
  OPPONENT_DECIDE,
  OPPONENT_DISCARD,
  ITSMYTURN,
  INPUT_NAME,
  SET_ROOMID,
  ONE_USER,
  TWO_USER
} from './constants'

import { cardData } from './components/MockDatabase'

const initialStateBackground = {
  background: 'body { background-color: #1a1a1a; }'
}

export const enableDarkMode = (state = initialStateBackground, action={}) => {
  if (action.type === ENABLE_DARKMODE) {
    switch (state.background) {
      case 'body { background-color: #1a1a1a; }':
        return {...state, background: 'body { background-color: #e6e6e6; }'}
      case 'body { background-color: #e6e6e6; }':
        return {...state, background: 'body { background-color: #1a1a1a; }'}
      default:
        return state
    }
  }
  else {
    return state
  }
}

export const initialRoomID = Math.floor(100000 + Math.random() * 900000)

const initialCard = {
  cards: [],
  time: true,
  gameEnd: false,
  phase: 0,
  myScore: 35000,
  opponentScore: 35000,
  dora: null,
  myDiscards: [],
  opponentDiscards: [],
  meDecide: false,
  opponentDecide: false,
  myTurn: true,
  isTwoUser: false,
  roomID: initialRoomID
}



export const switchHand = (state=initialCard, action={}) => {
  
  switch (action.type) {

    // 로그인, 배패 단계***********************************************

    case INPUT_NAME:
      return {...state, myName: action.payload}
    
    case SET_ROOMID:
      return {...state, roomID: action.payload}

    case START_PENDING:
      return {...state, pending: true}

    case START_SUCCESS:
      for (var i of action.payload.playerHand) {
        for (var j of cardData) {
          if (i === j.order) {
            state.cards.push({...j})
          }
        }
      }
      for (var k of cardData) {
        if (k.order === action.payload.dora) {
          state.dora = k
        }
      }

      return {...state, phase: 1, pending: false, time: Date.now(), myTurn: action.payload.myTurn}

    case ONE_USER:
      return {...state, isTwoUser: false}

    case TWO_USER:
      return {...state, isTwoUser: true}
      
    case START_FAILED:
      return {...state, pending: action.payload}

    case CHANGE_PHASE:
      if (state.opponentDecide) {
        return {...state, phase: action.payload, meDecide: true, pending: false}
      } else {
        return {...state, meDecide: true}
      }


    // 조패 단계******************************************************

    case CARD_TO_HAND:
      for (var i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.order && state.cards[i].myHand === false) {
          state.cards[i].myHand = true
          break
        }
      }
      return {...state, time : Date.now()}

    case HAND_TO_CARD:
      for (var i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.order && state.cards[i].myHand === true) {
          state.cards[i].myHand = false
          break
        }
      }
      return {...state, time : Date.now()}

    
    case OPPONENT_DECIDE:
      if (state.meDecide) {
        return {...state, opponentDecide: true, phase: 2, pending: false}
      } else {
        return {...state, opponentDecide: true}
      }
      


    // 패 하나씩 버리는 단계 *********************************************

    case DISCARD_PENDING:
      return {...state, pending: true, time: Date.now()}
        
    case DISCARD_SUCCESS:
      for (var i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.order && state.cards[i].myHand === false && !state.cards[i].discard) {
          state.cards[i].discard = true
          state.myDiscards.push(state.cards[i])
          break
        }
      }
      return {...state, time : Date.now(), myTurn: false, pending: false}

    case DISCARD_FAILED:
      return {...state, error: action.payload}

    case OPPONENT_DISCARD:
      for (var i = 0; i < cardData.length; i++) {
        if (cardData[i].order === action.payload.order) {
          state.opponentDiscards.push(action.payload)
          break
        }
        
      }
      return {...state, myTurn: true}
      

    case DEAL_IN:
      for (var i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.card.order && state.cards[i].myHand === false && !state.cards[i].discard) {
          state.cards[i].discard = true
          break
        }
      }
      state.myScore -= action.payload.score
      state.opponentScore += action.payload.score
      return {...state, gameEnd: true, score: action.payload.card.score, pending: false, time: Date.now()}

    case 'RON':
      return {...state, pending: true, myTurn: false}

      // 기타 **************************************************************

    case DO_NOTHING:
      return state

    case WS_CONNECT:
      return {...state, connect: true}

    // 강제로 턴을 가져옴 (테스트용)
    case ITSMYTURN:
      return {...state, myTurn: true}

    default:
      return state
  }
}


// const initialDiscarded = {
//   discarded: [],
//   pending: false,
//   time: true
// }

// export const discardOrRon = (state=initialDiscarded, action={}) => {

//   switch (action.type) {

//     case DISCARD_PENDING:
//       return {...state, isPending: true, time: Date.now()}

//     case DISCARD_SUCCESS: // 안쏘임
//       state.discarded.push(action.payload)
//       return {...state, isPending: false, time: Date.now()}

//     case DEAL_IN:
//       return {...state, gameEnd: true, score: action.payload.score, isPending: false, time: Date.now()}

//     default:
//       return state
//   }

// }