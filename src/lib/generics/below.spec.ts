import { below } from '../generics'

describe('below', () => {
  test('is a function', () => {
    expect(below).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isBelow12 = below(12)
    expect(isBelow12).toBeInstanceOf(Function)
  })

  test('returns true if its input is less than its ceiling value', () => {
    const isBelow8 = below(8)
    expect(isBelow8(7)).toBe(true)
    expect(isBelow8(-Infinity)).toBe(true)
  })

  test('returns false if its input is equal to or greater than its ceiling value', () => {
    const isBelow8 = below(8)
    expect(isBelow8(8)).toBe(false)
    expect(isBelow8(9)).toBe(false)
    expect(isBelow8(Infinity)).toBe(false)
  })

  test('returns false if its input is not a number', () => {
    const isBelow8 = below(8)
    expect(isBelow8(false)).toBe(false)
    expect(isBelow8(undefined)).toBe(false)
    expect(isBelow8(null)).toBe(false)
    expect(isBelow8(NaN)).toBe(false)
    expect(isBelow8('abc')).toBe(false)
    expect(isBelow8({})).toBe(false)
    expect(isBelow8({ length: 0 })).toBe(false)
    expect(isBelow8(isBelow8)).toBe(false)
  })
})
