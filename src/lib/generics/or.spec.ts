import { or } from '../generics'
import { isAny, isNever } from '../predicates'

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
    const is2TimesAny = or(isAny, isAny)
    expect(is2TimesAny({})).toBe(true)
    const is3TimesAny = or(isAny, isAny, isAny)
    expect(is3TimesAny({})).toBe(true)
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
    const is3TimesAnyOrNever = or(isAny, isNever, isAny)
    expect(is3TimesAnyOrNever({})).toBe(true)
    const is4TimesAnyOrNever = or(isAny, isNever, isAny, isNever)
    expect(is4TimesAnyOrNever(null)).toBe(true)
    const is5TimesAnyOrNever = or(isAny, isNever, isAny, isNever, isAny)
    expect(is5TimesAnyOrNever(null)).toBe(true)
    const is6TimesAnyOrNever = or(isAny, isNever, isAny, isNever, isAny, isNever)
    expect(is6TimesAnyOrNever(null)).toBe(true)
  })

  test('returns false if none of its provided predicates evaluates to true', () => {
    const is2TimesNever = or(isNever, isNever)
    expect(is2TimesNever(null)).toBe(false)
    const is3TimesNever = or(isNever, isNever, isNever)
    expect(is3TimesNever(null)).toBe(false)
    const is4TimesNever = or(isNever, isNever, isNever, isNever)
    expect(is4TimesNever(null)).toBe(false)
    const is5TimesNever = or(isNever, isNever, isNever, isNever, isNever)
    expect(is5TimesNever(null)).toBe(false)
    const is6TimesNever = or(isNever, isNever, isNever, isNever, isNever, isNever)
    expect(is6TimesNever(null)).toBe(false)
  })
})
