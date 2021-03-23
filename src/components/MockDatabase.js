import S1 from './CardImage/S1.png'
import S2 from './CardImage/S2.png'
import S3 from './CardImage/S3.png'
import S4 from './CardImage/S4.png'
import S5 from './CardImage/S5.png'
import S6 from './CardImage/S6.png'
import S7 from './CardImage/S7.png'
import S8 from './CardImage/S8.png'
import S9 from './CardImage/S9.png'
import M1 from './CardImage/M1.png'
import M2 from './CardImage/M2.png'
import M3 from './CardImage/M3.png'
import M4 from './CardImage/M4.png'
import M5 from './CardImage/M5.png'
import M6 from './CardImage/M6.png'
import M7 from './CardImage/M7.png'
import M8 from './CardImage/M8.png'
import M9 from './CardImage/M9.png'
import T1 from './CardImage/T1.png'
import T2 from './CardImage/T2.png'
import T3 from './CardImage/T3.png'
import T4 from './CardImage/T4.png'
import T5 from './CardImage/T5.png'
import T6 from './CardImage/T6.png'
import T7 from './CardImage/T7.png'
import T8 from './CardImage/T8.png'
import T9 from './CardImage/T9.png'
import E from './CardImage/E.png'
import S from './CardImage/S.png'
import W from './CardImage/W.png'
import N from './CardImage/N.png'
import WH from './CardImage/WH.png'
import GN from './CardImage/GN.png'
import CN from './CardImage/CN.png'

// S-삭수패 M-만수패 T-통수패
// E-동 S-남 W-서 N-북
// WH-백 GN-발 CN-중




const m1 = {
  name: "M1",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: M1,
  number: 1, // 숫자
  royal: true, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 1, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}
