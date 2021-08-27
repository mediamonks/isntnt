import { isDate } from '../predicates'

describe('isDate', () => {
  test('is a function', () => {
    expect(isDate).toBeInstanceOf(Function)
  })

  test('returns true for any value that is a Date object', () => {
    expect(isDate(new Date(Date.now()))).toBe(true)
  })

  test('returns false for any value that is not a Date object', () => {
    expect(isDate(undefined)).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate(NaN)).toBe(false)
    expect(isDate(42)).toBe(false)
    expect(isDate('abc')).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate({ length: 0 })).toBe(false)
    expect(isDate(isDate)).toBe(false)
  })

  test('returns false for an InvalidDate object', () => {
    expect(isDate(new Date(NaN))).toBe(false)
  })
})
