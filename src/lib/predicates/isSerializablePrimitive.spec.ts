import { isSerializablePrimitive } from '../predicates'

describe('isSerializablePrimitive', () => {
  it('is a function', () => {
    expect(isSerializablePrimitive).toBeInstanceOf(Function)
  })

  it('returns true for a string value', () => {
    expect(isSerializablePrimitive(String('abc'))).toBe(true)
    expect(isSerializablePrimitive(String('xyz'))).toBe(true)
  })

  it('returns true for a valid number value', () => {
    expect(isSerializablePrimitive(12)).toBe(true)
    expect(isSerializablePrimitive(Number(42))).toBe(true)
  })

  it('returns true for a boolean value', () => {
    expect(isSerializablePrimitive(true)).toBe(true)
    expect(isSerializablePrimitive(false)).toBe(true)
    expect(isSerializablePrimitive(Boolean([]))).toBe(true)
  })

  it('returns true for a null value', () => {
    expect(isSerializablePrimitive(null)).toBe(true)
  })

  it('returns false for undefined', () => {
    expect(isSerializablePrimitive(undefined)).toBe(false)
  })

  it('returns false for a symbol value', () => {
    expect(isSerializablePrimitive(Symbol())).toBe(false)
    expect(isSerializablePrimitive(Symbol.iterator)).toBe(false)
  })

  it('returns false for Infinity', () => {
    expect(isSerializablePrimitive(Infinity)).toBe(false)
  })

  it('returns false for -Infinity', () => {
    expect(isSerializablePrimitive(-Infinity)).toBe(false)
  })

  it('returns false for NaN', () => {
    expect(isSerializablePrimitive(NaN)).toBe(false)
  })

  it('returns false for any value that is object-like', () => {
    expect(isSerializablePrimitive({})).toBe(false)
    expect(isSerializablePrimitive([])).toBe(false)
    expect(isSerializablePrimitive(/abc/)).toBe(false)
    expect(isSerializablePrimitive(isSerializablePrimitive)).toBe(false)
  })
})
