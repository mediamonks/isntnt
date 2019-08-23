import { test as testExpression } from '../generics'

describe('test', () => {
  test('is a function', () => {
    expect(testExpression).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isAbc = testExpression(/abc/)
    expect(isAbc).toBeInstanceOf(Function)
  })

  test('returns true if its input matches its regular expression', () => {
    const isAbc = testExpression(/abc/)
    expect(isAbc('abc')).toBe(true)
    const isAbcIgnoreCase = testExpression(/abc/i)
    expect(isAbcIgnoreCase('ABC')).toBe(true)
  })

  test('returns false if its input does not match its regular expression', () => {
    const isAbc = testExpression(/abc/)
    expect(isAbc('ABC')).toBe(false)
    const isAbcIgnoreCase = testExpression(/abc/i)
    expect(isAbcIgnoreCase('xyz')).toBe(false)
  })

  test('returns false if its input is not a string', () => {
    const isAbc = testExpression(/abc/)
    expect(isAbc(42)).toBe(false)
    expect(isAbc(null)).toBe(false)
    expect(isAbc(['abc'])).toBe(false)
  })

  test('does not modify the lastIndex property of its given regular expression', () => {
    const expression = /abc/g
    const isAbc = testExpression(expression)
    isAbc('abc')
    expect(expression.lastIndex).toBe(0)
    expression.test('abc')
    expect(expression.lastIndex).toBe(3)
  })
})
