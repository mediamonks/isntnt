import { isNumericString } from '../predicates'

describe('isNumericString', () => {
  test('is a function', () => {
    expect(isNumericString).toBeInstanceOf(Function)
  })

  test('returns true for any valid number value', () => {
    expect(isNumericString('1')).toBe(true)
    expect(isNumericString('0.5')).toBe(true)
    expect(isNumericString('0')).toBe(true)
    expect(isNumericString('Infinity')).toBe(true)
    expect(isNumericString('-1')).toBe(true)
    expect(isNumericString('-0.5')).toBe(true)
    expect(isNumericString('-0')).toBe(true)
    expect(isNumericString('-Infinity')).toBe(true)
  })

  test('returns false for "NaN"', () => {
    expect(isNumericString('NaN')).toBe(false)
  })

  test('returns false for any value that is not a valid number', () => {
    expect(isNumericString(true)).toBe(false)
    expect(isNumericString(undefined)).toBe(false)
    expect(isNumericString(null)).toBe(false)
    expect(isNumericString(1)).toBe(false)
    expect(isNumericString('abc')).toBe(false)
    expect(isNumericString([])).toBe(false)
    expect(isNumericString({})).toBe(false)
    expect(isNumericString({ length: 0 })).toBe(false)
    expect(isNumericString(isNumericString)).toBe(false)
  })
})
