import { isPrimitive } from '../predicates'

describe('isPrimitive', () => {
  it('is a function', () => {
    expect(isPrimitive).toBeInstanceOf(Function)
  })

  it('returns true for a string value', () => {
    expect(isPrimitive(String('abc'))).toBe(true)
    expect(isPrimitive(String('xyz'))).toBe(true)
  })

  it('returns true for a valid number value', () => {
    expect(isPrimitive(12)).toBe(true)
    expect(isPrimitive(Number(42))).toBe(true)
  })

  it('returns true for a boolean value', () => {
    expect(isPrimitive(true)).toBe(true)
    expect(isPrimitive(false)).toBe(true)
    expect(isPrimitive(Boolean([]))).toBe(true)
  })

  it('returns true for a symbol value', () => {
    expect(isPrimitive(Symbol())).toBe(true)
    expect(isPrimitive(Symbol.iterator)).toBe(true)
  })

  it('returns true for a null value', () => {
    expect(isPrimitive(null)).toBe(true)
  })

  it('returns true for undefined', () => {
    expect(isPrimitive(undefined)).toBe(true)
  })

  it('returns true for NaN', () => {
    expect(isPrimitive(NaN)).toBe(true)
  })

  it('returns false for any value that is object-like', () => {
    expect(isPrimitive({})).toBe(false)
    expect(isPrimitive([])).toBe(false)
    expect(isPrimitive(/abc/)).toBe(false)
    expect(isPrimitive(isPrimitive)).toBe(false)
  })
})
