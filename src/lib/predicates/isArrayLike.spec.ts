import { isArrayLike } from '../predicates'

describe('isArrayLike', () => {
  test('is a function', () => {
    expect(isArrayLike).toBeInstanceOf(Function)
  })
  test('returns true for any value that is an array like object', () => {
    expect(isArrayLike([])).toBe(true)
    expect(isArrayLike(new Uint16Array(12))).toBe(true)
    expect(isArrayLike({ length: 0 })).toBe(true)
    expect(isArrayLike('abc')).toBe(true)
  })
  test('returns false for any value that is not an array like object', () => {
    expect(isArrayLike(undefined)).toBe(false)
    expect(isArrayLike(null)).toBe(false)
    expect(isArrayLike(NaN)).toBe(false)
    expect(isArrayLike(42)).toBe(false)
    expect(isArrayLike({})).toBe(false)
    expect(isArrayLike({ length: 1.5 })).toBe(false)
    expect(isArrayLike(isArrayLike)).toBe(false)
  })
})
