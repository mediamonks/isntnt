import { isUint32 } from '../predicates'

const [min, max] = [0, 4_294_967_295]

describe('isUint32', () => {
  test('is a function', () => {
    expect(isUint32).toBeInstanceOf(Function)
  })

  test(`returns true for an integer within a range of ${min} to ${max}`, () => {
    expect(isUint32(min)).toBe(true)
    expect(isUint32(max)).toBe(true)
  })

  test(`returns false for an integer outside a range of ${min} to ${max}`, () => {
    expect(isUint32(min - 1)).toBe(false)
    expect(isUint32(max + 1)).toBe(false)
  })

  test('returns false for negative zero', () => {
    expect(isUint32(-0)).toBe(false)
  })

  test('returns false for Infinity', () => {
    expect(isUint32(Infinity)).toBe(false)
    expect(isUint32(-Infinity)).toBe(false)
  })

  test('returns false for a float', () => {
    expect(isUint32(12.5)).toBe(false)
    expect(isUint32(-0.1)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(isUint32(NaN)).toBe(false)
  })

  test('returns false for number-like values', () => {
    expect(isUint32('12')).toBe(false)
    expect(isUint32('Infinity')).toBe(false)
  })

  test('returns false for any value that is not a number', () => {
    expect(isUint32(false)).toBe(false)
    expect(isUint32(true)).toBe(false)
    expect(isUint32(undefined)).toBe(false)
    expect(isUint32(null)).toBe(false)
    expect(isUint32('abc')).toBe(false)
    expect(isUint32([])).toBe(false)
    expect(isUint32({})).toBe(false)
    expect(isUint32({ length: 0 })).toBe(false)
  })
})
