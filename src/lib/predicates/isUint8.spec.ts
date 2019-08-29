import { isUint8 } from '../predicates'

const [min, max] = [0, 255]

describe('isUint8', () => {
  test('is a function', () => {
    expect(isUint8).toBeInstanceOf(Function)
  })

  test(`returns true for an integer within a range of ${min} to ${max}`, () => {
    expect(isUint8(min)).toBe(true)
    expect(isUint8(max)).toBe(true)
  })

  test(`returns false for an integer outside a range of ${min} to ${max}`, () => {
    expect(isUint8(min - 1)).toBe(false)
    expect(isUint8(max + 1)).toBe(false)
  })

  test('returns false for negative zero', () => {
    expect(isUint8(-0)).toBe(false)
  })

  test('returns false for Infinity', () => {
    expect(isUint8(Infinity)).toBe(false)
    expect(isUint8(-Infinity)).toBe(false)
  })

  test('returns false for a float', () => {
    expect(isUint8(12.5)).toBe(false)
    expect(isUint8(-0.1)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(isUint8(NaN)).toBe(false)
  })

  test('returns false for number-like values', () => {
    expect(isUint8('12')).toBe(false)
    expect(isUint8('Infinity')).toBe(false)
  })

  test('returns false for any value that is not a number', () => {
    expect(isUint8(false)).toBe(false)
    expect(isUint8(true)).toBe(false)
    expect(isUint8(undefined)).toBe(false)
    expect(isUint8(null)).toBe(false)
    expect(isUint8('abc')).toBe(false)
    expect(isUint8([])).toBe(false)
    expect(isUint8({})).toBe(false)
    expect(isUint8({ length: 0 })).toBe(false)
  })
})
