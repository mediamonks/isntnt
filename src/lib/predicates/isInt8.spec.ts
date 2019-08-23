import { isInt8 } from '../predicates'

describe('isInt8', () => {
  test('is a function', () => {
    expect(isInt8).toBeInstanceOf(Function)
  })

  test('returns true for an integer within a range of -128 to 127', () => {
    expect(isInt8(0)).toBe(true)
    expect(isInt8(127)).toBe(true)
    expect(isInt8(-128)).toBe(true)
  })

  test('returns false for an integer outside a range of -128 to 127', () => {
    expect(isInt8(128)).toBe(false)
    expect(isInt8(-129)).toBe(false)
  })

  test('returns false for Infinity', () => {
    expect(isInt8(Infinity)).toBe(false)
    expect(isInt8(-Infinity)).toBe(false)
  })

  test('returns false for a float', () => {
    expect(isInt8(12.5)).toBe(false)
    expect(isInt8(-0.1)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(isInt8(NaN)).toBe(false)
  })

  test('returns false for number-like values', () => {
    expect(isInt8('12')).toBe(false)
    expect(isInt8('Infinity')).toBe(false)
  })

  test('returns false for any value that is not a number', () => {
    expect(isInt8(false)).toBe(false)
    expect(isInt8(true)).toBe(false)
    expect(isInt8(undefined)).toBe(false)
    expect(isInt8(null)).toBe(false)
    expect(isInt8('abc')).toBe(false)
    expect(isInt8([])).toBe(false)
    expect(isInt8({})).toBe(false)
    expect(isInt8({ length: 0 })).toBe(false)
  })
})
