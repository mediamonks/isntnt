import { isEmptyObject } from '../predicates'

describe('isEmptyObject', () => {
  test('is a function', () => {
    expect(isEmptyObject).toBeInstanceOf(Function)
  })

  test('returns true for any value that is an empty object', () => {
    expect(isEmptyObject({})).toBe(true)
    expect(isEmptyObject(Object.create(null))).toBe(true)
    expect(isEmptyObject([])).toBe(true)
  })

  test('returns false for any value that is not an empty object', () => {
    expect(isEmptyObject([1])).toBe(false)
    expect(isEmptyObject(undefined)).toBe(false)
    expect(isEmptyObject(null)).toBe(false)
    expect(isEmptyObject(NaN)).toBe(false)
    expect(isEmptyObject(42)).toBe(false)
    expect(isEmptyObject('abc')).toBe(false)
    expect(isEmptyObject({ foo: 42, bar: true })).toBe(false)
    expect(isEmptyObject({ length: 0 })).toBe(false)
    expect(isEmptyObject(isEmptyObject)).toBe(false)
  })
})
