import { isString } from '../predicates/isString'
import { noneable } from './noneable'

describe('noneable', () => {
  test('is a function', () => {
    expect(noneable).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isNoneableString = noneable(isString)
    expect(isNoneableString).toBeInstanceOf(Function)
  })

  test('returns true if its input matches its predicate', () => {
    const isNoneableString = noneable(isString)
    expect(isNoneableString('abc')).toBe(true)
  })

  test('returns true if its input equals null, undefined, or NaN', () => {
    const isNoneableString = noneable(isString)
    expect(isNoneableString(null)).toBe(true)
    expect(isNoneableString(undefined)).toBe(true)
    expect(isNoneableString(NaN)).toBe(true)
  })

  test('returns false if input does not match its predicate, and does not equal null or undefined', () => {
    const isNoneableString = noneable(isString)
    expect(isNoneableString(12)).toBe(false)
    expect(isNoneableString([])).toBe(false)
    expect(isNoneableString({})).toBe(false)
  })
})
