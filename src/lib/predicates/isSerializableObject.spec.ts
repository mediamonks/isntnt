import { isSerializableObject } from '../predicates'

describe('isSerializableObject', () => {
  it('is a function', () => {
    expect(isSerializableObject).toBeInstanceOf(Function)
  })

  it('returns true for a plain object value', () => {
    expect(isSerializableObject({})).toBe(true)
  })

  it('returns true for a serializable object value', () => {
    expect(isSerializableObject({ foo: 12, bar: [42, null, 'abc'] })).toBe(true)
  })

  it('returns true for a nested serializable object value', () => {
    expect(isSerializableObject({ foo: { bar: 12 } })).toBe(true)
  })

  it('returns false for a nested non serializable object value', () => {
    expect(isSerializableObject({ foo: { bar: Function } })).toBe(false)
  })

  it('returns false for any value that is not a plain object', () => {
    expect(isSerializableObject(true)).toBe(false)
    expect(isSerializableObject(Object.create(null))).toBe(false)
    expect(isSerializableObject([])).toBe(false)
    expect(isSerializableObject(/abc/)).toBe(false)
    expect(isSerializableObject(isSerializableObject)).toBe(false)
  })

  it('returns false for a string value', () => {
    expect(isSerializableObject(String('abc'))).toBe(false)
    expect(isSerializableObject(String('xyz'))).toBe(false)
  })

  it('returns false for a number value', () => {
    expect(isSerializableObject(12)).toBe(false)
    expect(isSerializableObject(Number(42))).toBe(false)
    expect(isSerializableObject(Infinity)).toBe(false)
    expect(isSerializableObject(-Infinity)).toBe(false)
    expect(isSerializableObject(NaN)).toBe(false)
  })

  it('returns false for a boolean value', () => {
    expect(isSerializableObject(true)).toBe(false)
    expect(isSerializableObject(false)).toBe(false)
    expect(isSerializableObject(Boolean([]))).toBe(false)
  })

  it('returns false for a null value', () => {
    expect(isSerializableObject(null)).toBe(false)
  })

  it('returns false for undefined', () => {
    expect(isSerializableObject(undefined)).toBe(false)
  })

  it('returns false for a symbol value', () => {
    expect(isSerializableObject(Symbol())).toBe(false)
    expect(isSerializableObject(Symbol.iterator)).toBe(false)
  })
})
