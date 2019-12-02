import { and } from '../generics'
import { isAny, isSome, isNever, isObject, isArray } from '../predicates'

describe('and', () => {
  test('is a function', () => {
    expect(and).toBeInstanceOf(Function)
  })

  test('returns isAny if no arguments are provided', () => {
    expect(and()).toBe(isAny)
  })

  test('returns its input if a single argument is provided', () => {
    const input = (value: unknown): value is 1 => value === 1
    expect(and(input)).toBe(input)
  })

  test('returns true if every of its provided predicates evaluates to true', () => {
    const isAnyAndSome = and(isAny, isSome)
    expect(isAnyAndSome({})).toBe(true)
    const isAnyAndSomeAndObject = and(isAny, isSome, isObject)
    expect(isAnyAndSomeAndObject({})).toBe(true)
    const is4TimesAny = and(isAny, isAny, isAny, isAny)
    expect(is4TimesAny(null)).toBe(true)
    const is5TimesAny = and(isAny, isAny, isAny, isAny, isAny)
    expect(is5TimesAny(null)).toBe(true)
    const is6TimesAny = and(isAny, isAny, isAny, isAny, isAny, isAny)
    expect(is6TimesAny(null)).toBe(true)
  })

  test('returns false if some of its provided predicate evaluates to true', () => {
    const isAnyAndNever = and(isAny, isNever)
    expect(isAnyAndNever({})).toBe(false)
    const isAnyAndNeverAndObject = and(isAny, isNever, isObject)
    expect(isAnyAndNeverAndObject({})).toBe(false)
    const is3TimesAnyAnd1TimesNever = and(isAny, isAny, isAny, isNever)
    expect(is3TimesAnyAnd1TimesNever(null)).toBe(false)
    const is4TimesAnyAnd1TimesNever = and(isAny, isAny, isAny, isAny, isNever)
    expect(is4TimesAnyAnd1TimesNever(null)).toBe(false)
    const is5TimesAnyAnd1TimesNever = and(
      isAny,
      isAny,
      isAny,
      isAny,
      isAny,
      isNever,
    )
    expect(is5TimesAnyAnd1TimesNever(null)).toBe(false)
  })

  test('returns false if none of its provided predicates evaluates to true', () => {
    const isSomeAndString = and(isSome, isObject)
    expect(isSomeAndString(null)).toBe(false)
    const isSomeAndObjectAndArray = and(isSome, isObject, isArray)
    expect(isSomeAndObjectAndArray(null)).toBe(false)
    const is4TimesNever = and(isNever, isNever, isNever, isNever)
    expect(is4TimesNever(null)).toBe(false)
    const is5TimesNever = and(isNever, isNever, isNever, isNever, isNever)
    expect(is5TimesNever(null)).toBe(false)
    const is6TimesNever = and(
      isNever,
      isNever,
      isNever,
      isNever,
      isNever,
      isNever,
    )
    expect(is6TimesNever(null)).toBe(false)
  })
})
