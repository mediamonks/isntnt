import { isEmptyPrimitive } from '../predicates'

describe('isEmptyPrimitive', () => {
  test('is a function', () => {
    expect(isEmptyPrimitive).toBeInstanceOf(Function)
  })

  test('returns true for any value that is an empty primitive', () => {
    expect(isEmptyPrimitive('')).toBe(true)
    expect(isEmptyPrimitive(null)).toBe(true)
    expect(isEmptyPrimitive(undefined)).toBe(true)
  })

  test('returns false for any value that is not an empty primitive', () => {
    expect(isEmptyPrimitive([])).toBe(false)
    expect(isEmptyPrimitive(42)).toBe(false)
    expect(isEmptyPrimitive('abc')).toBe(false)
    expect(isEmptyPrimitive({ foo: 42, bar: true })).toBe(false)
    expect(isEmptyPrimitive({ length: 0 })).toBe(false)
    expect(isEmptyPrimitive(isEmptyPrimitive)).toBe(false)
  })
})
