import { isBoolean } from '../predicates'

describe('isBoolean', () => {
  test('is a function', () => {
    expect(isBoolean).toBeInstanceOf(Function)
  })

  test('returns true for any value that is a boolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  test('returns false for any value that is not a boolean', () => {
    expect(isBoolean(undefined)).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(NaN)).toBe(false)
    expect(isBoolean(42)).toBe(false)
    expect(isBoolean('abc')).toBe(false)
    expect(isBoolean({})).toBe(false)
    expect(isBoolean({ length: 0 })).toBe(false)
    expect(isBoolean(isBoolean)).toBe(false)
  })
})
