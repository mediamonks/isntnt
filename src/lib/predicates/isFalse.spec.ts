import { isFalse } from '../predicates'

describe('isFalse', () => {
  test('is a function', () => {
    expect(isFalse).toBeInstanceOf(Function)
  })

  test('returns true for any value that is equals false', () => {
    expect(isFalse(false)).toBe(true)
  })

  test('returns false for any value that is not equal to false', () => {
    expect(isFalse(true)).toBe(false)
    expect(isFalse(undefined)).toBe(false)
    expect(isFalse(null)).toBe(false)
    expect(isFalse(NaN)).toBe(false)
    expect(isFalse(42)).toBe(false)
    expect(isFalse('abc')).toBe(false)
    expect(isFalse({})).toBe(false)
    expect(isFalse({ length: 0 })).toBe(false)
    expect(isFalse(isFalse)).toBe(false)
  })
})
