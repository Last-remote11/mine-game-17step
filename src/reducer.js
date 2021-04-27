import { cardData } from './components/MockDatabase'

const initialStateBackground = {
  background: 'body { background-color: #1a1a1a; }'
}

export const enableDarkMode = (state = initialStateBackground, action={}) => {
  if (action.type === 'ENABLE_DARKMODE') {
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

const initialState = {
  serverConnected: false,
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
  roomID: initialRoomID,
  resultTiles: [],
  yakuNameArr: [],
  point: 0,
  win: false,
  lose: false,
  meAccept: false,
  opponentAccept: false,
  resultCards: [],
  oya: null,
  gook: 1,
  soon: 0,
  draw: false,
  uradora: {img: 'hello?'},
  hint:[]
}



export const gameState = (state=initialState, action={}) => {
  
  switch (action.type) {

    // 로그인, 배패 단계***********************************************

    case 'INPUT_NAME':
      return {...state, myName: action.payload}
    
    case 'SET_ROOMID':
      return {...state, roomID: action.payload}

    case 'START_PENDING':
      return {...state, pending: true}

    case 'START_SUCCESS':
      for (let i of action.payload.playerHand) {
        for (let j of cardData) {
          if (i === j.order) {
            state.cards.push({...j})
          }
        }
      }
      for (let k of cardData) {
        if (k.order === action.payload.dora) {
          state.dora = k
        }
      }
        
      if (state.oya === null) {
        state.oya = action.payload.myTurn // 맨 처음
      }
      if (state.oya) {
        state.myTurn = false
        state.oya = false
      } else {
        state.myTurn = true
        state.oya = true
      }
      return {...state, phase: 1, pending: false, time: Date.now(), gameEnd: false, resultCards: []}

    case 'ONE_USER':
      return {...state, isTwoUser: false, serverConnected: true}

    case 'TWO_USER':
      return {...state, isTwoUser: true, roomID: action.payload}
      
    case 'START_FAILED':
      return {...state, pending: action.payload}

    case 'ME_DECIDE':
      if (state.opponentDecide) {
        return {...state, phase: 2, meDecide: true, pending: false}
      } else {
        return {...state, meDecide: true, pending: true}
      }


    case 'OPPONENT_DECIDE':
      if (state.meDecide) {
        return {...state, opponentDecide: true, phase: 2, pending: false}
      } else {
        return {...state, opponentDecide: true}
      }
    // 조패 단계******************************************************

    case 'CARD_TO_HAND':
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.order && state.cards[i].myHand === false) {
          state.cards[i].myHand = true
          break
        }
      }
      return {...state, time : Date.now()}

    case 'HAND_TO_CARD':
      for (let idx = 0; idx < state.cards.length; idx++) {
        if (state.cards[idx].order === action.payload.order && state.cards[idx].myHand === true) {
          state.cards[idx].myHand = false
          break
        }
      }
      return {...state, time : Date.now()}

    

      
    case 'HINT':
      for (let i of cardData) {
        for (let j of action.payload) {
          if (i.order === j) {
            state.hint.push(i)
          }
        }
      }
      return {...state}

    case 'INIT_HINT':
      return {...state, hint:[]}

    // 패 하나씩 버리는 단계 *********************************************

    case 'DISCARD_PENDING':
      return {...state, pending: true, time: Date.now()}
        
    case 'DISCARD_SUCCESS':
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.order && state.cards[i].myHand === false && !state.cards[i].discard) {
          state.cards[i].discard = true
          state.myDiscards.push(state.cards[i])
          break
        }
      }
      if (state.oya) {
        state.soon++
      }
      return {...state, time : Date.now(), myTurn: false, pending: false}

    case 'DISCARD_FAILED':
      return {...state, error: action.payload}

    case 'OPPONENT_DISCARD':
      for (let i = 0; i < cardData.length; i++) {
        if (cardData[i].order === action.payload.order) {
          state.opponentDiscards.push(action.payload)
          break
        }        
      }
      if (!state.oya) {
        state.soon++
      }
      return {...state, myTurn: true}
    

    case 'RON':
      return {...state, pending: true, myTurn: false}

      // 개별 결과

    case 'WIN':
      state.myScore += action.payload.point
      state.opponentScore -= action.payload.point
      state.yakuman = action.payload.yakuman
      state.resultTiles = action.payload.tiles
      state.pan = action.payload.pan
      state.yakuNameArr = action.payload.yakuNameArr

      for (let card of cardData) {
        if (card.order === action.payload.uradora)
        state.uradora = card
      }

      for (let i = 0; i < state.resultTiles.length; i++) {
        for (let j = 0; j < cardData.length; j++) {
          if (state.resultTiles[i] === cardData[j].order) {
            state.resultCards.push(cardData[j])
            break
          }
        }
      }
      state.resultCards.sort((a, b) => a - b)
      return { ...state,
        gameEnd: true,
        point: action.payload.point, 
        win: true,
        lose: false,
        }

    case 'LOSE':
      state.myScore -= action.payload.point
      state.opponentScore += action.payload.point
      state.yakuman = action.payload.yakuman
      state.resultTiles = action.payload.tiles
      state.pan = action.payload.pan
      state.yakuNameArr = action.payload.yakuNameArr
      state.uradora = action.payload.uradora

      for (let card of cardData) {
        if (card.order === action.payload.uradora)
        state.uradora = card
      }

      for (let i = 0; i < state.resultTiles.length; i++) {
        for (let j = 0; j < cardData.length; j++) {
          if (state.resultTiles[i] === cardData[j].order) {
            state.resultCards.push(cardData[j])
            break
          }
        }
      }
      return { ...state,
        gameEnd: true,
        point: action.payload.point, 
        win: false,
        lose: true
        }

    case 'DRAW':
      state.draw = true
      return {...state, gameEnd: true}
      // 새게임

    case 'ACCEPT':
      if (state.opponentScore < 0) {
        alert('승리')
      if (state.myScore < 0) {
        alert('패배')
      }
      }
      if (state.opponentAccept) {
        return {...state,
          phase: 0,
          cards: [],
          gameEnd: false,
          dora: null,
          myDiscards: [],
          opponentDiscards: [],
          meDecide: false,
          opponentDecide: false,
          myTurn: true,
          meAccept: false,
          draw: false,
          soon: 0,
          gook: state.gook + 1 }
      } else {
        return {...state,
          phase: 0,
          pending: true,
          cards: [],
          gameEnd: false,
          dora: null,
          myDiscards: [],
          opponentDiscards: [],
          meDecide: false,
          opponentDecide: false,
          myTurn: true,
          meAccept: true,
          draw: false,
          soon: 0,
          gook: state.gook + 1 }
      }

    case 'OPPONENT_ACCEPT':
      if (state.meAccept) {
        return {...state, phase: 0, opponentAccept: true, pending: false, meAccept: false}
      } else {
        return {...state, opponentAccept: true}
      }

      // 기타 **************************************************************
    
    case 'PLAYER_LEFT':
      return {...state}

    case 'DO_NOTHING':
      return state

    case 'WS_CONNECT':
      return {...state, connect: true}

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