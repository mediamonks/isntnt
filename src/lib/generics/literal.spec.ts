import { literal } from '../generics'

describe('literal', () => {
  test('is a function', () => {
    expect(literal).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isAbc = literal('abc')
    expect(isAbc).toBeInstanceOf(Function)
  })

  test('returns true if its input equals its literal value', () => {
    const isAbc = literal('abc')
    expect(isAbc('abc')).toBe(true)
    const isOne = literal(1)
    expect(isOne(1)).toBe(true)
  })

  test('returns false if its input does not equal its literal value', () => {
    const isAbc = literal('abc')
    expect(isAbc('xyz')).toBe(false)
    const isOne = literal(1)
    expect(isOne(2)).toBe(false)
  })
})
