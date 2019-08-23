import { isInt } from '../predicates'

describe('isInt', () => {
  test('is a function', () => {
    expect(isInt).toBeInstanceOf(Function)
  })

  test('returns true for an integer', () => {
    expect(isInt(0)).toBe(true)
    expect(isInt(42)).toBe(true)
    expect(isInt(-0)).toBe(true)
  })

  test('returns true for Infinity', () => {
    expect(isInt(Infinity)).toBe(true)
    expect(isInt(-Infinity)).toBe(true)
  })

  test('returns false for a float', () => {
    expect(isInt(12.5)).toBe(false)
    expect(isInt(-0.1)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(isInt(NaN)).toBe(false)
  })

  test('returns false for number-like values', () => {
    expect(isInt('12')).toBe(false)
    expect(isInt('Infinity')).toBe(false)
  })

  test('returns false for any value that is not a number', () => {
    expect(isInt(false)).toBe(false)
    expect(isInt(true)).toBe(false)
    expect(isInt(undefined)).toBe(false)
    expect(isInt(null)).toBe(false)
    expect(isInt('abc')).toBe(false)
    expect(isInt([])).toBe(false)
    expect(isInt({})).toBe(false)
    expect(isInt({ length: 0 })).toBe(false)
  })
})
