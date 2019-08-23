import { isArray } from '../predicates'

describe('isArray', () => {
  test('is a function', () => {
    expect(isArray).toBeInstanceOf(Function)
  })

  test('returns true for any value that is an Array', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray([{}, null, NaN])).toBe(true)
  })

  test('returns false for any value that is not an Array', () => {
    expect(isArray(undefined)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(42)).toBe(false)
    expect(isArray('abc')).toBe(false)
    expect(isArray({})).toBe(false)
    expect(isArray({ length: 0 })).toBe(false)
    expect(isArray(isArray)).toBe(false)
  })
})
