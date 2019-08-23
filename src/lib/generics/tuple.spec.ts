import { tuple } from '../generics'
import { isInt, isString, isAny } from '../predicates'

describe('tuple', () => {
  test('is a function', () => {
    expect(tuple).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isEmptyArray = tuple()
    expect(isEmptyArray).toBeInstanceOf(Function)
  })

  test('returns true for an empty Array if no predicates are provided', () => {
    const isEmptyArray = tuple()
    expect(isEmptyArray([])).toBe(true)
  })

  test('returns false for an Array with a length if no predicates are provided', () => {
    const isEmptyArray = tuple()
    expect(isEmptyArray([null])).toBe(false)
  })

  test('returns true if every element matches its predicate', () => {
    const isPoint = tuple(isInt, isInt)
    expect(isPoint([256, 42])).toBe(true)
    const isObjectEntry = tuple(isString, isAny)
    expect(isObjectEntry(['key', null])).toBe(true)
  })

  test('returns false if some elements match their predicate', () => {
    const isPoint = tuple(isInt, isInt)
    expect(isPoint([42, 12.5])).toBe(false)
    expect(isPoint(['abc', 42])).toBe(false)
    expect(isPoint([12])).toBe(false)
  })

  test('returns false if no elements match their predicate', () => {
    const isPoint = tuple(isInt, isInt)
    expect(isPoint(['abc', 12.5])).toBe(false)
    expect(isPoint([true, null])).toBe(false)
    expect(isPoint([{}])).toBe(false)
  })

  test('returns false if its input has an incorrect length', () => {
    const isPoint = tuple(isInt, isInt)
    expect(isPoint([])).toBe(false)
    expect(isPoint([1, 2, 3])).toBe(false)
  })

  test('returns false if its input is not an Array', () => {
    const isPoint = tuple(isInt, isInt)
    expect(isPoint(null)).toBe(false)
    expect(isPoint({ 0: 256, 1: 42 })).toBe(false)
    expect(isPoint(42)).toBe(false)
  })
})
