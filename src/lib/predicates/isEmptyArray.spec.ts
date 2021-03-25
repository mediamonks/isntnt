import { isEmptyArray } from '../predicates'

describe('isEmptyArray', () => {
  test('is a function', () => {
    expect(isEmptyArray).toBeInstanceOf(Function)
  })

  test('returns true for any value that is an empty array', () => {
    expect(isEmptyArray([])).toBe(true)
  })

  test('returns false for any value that is not an empty array', () => {
    expect(isEmptyArray([1])).toBe(false)
    expect(isEmptyArray(undefined)).toBe(false)
    expect(isEmptyArray(null)).toBe(false)
    expect(isEmptyArray(NaN)).toBe(false)
    expect(isEmptyArray(42)).toBe(false)
    expect(isEmptyArray('abc')).toBe(false)
    expect(isEmptyArray({ foo: 42, bar: true })).toBe(false)
    expect(isEmptyArray({ length: 0 })).toBe(false)
    expect(isEmptyArray(isEmptyArray)).toBe(false)
  })
})
