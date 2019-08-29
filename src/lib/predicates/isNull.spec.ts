import { isNull } from '../predicates'

describe('isNull', () => {
  it('is a function', () => {
    expect(isNull).toBeInstanceOf(Function)
  })

  it('returns true for any value that is null', () => {
    expect(isNull(null)).toBe(true)
  })

  it('returns false for any value that is not null', () => {
    expect(isNull(undefined)).toBe(false)
    expect(isNull(false)).toBe(false)
    expect(isNull(42)).toBe(false)
    expect(isNull('abc')).toBe(false)
    expect(isNull({})).toBe(false)
    expect(isNull([])).toBe(false)
    expect(isNull(isNull)).toBe(false)
  })
})
