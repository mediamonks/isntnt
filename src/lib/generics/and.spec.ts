import { and } from '../generics'
import { isAny, isNever } from '../predicates'
import { Predicate } from '../types'

describe('and', () => {
  test('is a function', () => {
    expect(and).toBeInstanceOf(Function)
  })

  test('returns isAny if no arguments are provided', () => {
    expect(and()).toBe(isAny)
  })

  test('returns its input if a single argument is provided', () => {
    const input = (value: unknown) => value === 1
    expect(and(input as Predicate<1>)).toBe(input)
  })

  test('returns true if every of its provided predicates evaluates to true', () => {
    const isAnyAndSome = and(isAny, isAny)
    expect(isAnyAndSome({})).toBe(true)
    const is3TimesAny = and(isAny, isAny, isAny)
    expect(is3TimesAny({})).toBe(true)
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
    const is3TimesAnyAndNever = and(isAny, isNever, isAny)
    expect(is3TimesAnyAndNever(null)).toBe(false)
    const is4TimesAnyAndNever = and(isAny, isNever, isAny, isNever)
    expect(is4TimesAnyAndNever(null)).toBe(false)
    const is5TimesAnyAndNever = and(isAny, isNever, isAny, isNever, isAny)
    expect(is5TimesAnyAndNever(null)).toBe(false)
    const is6TimesAnyAndNever = and(isAny, isNever, isAny, isNever, isAny, isNever)
    expect(is6TimesAnyAndNever({})).toBe(false)
  })

  test('returns false if none of its provided predicates evaluates to true', () => {
    const isSomeAndString = and(isNever, isNever)
    expect(isSomeAndString(null)).toBe(false)
    const is3TimeNever = and(isNever, isNever, isNever)
    expect(is3TimeNever(null)).toBe(false)
    const is4TimesNever = and(isNever, isNever, isNever, isNever)
    expect(is4TimesNever(null)).toBe(false)
    const is5TimesNever = and(isNever, isNever, isNever, isNever, isNever)
    expect(is5TimesNever(null)).toBe(false)
    const is6TimesNever = and(isNever, isNever, isNever, isNever, isNever, isNever)
    expect(is6TimesNever(null)).toBe(false)
  })
})
