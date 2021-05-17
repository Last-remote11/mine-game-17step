import { createReducer, createAction } from '@reduxjs/toolkit'
import { cardData } from './components/MockDatabase'
import { socket } from './components/WebSocket'

// 로그인, 배패 단계 **********************************************

export const setName = createAction('INPUT_NAME')
export const oneUser = createAction('ONE_USER')
export const twoUser = createAction('TWO_USER')
export const startGameReq = createAction('START_PENDING')
export const startSuccess = createAction('START_SUCCESS')

// 조패 단계 *********************************************

export const cardToHand = createAction('CARD_TO_HAND')
export const handToCard = createAction('HAND_TO_CARD')
export const decideHand = createAction('DECIDE_HAND')
export const opponentDecide = createAction('OPPONENT_DECIDE')

// 조패끝 결정 *********************************************

export const meDecide = createAction('ME_DECIDE')
export const hintAction = createAction('HINT')
export const initHint = createAction('INIT_HINT')

// 버림 단계 ***********************************************

export const discard = createAction('DISCARD_SUCCESS', function prepare(card) {
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
export const enableDarkMode = createAction('ENABLE_DARKMODE')

//

const initialStateBackground = {
  background: 'body { background-color: #1a1a1a; }'
}

export const enableDarkModeReducer = createReducer(initialStateBackground, (builder) => {
  builder
    .addCase(enableDarkMode, (state, action) => {
      switch (state.background) {
        case 'body { background-color: #1a1a1a; }':
          state.background = 'body { background-color: #e6e6e6; }'
          break
        case 'body { background-color: #e6e6e6; }':
          state.background = 'body { background-color: #1a1a1a; }'
      }
    })
})

export const initialRoomID = Math.floor(100000 + Math.random() * 900000)

const initialGameState = {
  serverConnected: false,
  cards: [],
  time: true,
  gameEnd: false,
  phase: 0,
  pending: false,
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

export const gameState = createReducer(initialGameState, (builder) => {
  builder
    .addCase(startGameReq, (state) => {
      state.pending = true
    })

    .addCase(startSuccess, (state, action) => {
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
      state.phase = 1 
      state.pending = false
      state.time = Date.now()
      state.gameEnd = false
      state.resultCards = []
      state.opponentAccept = false
    })

    .addCase(oneUser, (state) => {
      state.isTwoUser = false
      state.serverConnected = true
    })

    .addCase(twoUser, (state, action) => {
      state.isTwoUser = true
      state.roomID = action.payload
    })

    .addCase(meDecide, (state) => {
      if (state.opponentDecide) {
        state.phase = 2
        state.meDecide = true
        state.pending = false
      } else {
        state.meDecide = true
        state.pending = true
      }
    })

    .addCase(opponentDecide, (state) => {
      if (state.meDecide) {
        state.opponentDecide = true
        state.phase = 2
        state.pending = false
      } else {
        state.opponentDecide = true
      }
    })

    .addCase(cardToHand, (state, action) => {
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].order === action.payload.order && state.cards[i].myHand === false) {
          state.cards[i].myHand = true
          break
        }
      }
      state.time = Date.now()
    })

    .addCase(handToCard, (state, action) => {
      for (let idx = 0; idx < state.cards.length; idx++) {
        if (state.cards[idx].order === action.payload.order && state.cards[idx].myHand === true) {
          state.cards[idx].myHand = false
          break
        }
      }
      state.time = Date.now()
    })

    .addCase(hintAction, (state, action) => {
      for (let i of cardData) {
        for (let j of action.payload) {
          if (i.order === j) {
            state.hint.push(i)
          }
        }
      }
    })

    .addCase(initHint, (state) => {
      state.hint = []
    })

    .addCase(discard, (state, action) => {
      socket.emit('discard', action.payload)
      state.myTurn = false
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
      state.time = Date.now()
      state.pending = false
    })

    .addCase(opponentDiscard, (state, action) => {
      for (let i = 0; i < cardData.length; i++) {
        if (cardData[i].order === action.payload.order) {
          state.opponentDiscards.push(action.payload)
          break
        }        
      }
      if (!state.oya) {
        state.soon++
      }
      state.myTurn = true
    })

    .addCase(ron, (state) => {
      state.pending = true
      state.myTurn = false
    })

    .addCase(win, (state, action) => {
      state.myScore += action.payload.point
      state.opponentScore -= action.payload.point
      state.yakuman = action.payload.yakuman
      state.resultTiles = action.payload.tiles
      state.pan = action.payload.pan
      state.yakuNameArr = action.payload.yakuNameArr
      state.uradora = action.payload.uradora

      for (let card of cardData) {
        if (card.order === Number(action.payload.uradora))
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
      state.point = action.payload.point
      state.win = true
      state.lose = false
      state.gameEnd = true
    })

    .addCase(lose, (state, action) => {
      state.myScore -= action.payload.point
      state.opponentScore += action.payload.point
      state.yakuman = action.payload.yakuman
      state.resultTiles = action.payload.tiles
      state.pan = action.payload.pan
      state.yakuNameArr = action.payload.yakuNameArr
      state.uradora = action.payload.uradora

      for (let card of cardData) {
        if (card.order === Number(action.payload.uradora))
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
      state.point = action.payload.point
      state.win = false
      state.lose = true
      state.gameEnd = true
    })

    .addCase(draw, (state) => {
      state.draw = true
      state.gameEnd = true
    })

    .addCase(accept, (state, action) => {
      if (state.opponentScore < 0) {
        alert('승리')
      } else if (state.myScore < 0) {
        alert('패배')
      } else if (state.opponentAccept) { // 상대방도 확인 나도 확인
          state.phase = 0
          state.cards = []
          state.gameEnd = false
          state.dora = null
          state.myDiscards = []
          state.opponentDiscards = []
          state.meDecide = false
          state.opponentDecide = false
          state.opponentAccept = false
          state.myTurn = true
          state.meAccept = false
          state.draw = false
          state.soon = 0
          state.gook = state.gook + 1 
      } else { // 난 확인 상대방은 아직 확인x
          state.phase = 0
          state.pending = true
          state.cards = []
          state.gameEnd = false
          state.dora = null
          state.myDiscards = []
          state.opponentDiscards = []
          state.meDecide = false
          state.opponentDecide = false
          state.myTurn = true
          state.meAccept = true
          state.draw = false
          state.soon = 0
          state.gook = state.gook + 1 }
    })

    .addCase(opponentAccept, (state, action) => {
      if (state.meAccept) {
        state.phase = 0
        state.opponentAccept = true
        state.pending = false
        state.meAccept = false
      } else {
        state.opponentAccept = true
      }
    })
    
    .addCase(doNothing, (state) => {
      console.log('do nothing?')
    })
    // .addCase(, (state, action) => {

    // })
}) 