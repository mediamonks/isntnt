import { isBigInt } from '../predicates'

describe('isBigInt', () => {
  test('is a function', () => {
    expect(isBigInt).toBeInstanceOf(Function)
  })

  test('returns false for any value that is not a bigint', () => {
    expect(isBigInt(undefined)).toBe(false)
    expect(isBigInt(null)).toBe(false)
    expect(isBigInt(NaN)).toBe(false)
    expect(isBigInt(42)).toBe(false)
    expect(isBigInt('abc')).toBe(false)
    expect(isBigInt({})).toBe(false)
    expect(isBigInt({ length: 0 })).toBe(false)
    expect(isBigInt(isBigInt)).toBe(false)
  })
})
