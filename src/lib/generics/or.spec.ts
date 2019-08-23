import { or } from '../generics'
import { isAny, isSomething, isNever, isObject, isArray } from '../predicates'

describe('or', () => {
  test('is a function', () => {
    expect(or).toBeInstanceOf(Function)
  })

  test('returns isAny if no arguments are provided', () => {
    expect(or()).toBe(isAny)
  })

  test('returns its input if a single argument is provided', () => {
    const input = (value: any): value is 1 => value === 1
    expect(or(input)).toBe(input)
  })

  test('returns true if every of its provided predicates evalute to true', () => {
    const isAnyOrSomething = or(isAny, isSomething)
    expect(isAnyOrSomething({})).toBe(true)
    const isAnyOrSomethingOrObject = or(isAny, isSomething, isObject)
    expect(isAnyOrSomethingOrObject({})).toBe(true)
  })

  test('returns true if some of its provided predicate evalute to true', () => {
    const isAnyOrNever = or(isAny, isNever)
    expect(isAnyOrNever({})).toBe(true)
    const isAnyOrNeverOrObject = or(isAny, isNever, isObject)
    expect(isAnyOrNeverOrObject({})).toBe(true)
  })

  test('returns false if none of its provided predicates evalute to true', () => {
    const isSomethingOrString = or(isSomething, isObject)
    expect(isSomethingOrString(null)).toBe(false)
    const isSomethingOrObjectOrArray = or(isSomething, isObject, isArray)
    expect(isSomethingOrObjectOrArray(null)).toBe(false)
  })
})
