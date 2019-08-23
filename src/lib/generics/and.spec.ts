import { and } from '../generics'
import { isAny, isSomething, isNever, isObject, isArray } from '../predicates'

describe('and', () => {
  test('is a function', () => {
    expect(and).toBeInstanceOf(Function)
  })

  test('returns isAny if no arguments are provided', () => {
    expect(and()).toBe(isAny)
  })

  test('returns its input if a single argument is provided', () => {
    const input = (value: any): value is 1 => value === 1
    expect(and(input)).toBe(input)
  })

  test('returns true if every of its provided predicates evalute to true', () => {
    const isAnyAndSomething = and(isAny, isSomething)
    expect(isAnyAndSomething({})).toBe(true)
    const isAnyAndSomethingAndObject = and(isAny, isSomething, isObject)
    expect(isAnyAndSomethingAndObject({})).toBe(true)
  })

  test('returns false if some of its provided predicate evalute to true', () => {
    const isAnyAndNever = and(isAny, isNever)
    expect(isAnyAndNever({})).toBe(false)
    const isAnyAndNeverAndObject = and(isAny, isNever, isObject)
    expect(isAnyAndNeverAndObject({})).toBe(false)
  })

  test('returns false if none of its provided predicates evalute to true', () => {
    const isSomethingAndString = and(isSomething, isObject)
    expect(isSomethingAndString(null)).toBe(false)
    const isSomethingAndObjectAndArray = and(isSomething, isObject, isArray)
    expect(isSomethingAndObjectAndArray(null)).toBe(false)
  })
})
