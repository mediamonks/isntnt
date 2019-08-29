import { isUint } from '../predicates'

describe('isUint', () => {
  test('is a function', () => {
    expect(isUint).toBeInstanceOf(Function)
  })

  test('returns true for a positive integer', () => {
    expect(isUint(1)).toBe(true)
    expect(isUint(4096)).toBe(true)
  })

  test('returns true for zero', () => {
    expect(isUint(0)).toBe(true)
  })

  test('returns false for Infinity', () => {
    expect(isUint(Infinity)).toBe(false)
    expect(isUint(-Infinity)).toBe(false)
  })

  test('returns false for negative zero', () => {
    expect(isUint(-0)).toBe(false)
  })

  test('returns false for a float', () => {
    expect(isUint(0.5)).toBe(false)
  })

  test('returns false for a negative number', () => {
    expect(isUint(-1)).toBe(false)
    expect(isUint(-0.5)).toBe(false)
    expect(isUint(-Infinity)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(isUint(NaN)).toBe(false)
  })

  test('returns false for number-like values', () => {
    expect(isUint('12')).toBe(false)
    expect(isUint('Infinity')).toBe(false)
  })

  test('returns false for any value that is not a number', () => {
    expect(isUint(false)).toBe(false)
    expect(isUint(true)).toBe(false)
    expect(isUint(undefined)).toBe(false)
    expect(isUint(null)).toBe(false)
    expect(isUint('abc')).toBe(false)
    expect(isUint([])).toBe(false)
    expect(isUint({})).toBe(false)
    expect(isUint({ length: 0 })).toBe(false)
  })
})
