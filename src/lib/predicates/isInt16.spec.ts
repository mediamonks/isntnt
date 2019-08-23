import { isInt16 } from '../predicates'

describe('isInt16', () => {
  test('is a function', () => {
    expect(isInt16).toBeInstanceOf(Function)
  })

  test('returns true for an integer within a range of -32,768 to 32,767', () => {
    expect(isInt16(0)).toBe(true)
    expect(isInt16(32767)).toBe(true)
    expect(isInt16(-32768)).toBe(true)
  })

  test('returns false for an integer outside a range of -32,768 to 32,767', () => {
    expect(isInt16(32768)).toBe(false)
    expect(isInt16(-32769)).toBe(false)
  })

  test('returns false for Infinity', () => {
    expect(isInt16(Infinity)).toBe(false)
    expect(isInt16(-Infinity)).toBe(false)
  })

  test('returns false for a float', () => {
    expect(isInt16(12.5)).toBe(false)
    expect(isInt16(-0.1)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(isInt16(NaN)).toBe(false)
  })

  test('returns false for number-like values', () => {
    expect(isInt16('12')).toBe(false)
    expect(isInt16('Infinity')).toBe(false)
  })

  test('returns false for any value that is not a number', () => {
    expect(isInt16(false)).toBe(false)
    expect(isInt16(true)).toBe(false)
    expect(isInt16(undefined)).toBe(false)
    expect(isInt16(null)).toBe(false)
    expect(isInt16('abc')).toBe(false)
    expect(isInt16([])).toBe(false)
    expect(isInt16({})).toBe(false)
    expect(isInt16({ length: 0 })).toBe(false)
  })
})
