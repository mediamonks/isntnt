import { isPlainObject } from '../predicates'

describe('isPlainObject', () => {
  test('is a function', () => {
    expect(isPlainObject).toBeInstanceOf(Function)
  })

  test('returns true for any value that is a plain object', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject({ a: 42, b: 'abc', c: true })).toBe(true)
  })

  test('returns false for an object without a prototype', () => {
    expect(isPlainObject(Object.create(null))).toBe(false)
  })

  test('returns false for an object that is not a plain object', () => {
    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject(Math)).toBe(false)
  })

  test('returns false for null', () => {
    expect(isPlainObject(null)).toBe(false)
  })

  test('returns false for any value that is not an object', () => {
    expect(isPlainObject(undefined)).toBe(false)
    expect(isPlainObject(true)).toBe(false)
    expect(isPlainObject(42)).toBe(false)
    expect(isPlainObject('abc')).toBe(false)
    expect(isPlainObject(isPlainObject)).toBe(false)
  })
})