const m2 = {
  name: "M2",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: M2,
  number: 2, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 2, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const m3 = {
  name: "M3",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: M3,
  number: 3, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 3, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const m4 = {
  name: "M4",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: M4,
  number: 4, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 4, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const m5 = {
  name: "M5",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: M5,
  number: 5, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 5, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const m6 = {
  name: "M6",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: M6,
  number: 6, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 6, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const m7 = {
  name: "M7",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: M7,
  number: 7, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 7, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const m8 = {
  name: "M8",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: M8,
  number: 8, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 8, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const m9 = {
  name: "M9",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: M9,
  number: 9, // 숫자
  royal: true, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 9, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}



const t1 = {
  name: "T1",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: T1,
  number: 1, // 숫자
  royal: true, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 11, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const t2 = {
  name: "T2",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: T2,
  number: 2, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 12, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const t3 = {
  name: "T3",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: T3,
  number: 3, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 13, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const t4 = {
  name: "T4",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: T4,
  number: 4, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 14, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const t5 = {
  name: "T5",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: T5,
  number: 5, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 15, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const t6 = {
  name: "T6",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: T6,
  number: 6, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 16, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const t7 = {
  name: "T7",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: T7,
  number: 7, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 17, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const t8 = {
  name: "T8",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: T8,
  number: 8, // 숫자
  royal: false, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 18, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const t9 = {
  name: "T9",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: T9,
  number: 9, // 숫자
  royal: true, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 19, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const s1 = {
  name: "S1",
  myHand: false, // 내 패에 포함할건지 (족보에 사용할지)
  img: S1,
  number: 1, // 숫자
  royal: true, // 귀족패
  letter: false, // 자패
  threeGrand: false, // 삼원패
  wind: false, // 바람패
  order: 21, // 정렬순서 (만 -> 통 -> 삭)
  green: false // 녹일색
}

const s2 = {
  name: "S2",
  myHand: false, 
  img: S2,
  number: 2, 
  royal: false,
  letter: false,
  threeGrand: false, 
  wind: false, 
  order: 22,
  green: true
}

const s3 = {
  name: "S3",
  myHand: false, 
  img: S3,
  number: 3, 
  royal: false,
  letter: false,
  threeGrand: false, 
  wind: false, 
  order: 23,
  green: true
}

const s4 = {
  name: "S4",
  myHand: false, 
  img: S4,
  number: 4, 
  royal: false,
  letter: false,
  threeGrand: false, 
  wind: false, 
  order: 24,
  green: true
}

const s5 = {
  name: "S5",
  myHand: false, 
  img: S5,
  number: 5, 
  royal: false,
  letter: false,
  threeGrand: false, 
  wind: false, 
  order: 25,
  green: false
}

const s6 = {
  name: "S6",
  myHand: false, 
  img: S6,
  number: 6, 
  royal: false,
  letter: false,
  threeGrand: false, 
  wind: false, 
  order: 26,
  green: true
}

const s7 = {
  name: "S7",
  myHand: false, 
  img: S7,
  number: 7, 
  royal: false,
  letter: false,
  threeGrand: false, 
  wind: false, 
  order: 27,
  green: false
}

const s8 = {
  name: "S8",
  myHand: false, 
  img: S8,
  number: 8, 
  royal: false,
  letter: false,
  threeGrand: false, 
  wind: false, 
  order: 28,
  green: true
}

const s9 = {
  name: "S9",
  myHand: false, 
  img: S9,
  number: 9, 
  royal: true,
  letter: false,
  threeGrand: false, 
  wind: false, 
  order: 29,
  green: false
}


const e = {
  name: "E",
  myHand: false, 
  img: E,
  number: false, 
  royal: true,
  letter: true,
  threeGrand: false, 
  wind: true, 
  order: 30,
  green: false
}
const s = {
  name: "S",
  myHand: false, 
  img: S,
  number: false, 
  royal: true,
  letter: true,
  threeGrand: false, 
  wind: true, 
  order: 31,
  green: false
}
const w = {
  name: "W",
  myHand: false, 
  img: W,
  number: false, 
  royal: true,
  letter: true,
  threeGrand: false, 
  wind: true, 
  order: 32,
  green: false
}
const n = {
  name: "N",
  myHand: false, 
  img: N,
  number: false, 
  royal: true,
  letter: true,
  threeGrand: false, 
  wind: true, 
  order: 33,
  green: false
}
const wh = {
  name: "WH",
  myHand: false, 
  img: WH,
  number: false, 
  royal: true,
  letter: true,
  threeGrand: true, 
  wind: false, 
  order: 34,
  green: false
}
const gn = {
  name: "S9",
  myHand: false, 
  img: GN,
  number: false, 
  royal: true,
  letter: true,
  threeGrand: true, 
  wind: false, 
  order: 35,
  green: true
}
const cn = {
  name: "CN",
  myHand: false, 
  img: CN,
  number: false, 
  royal: true,
  letter: true,
  threeGrand: true, 
  wind: false, 
  order: 36,
  green: false
}

export const MockDatabase = [
  {...s2},
  {...s3},
  {...s4},
  {...m7},
  {...m8},
  {...m9},
  {...t4},
  {...t5},
  {...t6},
  {...e},
  {...e},
  {...e},
  {...s},
  {...s},
]

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const cardData = [
  {...m1},{...m2},{...m3},{...m4},{...m5},{...m6},{...m7},{...m8},{...m9},
  {...t1},{...t2},{...t3},{...t4},{...t5},{...t6},{...t7},{...t8},{...t9},
  {...s1},{...s2},{...s3},{...s4},{...s5},{...s6},{...s7},{...s8},{...s9},
  {...e},{...s},{...w},{...n},{...wh},{...gn},{...cn}
]

const queue = [
  1,1,1,1,
  2,2,2,2,
  3,3,3,3,
  4,4,4,4,
  5,5,5,5,
  6,6,6,6,
  7,7,7,7,
  8,8,8,8,
  9,9,9,9,
  11,11,11,11,
  12,12,12,12,
  13,13,13,13,
  14,14,14,14,
  15,15,15,15,
  16,16,16,16,
  17,17,17,17,
  18,18,18,18,
  19,19,19,19,
  21,21,21,21,
  22,22,22,22,
  23,23,23,23,
  24,24,24,24,
  25,25,25,25,
  26,26,26,26,
  27,27,27,27,
  28,28,28,28,
  29,29,29,29,
  30,30,30,30,
  31,31,31,31,
  32,32,32,32,
  33,33,33,33,
  34,34,34,34,
  35,35,35,35,
  36,36,36,36
]

const shuffleQueue = shuffle(queue)

const playerHandNum = []
const playerHand = []

for (var i=0; i < 34; i++) {
  playerHandNum.push(shuffleQueue.pop())
}

for (var i of playerHandNum) {
  for (var j of cardData) {
    if (i === j.order) {
      playerHand.push({...j})
    }
  }
}

export {playerHand}