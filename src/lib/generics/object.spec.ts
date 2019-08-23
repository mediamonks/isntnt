import { object } from '../generics'
import { isAny, isNever, isString, isNumber } from '../predicates'

describe('object', () => {
  test('is a function', () => {
    expect(object).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isAnyObject = object(isAny)
    expect(isAnyObject).toBeInstanceOf(Function)
  })

  test('returns true if every property of an object evaluates to true with its predicate', () => {
    const isAnyObject = object(isAny)
    expect(isAnyObject({ a: 1, b: 'abc', c: [] })).toBe(true)
    expect(isAnyObject([1, 'abc', {}])).toBe(true)
    const isStringObject = object(isString)
    expect(isStringObject({ a: 'abc', b: 'mno', x: 'xyz' })).toBe(true)
    expect(isStringObject(['abc', 'mno', 'xyz'])).toBe(true)
  })

  test('returns true if an empty object is passed', () => {
    const isAnyObject = object(isAny)
    expect(isAnyObject({})).toBe(true)
    expect(isAnyObject([])).toBe(true)
    const isEmptyObject = object(isNever)
    expect(isEmptyObject({})).toBe(true)
    expect(isAnyObject([])).toBe(true)
  })

  test('returns true if an object without a prototype is passed', () => {
    const objectWithoutPrototype = Object.create(null)
    const isAnyObject = object(isAny)
    expect(isAnyObject(objectWithoutPrototype)).toBe(true)
    const isEmptyObject = object(isNever)
    expect(isEmptyObject(objectWithoutPrototype)).toBe(true)
  })

  test('returns false if some properties of an object evaluates to true with its predicate', () => {
    const isStringObject = object(isString)
    expect(isStringObject({ a: 'abc', b: 1, c: 'xyz' })).toBe(false)
    const isNumberObject = object(isNumber)
    expect(isNumberObject({ a: 42, b: 'xyz', c: 12.5 })).toBe(false)
  })

  test('returns false if no properties of an object evaluates to true with its predicate', () => {
    const isStringObject = object(isString)
    expect(isStringObject({ a: 42, b: null, c: [] })).toBe(false)
    const isNumberObject = object(isNumber)
    expect(isNumberObject({ a: [], b: 'abc', c: true })).toBe(false)
  })

  test('returns false if its provided value is not an object', () => {
    const isAnyObject = object(isAny)
    expect(isAnyObject(null)).toBe(false)
    expect(isAnyObject(42)).toBe(false)
    expect(isAnyObject('xyz')).toBe(false)
    expect(isAnyObject(isAny)).toBe(false)
  })

  test('ignores properties from the prototype chain', () => {
    class TestObject {
      public value: number
      constructor(value: number) {
        this.value = value
      }
    }
    ;(TestObject.prototype as any).prototypeProperty = 'abc'
    const isNumberObject = object(isNumber)
    expect(isNumberObject(new TestObject(42))).toBe(true)
  })
})
