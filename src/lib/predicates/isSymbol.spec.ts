import { isSymbol } from '../predicates'

describe('isSymbol', () => {
  test('is a function', () => {
    expect(isSymbol).toBeInstanceOf(Function)
  })

  test('returns true for any value that is a symbol', () => {
    expect(isSymbol(Symbol())).toBe(true)
    expect(isSymbol(Symbol.iterator)).toBe(true)
  })

  test('returns false for any value that is not an Array', () => {
    expect(isSymbol(undefined)).toBe(false)
    expect(isSymbol(null)).toBe(false)
    expect(isSymbol(true)).toBe(false)
    expect(isSymbol(42)).toBe(false)
    expect(isSymbol('abc')).toBe(false)
    expect(isSymbol([])).toBe(false)
    expect(isSymbol({})).toBe(false)
    expect(isSymbol({ length: 0 })).toBe(false)
    expect(isSymbol(isSymbol)).toBe(false)
  })
})
