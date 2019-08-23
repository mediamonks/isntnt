import { array } from '../generics'
import { isAny, isSomething, isNever } from '../predicates'

describe('array', () => {
  test('is a function', () => {
    expect(array).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    expect(array(isAny)).toBeInstanceOf(Function)
  })

  test('returns true if its input is an empty Array', () => {
    const isAnyArray = array(isAny)
    expect(isAnyArray([])).toBe(true)
    const isNeverArray = array(isNever)
    expect(isNeverArray([])).toBe(true)
  })

  test('returns true if every of its Array elements evaluates to true', () => {
    const isAnyArray = array(isAny)
    expect(isAnyArray([1, 2, 3])).toBe(true)
    const isSomethingArray = array(isSomething)
    expect(isSomethingArray([1, 'abc', {}])).toBe(true)
  })

  test('returns false if its input is not an Array', () => {
    const isAnyArray = array(isAny)
    expect(isAnyArray(10)).toBe(false)
    expect(isAnyArray('abc')).toBe(false)
    expect(isAnyArray({ length: 10 })).toBe(false)
    expect(isAnyArray(null)).toBe(false)
  })

  test('returns false if some of its Array elements evaluates to true', () => {
    const isSomethingArray = array(isSomething)
    expect(isSomethingArray([1, 'abc', null])).toBe(false)
    const isObjectArray = array(isSomething)
    expect(isObjectArray([null, {}, []])).toBe(false)
  })

  test('returns false if none of its Array elements evaluates to true', () => {
    const isSomethingArray = array(isSomething)
    expect(isSomethingArray([null, undefined, NaN])).toBe(false)
    const isNeverArray = array(isNever)
    expect(isNeverArray([1, 'abc', true])).toBe(false)
  })
})
