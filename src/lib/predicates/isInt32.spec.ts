import { isInt32 } from '../predicates'

describe('isInt32', () => {
  test('is a function', () => {
    expect(isInt32).toBeInstanceOf(Function)
  })

  test('returns true for an integer within a range of -2,147,483,648 to 2,147,483,647', () => {
    expect(isInt32(0)).toBe(true)
    expect(isInt32(2_147_483_647)).toBe(true)
    expect(isInt32(-2_147_483_648)).toBe(true)
  })

  test('returns false for an integer outside a range of -2,147,483,648 to 2,147,483,647', () => {
    expect(isInt32(2_147_483_648)).toBe(false)
    expect(isInt32(-2_147_483_649)).toBe(false)
  })

  test('returns false for Infinity', () => {
    expect(isInt32(Infinity)).toBe(false)
    expect(isInt32(-Infinity)).toBe(false)
  })

  test('returns false for a float', () => {
    expect(isInt32(12.5)).toBe(false)
    expect(isInt32(-0.1)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(isInt32(NaN)).toBe(false)
  })

  test('returns false for number-like values', () => {
    expect(isInt32('12')).toBe(false)
    expect(isInt32('Infinity')).toBe(false)
  })

  test('returns false for any value that is not a number', () => {
    expect(isInt32(false)).toBe(false)
    expect(isInt32(true)).toBe(false)
    expect(isInt32(undefined)).toBe(false)
    expect(isInt32(null)).toBe(false)
    expect(isInt32('abc')).toBe(false)
    expect(isInt32([])).toBe(false)
    expect(isInt32({})).toBe(false)
    expect(isInt32({ length: 0 })).toBe(false)
  })
})
