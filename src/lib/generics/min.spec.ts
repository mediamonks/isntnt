import { min } from '../generics'

describe('min', () => {
  test('is a function', () => {
    expect(min).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isMin8 = min(8)
    expect(isMin8).toBeInstanceOf(Function)
  })

  test('returns true if its input is greater than or eaqual to its floor value', () => {
    const isMin8 = min(8)
    expect(isMin8(8)).toBe(true)
    expect(isMin8(9)).toBe(true)
    expect(isMin8(Infinity)).toBe(true)
  })

  test('returns false if its input is less than its floor value', () => {
    const isMin8 = min(8)
    expect(isMin8(7)).toBe(false)
    expect(isMin8(-Infinity)).toBe(false)
  })

  test('returns false if its input is not a number', () => {
    const isMin8 = min(8)
    expect(isMin8(false)).toBe(false)
    expect(isMin8(undefined)).toBe(false)
    expect(isMin8(null)).toBe(false)
    expect(isMin8(NaN)).toBe(false)
    expect(isMin8('abc')).toBe(false)
    expect(isMin8({})).toBe(false)
    expect(isMin8({ length: 0 })).toBe(false)
    expect(isMin8(isMin8)).toBe(false)
  })
})
