import { or } from '../generics'
import { isAny, isSome, isNever, isObject, isArray } from '../predicates'

describe('or', () => {
  test('is a function', () => {
    expect(or).toBeInstanceOf(Function)
  })

  test('returns isAny if no arguments are provided', () => {
    expect(or()).toBe(isAny)
  })

  test('returns its input if a single argument is provided', () => {
    const input = (value: unknown): value is 1 => value === 1
    expect(or(input)).toBe(input)
  })

  test('returns true if every of its provided predicates evaluates to true', () => {
    const isAnyOrSome = or(isAny, isSome)
    expect(isAnyOrSome({})).toBe(true)
    const isAnyOrSomeOrObject = or(isAny, isSome, isObject)
    expect(isAnyOrSomeOrObject({})).toBe(true)
    const is4TimesAny = or(isAny, isAny, isAny, isAny)
    expect(is4TimesAny(null)).toBe(true)
    const is5TimesAny = or(isAny, isAny, isAny, isAny, isAny)
    expect(is5TimesAny(null)).toBe(true)
    const is6TimesAny = or(isAny, isAny, isAny, isAny, isAny, isAny)
    expect(is6TimesAny(null)).toBe(true)
  })

  test('returns true if some of its provided predicate evaluates to true', () => {
    const isAnyOrNever = or(isAny, isNever)
    expect(isAnyOrNever({})).toBe(true)
    const isAnyOrNeverOrObject = or(isAny, isNever, isObject)
    expect(isAnyOrNeverOrObject({})).toBe(true)
    const is4TimesAnyOrSome = or(isAny, isSome, isAny, isSome)
    expect(is4TimesAnyOrSome(null)).toBe(true)
    const is5TimesAnyOrSome = or(isAny, isSome, isAny, isSome, isAny)
    expect(is5TimesAnyOrSome(null)).toBe(true)
    const is6TimesAnyOrSome = or(isAny, isSome, isAny, isSome, isAny, isSome)
    expect(is6TimesAnyOrSome(null)).toBe(true)
  })

  test('returns false if none of its provided predicates evaluates to true', () => {
    const isSomeOrString = or(isSome, isObject)
    expect(isSomeOrString(null)).toBe(false)
    const isSomeOrObjectOrArray = or(isSome, isObject, isArray)
    expect(isSomeOrObjectOrArray(null)).toBe(false)
    const is4TimesNeverOrSome = or(isNever, isSome, isNever, isSome)
    expect(is4TimesNeverOrSome(null)).toBe(false)
    const is5TimesNeverOrSome = or(isNever, isSome, isNever, isSome, isNever)
    expect(is5TimesNeverOrSome(null)).toBe(false)
    const is6TimesNeverOrSome = or(
      isNever,
      isSome,
      isNever,
      isSome,
      isNever,
      isSome,
    )
    expect(is6TimesNeverOrSome(null)).toBe(false)
  })
})
