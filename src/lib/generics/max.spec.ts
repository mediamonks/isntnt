import { max } from '../generics'

describe('max', () => {
  test('is a function', () => {
    expect(max).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isMax8 = max(8)
    expect(isMax8).toBeInstanceOf(Function)
  })

  test('returns true if its input is less than or equal to its ceiling value', () => {
    const isMax8 = max(8)
    expect(isMax8(7)).toBe(true)
    expect(isMax8(8)).toBe(true)
    expect(isMax8(-Infinity)).toBe(true)
  })

  test('returns false if its input is greater than its ceiling value', () => {
    const isMax8 = max(8)
    expect(isMax8(9)).toBe(false)
    expect(isMax8(Infinity)).toBe(false)
  })

  test('returns false if its input is not a number', () => {
    const isMax8 = max(8)
    expect(isMax8(false)).toBe(false)
    expect(isMax8(undefined)).toBe(false)
    expect(isMax8(null)).toBe(false)
    expect(isMax8(NaN)).toBe(false)
    expect(isMax8('abc')).toBe(false)
    expect(isMax8({})).toBe(false)
    expect(isMax8({ length: 0 })).toBe(false)
    expect(isMax8(isMax8)).toBe(false)
  })
})
