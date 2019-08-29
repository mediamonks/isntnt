import { isSerializableNumber } from '../predicates'

describe('isSerializableNumber', () => {
  it('is a function', () => {
    expect(isSerializableNumber).toBeInstanceOf(Function)
  })

  it('returns true for a serializable number value', () => {
    expect(isSerializableNumber(1)).toBe(true)
    expect(isSerializableNumber(0.5)).toBe(true)
    expect(isSerializableNumber(0)).toBe(true)
    expect(isSerializableNumber(-1)).toBe(true)
    expect(isSerializableNumber(-0.5)).toBe(true)
    expect(isSerializableNumber(-0)).toBe(true)
  })

  it('returns false for NaN', () => {
    expect(isSerializableNumber(NaN)).toBe(false)
  })

  it('returns false for Infinity', () => {
    expect(isSerializableNumber(Infinity)).toBe(false)
  })

  it('returns false for -Infinity', () => {
    expect(isSerializableNumber(-Infinity)).toBe(false)
  })

  it('returns false for any value that is not a valid number', () => {
    expect(isSerializableNumber(true)).toBe(false)
    expect(isSerializableNumber(undefined)).toBe(false)
    expect(isSerializableNumber(null)).toBe(false)
    expect(isSerializableNumber('abc')).toBe(false)
    expect(isSerializableNumber([])).toBe(false)
    expect(isSerializableNumber({})).toBe(false)
    expect(isSerializableNumber({ length: 0 })).toBe(false)
    expect(isSerializableNumber(isSerializableNumber)).toBe(false)
  })
})
