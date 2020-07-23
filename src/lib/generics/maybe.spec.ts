import { isString } from '../predicates/isString'
import { maybe } from './maybe'

describe('maybe', () => {
  test('is a function', () => {
    expect(maybe).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isMaybeString = maybe(isString)
    expect(isMaybeString).toBeInstanceOf(Function)
  })

  test('returns true if its input matches its predicate', () => {
    const isMaybeString = maybe(isString)
    expect(isMaybeString('abc')).toBe(true)
  })

  test('returns true if its input equals null, undefined, or NaN', () => {
    const isMaybeString = maybe(isString)
    expect(isMaybeString(null)).toBe(true)
    expect(isMaybeString(undefined)).toBe(true)
    expect(isMaybeString(NaN)).toBe(true)
  })

  test('returns false if input does not match its predicate, and does not equal null or undefined', () => {
    const isMaybeString = maybe(isString)
    expect(isMaybeString(12)).toBe(false)
    expect(isMaybeString([])).toBe(false)
    expect(isMaybeString({})).toBe(false)
  })
})
