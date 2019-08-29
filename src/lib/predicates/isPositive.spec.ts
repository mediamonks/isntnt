import { isPositive } from '../predicates'

describe('isPositive', () => {
  test('is a function', () => {
    expect(isPositive).toBeInstanceOf(Function)
  })

  test('returns true for a positive number', () => {
    expect(isPositive(1)).toBe(true)
    expect(isPositive(0.5)).toBe(true)
    expect(isPositive(Infinity)).toBe(true)
  })

  test('returns true for zero', () => {
    expect(isPositive(0)).toBe(true)
  })

  test('returns false for negative zero', () => {
    expect(isPositive(-0)).toBe(false)
  })

  test('returns false for a negative number', () => {
    expect(isPositive(-1)).toBe(false)
    expect(isPositive(-0.5)).toBe(false)
    expect(isPositive(-Infinity)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(isPositive(NaN)).toBe(false)
  })

  test('returns false for number-like values', () => {
    expect(isPositive('12')).toBe(false)
    expect(isPositive('Infinity')).toBe(false)
  })

  test('returns false for any value that is not a number', () => {
    expect(isPositive(false)).toBe(false)
    expect(isPositive(true)).toBe(false)
    expect(isPositive(undefined)).toBe(false)
    expect(isPositive(null)).toBe(false)
    expect(isPositive('abc')).toBe(false)
    expect(isPositive([])).toBe(false)
    expect(isPositive({})).toBe(false)
    expect(isPositive({ length: 0 })).toBe(false)
  })
})
