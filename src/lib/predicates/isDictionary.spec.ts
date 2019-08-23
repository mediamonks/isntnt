import { isDictionary } from '../predicates'

describe('isDictionary', () => {
  test('is a function', () => {
    expect(isDictionary).toBeInstanceOf(Function)
  })

  test('returns true for any value that is a dictionary', () => {
    expect(isDictionary({})).toBe(true)
    expect(isDictionary({ foo: 'abc', bar: 'xyz' })).toBe(true)
    expect(isDictionary([])).toBe(true)
    expect(isDictionary(['foo', 'bar'])).toBe(true)
  })

  test('returns false for any value that is not a dictionary', () => {
    expect(isDictionary(undefined)).toBe(false)
    expect(isDictionary(null)).toBe(false)
    expect(isDictionary(NaN)).toBe(false)
    expect(isDictionary(42)).toBe(false)
    expect(isDictionary('abc')).toBe(false)
    expect(isDictionary({ foo: 42, bar: true })).toBe(false)
    expect(isDictionary({ length: 0 })).toBe(false)
    expect(isDictionary(isDictionary)).toBe(false)
  })
})
