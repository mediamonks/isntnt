import { isString } from '../predicates/isString'
import { nullable } from './nullable'

describe('nullable', () => {
  test('is a function', () => {
    expect(nullable).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isNullableString = nullable(isString)
    expect(isNullableString).toBeInstanceOf(Function)
  })

  test('returns true if its input matches its predicate', () => {
    const isNullableString = nullable(isString)
    expect(isNullableString('abc')).toBe(true)
  })

  test('returns true if its input equals null', () => {
    const isNullableString = nullable(isString)
    expect(isNullableString(null)).toBe(true)
  })

  test('returns false if input does not match its predicate, and does not equal null', () => {
    const isNullableString = nullable(isString)
    expect(isNullableString(12)).toBe(false)
    expect(isNullableString([])).toBe(false)
    expect(isNullableString({})).toBe(false)
    expect(isNullableString(undefined)).toBe(false)
    expect(isNullableString(NaN)).toBe(false)
  })
})
