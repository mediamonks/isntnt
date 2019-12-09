import { isString } from '../predicates/isString'
import { optional } from './optional'

describe('optional', () => {
  test('is a function', () => {
    expect(optional).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isOptionalString = optional(isString)
    expect(isOptionalString).toBeInstanceOf(Function)
  })

  test('returns true if its input matches its predicate', () => {
    const isOptionalString = optional(isString)
    expect(isOptionalString('abc')).toBe(true)
  })

  test('returns true if its input equals undefined', () => {
    const isOptionalString = optional(isString)
    expect(isOptionalString(undefined)).toBe(true)
  })

  test('returns false if input does not match its predicate, and does not equal undefined', () => {
    const isOptionalString = optional(isString)
    expect(isOptionalString(12)).toBe(false)
    expect(isOptionalString([])).toBe(false)
    expect(isOptionalString({})).toBe(false)
    expect(isOptionalString(null)).toBe(false)
    expect(isOptionalString(NaN)).toBe(false)
  })
})
