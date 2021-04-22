import { findRoncard } from './findRoncard'

test('텐빠이테스트1', () => {
  expect(findRoncard([1,2,3,4,5,6,7,8,9,21,21,21,22])).toBe([22])
})