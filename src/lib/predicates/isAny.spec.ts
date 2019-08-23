import { isAny } from '../predicates'

describe('isAny', () => {
  test('is a function', () => {
    expect(isAny).toBeInstanceOf(Function)
  })

  test('returns true for any value', () => {
    expect(isAny(undefined)).toBe(true)
    expect(isAny(null)).toBe(true)
    expect(isAny(true)).toBe(true)
    expect(isAny(42)).toBe(true)
    expect(isAny('abc')).toBe(true)
    expect(isAny({})).toBe(true)
    expect(isAny([])).toBe(true)
    expect(isAny(isAny)).toBe(true)
  })
})
