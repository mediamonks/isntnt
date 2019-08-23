import { shape } from '../generics'
import { isString } from '../predicates/isString'
import { isInt } from '../predicates/isInt'

describe('shape', () => {
  test('is a function', () => {
    expect(shape).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isAnyShape = shape({})
    expect(isAnyShape).toBeInstanceOf(Function)
  })

  test('returns true if every property matches its predicate', () => {
    const isPersonShape = shape({
      name: isString,
      age: isInt,
    })
    expect(isPersonShape({ name: 'John', age: 42 })).toBe(true)
  })

  test('returns false if some properties match its predicate', () => {
    const isPersonShape = shape({
      name: isString,
      age: isInt,
    })
    expect(isPersonShape({ name: 'John', age: 12.5 })).toBe(false)
    expect(isPersonShape({ name: null, age: 42 })).toBe(false)
    expect(isPersonShape({ name: 'Jane' })).toBe(false)
  })

  test('returns false if no property matches its predicate', () => {
    const isPersonShape = shape({
      name: isString,
      age: isInt,
    })
    expect(isPersonShape({ name: null, age: 12.5 })).toBe(false)
    expect(isPersonShape({ name: null })).toBe(false)
    expect(isPersonShape({})).toBe(false)
    expect(isPersonShape([])).toBe(false)
  })

  test('returns false if its input is not an object', () => {
    const isPersonShape = shape({
      name: isString,
      age: isInt,
    })
    expect(isPersonShape(null)).toBe(false)
    expect(isPersonShape(12)).toBe(false)
    expect(isPersonShape('abc')).toBe(false)
  })
})
