import { isFunction } from '../predicates'

describe('isFunction', () => {
  test('is a function', () => {
    expect(isFunction).toBeInstanceOf(Function)
  })

  test('returns true for any value that is equals false', () => {
    expect(isFunction(isFunction)).toBe(true)
    expect(isFunction(Function)).toBe(true)
  })

  test('returns false for any value that is not equal to false', () => {
    expect(isFunction(false)).toBe(false)
    expect(isFunction(true)).toBe(false)
    expect(isFunction(undefined)).toBe(false)
    expect(isFunction(null)).toBe(false)
    expect(isFunction(NaN)).toBe(false)
    expect(isFunction(42)).toBe(false)
    expect(isFunction('abc')).toBe(false)
    expect(isFunction({})).toBe(false)
    expect(isFunction({ length: 0 })).toBe(false)
  })
})
