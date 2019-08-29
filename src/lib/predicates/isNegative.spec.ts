import { isNegative } from '../predicates'

describe('isNegative', () => {
  test('is a function', () => {
    expect(isNegative).toBeInstanceOf(Function)
  })

  test('returns true for a negative number', () => {
    expect(isNegative(-1)).toBe(true)
    expect(isNegative(-0.5)).toBe(true)
    expect(isNegative(-Infinity)).toBe(true)
  })

  test('returns true for negative zero', () => {
    expect(isNegative(-0)).toBe(true)
  })

  test('returns false for zero', () => {
    expect(isNegative(0)).toBe(false)
  })

  test('returns false for a positive number', () => {
    expect(isNegative(1)).toBe(false)
    expect(isNegative(0.5)).toBe(false)
    expect(isNegative(Infinity)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(isNegative(NaN)).toBe(false)
  })

  test('returns false for number-like values', () => {
    expect(isNegative('-12')).toBe(false)
    expect(isNegative('-Infinity')).toBe(false)
  })

  test('returns false for any value that is not a number', () => {
    expect(isNegative(false)).toBe(false)
    expect(isNegative(true)).toBe(false)
    expect(isNegative(undefined)).toBe(false)
    expect(isNegative(null)).toBe(false)
    expect(isNegative('abc')).toBe(false)
    expect(isNegative([])).toBe(false)
    expect(isNegative({})).toBe(false)
    expect(isNegative({ length: 0 })).toBe(false)
  })
})
