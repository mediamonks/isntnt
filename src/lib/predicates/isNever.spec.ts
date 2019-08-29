import { isNever } from '../predicates'

describe('isNever', () => {
  test('is a function', () => {
    expect(isNever).toBeInstanceOf(Function)
  })

  test('returns false for any value', () => {
    expect(isNever(undefined)).toBe(false)
    expect(isNever(null)).toBe(false)
    expect(isNever(false)).toBe(false)
    expect(isNever(42)).toBe(false)
    expect(isNever('abc')).toBe(false)
    expect(isNever({})).toBe(false)
    expect(isNever([])).toBe(false)
    expect(isNever(isNever)).toBe(false)
  })
})
