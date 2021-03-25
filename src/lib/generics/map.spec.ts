import { isAny } from '../predicates/isAny'
import { isInt } from '../predicates/isInt'
import { isNever } from '../predicates/isNever'
import { isString } from '../predicates/isString'
import { literal } from './literal'
import { map } from './map'

describe('map', () => {
  test('is a function', () => {
    expect(map).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isAnyMap = map(isAny, isAny)
    expect(isAnyMap).toBeInstanceOf(Function)
  })

  test('returns true if every key matches its predicate', () => {
    const isStringMap = map(isString, isAny)
    expect(isStringMap(new Map([['a', 42]]))).toBe(true)
  })

  test('returns false if some keys match its predicate', () => {
    const isAMap = map(literal('a'), isAny)
    expect(
      isAMap(
        new Map([
          ['a', 42],
          ['b', 24],
        ]),
      ),
    ).toBe(false)
  })

  test('returns false if no key matches its predicate', () => {
    const isNeverKeyMap = map(isNever, isAny)
    expect(isNeverKeyMap(new Map([['a', 42]]))).toBe(false)
  })

  test('returns true if every value matches its predicate', () => {
    const isIntMap = map(isAny, isInt)
    expect(isIntMap(new Map([['a', 42]]))).toBe(true)
  })

  test('returns false if some values match its predicate', () => {
    const isStringMap = map(isString, isInt)
    expect(
      isStringMap(
        new Map([
          ['a', 42],
          ['b', null],
        ]),
      ),
    ).toBe(false)
  })

  test('returns false if no value matches its predicate', () => {
    const isNeverValueMap = map(isAny, isNever)
    expect(isNeverValueMap(new Map([['a', 42]]))).toBe(false)
  })

  test('returns true if an empty map is passed', () => {
    const isEmptyMap = map(isNever, isNever)
    expect(isEmptyMap(new Map())).toBe(true)
  })

  test('returns false if its input is not an object', () => {
    const isPersonMap = map(isAny, isAny)
    expect(isPersonMap(null)).toBe(false)
    expect(isPersonMap(12)).toBe(false)
    expect(isPersonMap('abc')).toBe(false)
  })
})
