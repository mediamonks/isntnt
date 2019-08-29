import { isMap } from '../predicates'

describe('isMap', () => {
  test('is a function', () => {
    expect(isMap).toBeInstanceOf(Function)
  })

  test('returns true for any value that is a Map', () => {
    expect(isMap(new Map())).toBe(true)
  })

  test('returns false for any value that is not a Map', () => {
    expect(isMap(undefined)).toBe(false)
    expect(isMap(null)).toBe(false)
    expect(isMap(true)).toBe(false)
    expect(isMap(42)).toBe(false)
    expect(isMap('abc')).toBe(false)
    expect(isMap([])).toBe(false)
    expect(isMap({})).toBe(false)
    expect(isMap({ length: 0 })).toBe(false)
    expect(isMap(isMap)).toBe(false)
  })
})
