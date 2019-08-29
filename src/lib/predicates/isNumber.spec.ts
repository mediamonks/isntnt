import { isNumber } from '../predicates'

describe('isNumber', () => {
  test('is a function', () => {
    expect(isNumber).toBeInstanceOf(Function)
  })

  test('returns true for any valid number value', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber(0.5)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(-1)).toBe(true)
    expect(isNumber(-0.5)).toBe(true)
    expect(isNumber(-0)).toBe(true)
    expect(isNumber(-Infinity)).toBe(true)
  })

  test('returns false for NaN', () => {
    expect(isNumber(NaN)).toBe(false)
  })

  test('returns false for any value that is not a valid number', () => {
    expect(isNumber(true)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber('abc')).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber({ length: 0 })).toBe(false)
    expect(isNumber(isNumber)).toBe(false)
  })
})
