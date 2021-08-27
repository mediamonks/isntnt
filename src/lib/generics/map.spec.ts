import { map } from '../generics'
import { isAny, isSome, isNever, isNumber, isNumeric, isObject } from '../predicates'

describe('map', () => {
  test('is a function', () => {
    expect(map).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    expect(map(isAny, isAny)).toBeInstanceOf(Function)
  })

  test('returns true if its input is an empty Map', () => {
    const isAnyMap = map(isAny, isAny)
    expect(isAnyMap(new Map())).toBe(true)
    const isNeverMap = map(isNever, isNever)
    expect(isNeverMap(new Map())).toBe(true)
  })

  test('returns true if every of its Map entries evaluates to true', () => {
    const isAnyMap = map(isAny, isAny)
    expect(isAnyMap(new Map([[1, 1], [2, 2], [3, 3]]))).toBe(true)
    const isSomeMap = map(isAny, isSome)
    expect(isSomeMap(new Map([[1, 1], [2, 2], [3, 3]]))).toBe(true)
  })

  test('returns false if none of its Map entries evaluate to true', () => {
    const isNeverAnyMap = map(isNever, isAny)
    expect(isNeverAnyMap(new Map([[1, 1], [2, 2], [3, 3]]))).toBe(false)
    const isAnyNeverMap = map(isAny, isNever)
    expect(isAnyNeverMap(new Map([[1, 1], [2, 2], [3, 3]]))).toBe(false)
  })

  test('returns false if some of its Map keys evaluate to true', () => {
    const isNumberAnyMap = map(isNumber, isAny)
    expect(isNumberAnyMap(new Map<any, any>([[1, 1], [2, 2], ['foo', 3]]))).toBe(false)
    const isNumericAnyMap = map(isNumeric, isAny)
    expect(isNumericAnyMap(new Map([['1', 1], ['2', 2], ['foo', 3]]))).toBe(false)
  })

  test('returns false if none of its Map keys evaluate to true', () => {
    const isSomeMap = map(isAny, isSome)
    expect(isSomeMap(new Map([[1, null], [2, undefined], [3, NaN]]))).toBe(false)
    const isNeverMap = map(isAny, isNever)
    expect(isNeverMap(new Map([[1, 1], [2, 2], [3, 3]]))).toBe(false)
  })

  test('returns false if some of its Map values evaluate to true', () => {
    const isNumberMap = map(isAny, isNumber)
    expect(isNumberMap(new Map([[1, 1], [2, 2], [3, null]]))).toBe(false)
    const isObjectMap = map(isAny, isObject)
    expect(isObjectMap(new Map([[1, null], [2, {}], [3, {}]]))).toBe(false)
  })

  test('returns false if none of its Map values evaluate to true', () => {
    const isSomeMap = map(isAny, isSome)
    expect(isSomeMap(new Map([[1, null], [2, undefined], [3, NaN]]))).toBe(false)
    const isNeverMap = map(isAny, isNever)
    expect(isNeverMap(new Map([[1, 1], [2, 2], [3, 3]]))).toBe(false)
  })

  test('returns false if its input is not an Map', () => {
    const isAnyMap = map(isAny, isAny)
    expect(isAnyMap(10)).toBe(false)
    expect(isAnyMap('abc')).toBe(false)
    expect(isAnyMap({ length: 10 })).toBe(false)
    expect(isAnyMap(null)).toBe(false)
  })
})
