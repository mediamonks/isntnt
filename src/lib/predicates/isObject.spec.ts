import { isObject } from '../predicates'

describe('isObject', () => {
  test('is a function', () => {
    expect(isObject).toBeInstanceOf(Function)
  })

  test('returns true for any value that is an object', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ a: 42, b: 'abc', c: true })).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject([1, 2, 3])).toBe(true)
    expect(isObject([{}, null, NaN])).toBe(true)
  })

  test('returns true for an object without a prototype', () => {
    expect(isObject(Object.create(null))).toBe(true)
  })

  test('returns false for null', () => {
    expect(isObject(null)).toBe(false)
  })

  test('returns false for any value that is not an object', () => {
    expect(isObject(undefined)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(42)).toBe(false)
    expect(isObject('abc')).toBe(false)
    expect(isObject(isObject)).toBe(false)
  })
})
