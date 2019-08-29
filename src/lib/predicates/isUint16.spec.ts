import { isUint16 } from '../predicates'

const [min, max] = [0, 65_535]

describe('isUint16', () => {
  test('is a function', () => {
    expect(isUint16).toBeInstanceOf(Function)
  })

  test(`returns true for an integer within a range of ${min} to ${max}`, () => {
    expect(isUint16(min)).toBe(true)
    expect(isUint16(max)).toBe(true)
  })

  test(`returns false for an integer outside a range of ${min} to ${max}`, () => {
    expect(isUint16(min - 1)).toBe(false)
    expect(isUint16(max + 1)).toBe(false)
  })

  test('returns false for negative zero', () => {
    expect(isUint16(-0)).toBe(false)
  })

  test('returns false for Infinity', () => {
    expect(isUint16(Infinity)).toBe(false)
    expect(isUint16(-Infinity)).toBe(false)
  })

  test('returns false for a float', () => {
    expect(isUint16(12.5)).toBe(false)
    expect(isUint16(-0.1)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(isUint16(NaN)).toBe(false)
  })

  test('returns false for number-like values', () => {
    expect(isUint16('12')).toBe(false)
    expect(isUint16('Infinity')).toBe(false)
  })

  test('returns false for any value that is not a number', () => {
    expect(isUint16(false)).toBe(false)
    expect(isUint16(true)).toBe(false)
    expect(isUint16(undefined)).toBe(false)
    expect(isUint16(null)).toBe(false)
    expect(isUint16('abc')).toBe(false)
    expect(isUint16([])).toBe(false)
    expect(isUint16({})).toBe(false)
    expect(isUint16({ length: 0 })).toBe(false)
  })
})
