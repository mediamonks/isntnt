import { isNone } from '../predicates'

describe('isNone', () => {
  it('is a function', () => {
    expect(isNone).toBeInstanceOf(Function)
  })

  it('returns true for any value that is null or undefined', () => {
    expect(isNone(undefined)).toBe(true)
    expect(isNone(null)).toBe(true)
  })

  it('returns false for any value that is not null or undefined', () => {
    expect(isNone(false)).toBe(false)
    expect(isNone(42)).toBe(false)
    expect(isNone('abc')).toBe(false)
    expect(isNone({})).toBe(false)
    expect(isNone([])).toBe(false)
    expect(isNone(isNone)).toBe(false)
  })
})
