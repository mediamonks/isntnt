import { set } from '../generics'
import { isAny, isSome, isNever } from '../predicates'

describe('set', () => {
  test('is a function', () => {
    expect(set).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    expect(set(isAny)).toBeInstanceOf(Function)
  })

  test('returns true if its input is an empty Set', () => {
    const isAnySet = set(isAny)
    expect(isAnySet(new Set())).toBe(true)
    const isNeverSet = set(isNever)
    expect(isNeverSet(new Set())).toBe(true)
  })

  test('returns true if every of its Set elements evaluate to true', () => {
    const isAnySet = set(isAny)
    expect(isAnySet(new Set([1, 2, 3]))).toBe(true)
    const isSomeSet = set(isSome)
    expect(isSomeSet(new Set([1, 'abc', {}]))).toBe(true)
  })

  test('returns false if its input is not an Set', () => {
    const isAnySet = set(isAny)
    expect(isAnySet(10)).toBe(false)
    expect(isAnySet('abc')).toBe(false)
    expect(isAnySet({ length: 10 })).toBe(false)
    expect(isAnySet(null)).toBe(false)
  })

  test('returns false if some of its Set elements evaluate to true', () => {
    const isSomeSet = set(isSome)
    expect(isSomeSet(new Set([1, 'abc', null]))).toBe(false)
    const isObjectSet = set(isSome)
    expect(isObjectSet(new Set([null, {}, []]))).toBe(false)
  })

  test('returns false if none of its Set elements evaluate to true', () => {
    const isSomeSet = set(isSome)
    expect(isSomeSet(new Set([null, undefined, NaN]))).toBe(false)
    const isNeverSet = set(isNever)
    expect(isNeverSet(new Set([1, 'abc', true]))).toBe(false)
  })
})
