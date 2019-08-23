import { at } from './at'
import { isAny, isSomething, isObject, isString } from '../predicates'

describe('at', () => {
  test('is a function', () => {
    expect(at).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isAtA = at('a', isAny)
    expect(isAtA).toBeInstanceOf(Function)
  })

  test('returns true if the value at a given key evaluates to true', () => {
    const isObjectAtFoo = at('foo', isObject)
    expect(isObjectAtFoo({ foo: {} })).toBe(true)
    const isStringAtBar = at('bar', isString)
    expect(isStringAtBar({ bar: 'abc' })).toBe(true)
    const isStringAtBarOfFoo = at('foo', isStringAtBar)
    expect(isStringAtBarOfFoo({ foo: { bar: 'abc' } })).toBe(true)
  })

  test('returns true if the value at a given index evaluates to true', () => {
    const isObjectAtHead = at(0, isObject)
    expect(isObjectAtHead([{}])).toBe(true)
    const isStringAtOne = at(1, isString)
    expect(isStringAtOne([42, 'abc'])).toBe(true)
    const isStringAtOneOfHead = at(0, isStringAtOne)
    expect(isStringAtOneOfHead([[42, 'abc']])).toBe(true)
  })

  test('returns false if the value at a given key evaluates to false', () => {
    const isObjectAtFoo = at('foo', isSomething)
    expect(isObjectAtFoo({ foo: null })).toBe(false)
    const isStringAtBar = at('bar', isString)
    expect(isStringAtBar({ bar: 42 })).toBe(false)
    const isStringAtBarOfFoo = at('foo', isStringAtBar)
    expect(isStringAtBarOfFoo({ foo: { bar: 32 } })).toBe(false)
  })

  test('returns false if the value at a given index evaluates to false', () => {
    const isObjectAtHead = at(0, isObject)
    expect(isObjectAtHead([null])).toBe(false)
    const isStringAtOne = at(1, isString)
    expect(isStringAtOne(['abc', 42])).toBe(false)
    const isStringAtOneOfHead = at(0, isStringAtOne)
    expect(isStringAtOneOfHead([['abc', 42]])).toBe(false)
  })
})
