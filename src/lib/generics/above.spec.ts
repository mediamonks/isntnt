import { above } from '../generics'

describe('above', () => {
  test('is a function', () => {
    expect(above).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isAbove8 = above(8)
    expect(isAbove8).toBeInstanceOf(Function)
  })

  test('returns true if its input is greater than its floor value', () => {
    const isAbove8 = above(8)
    expect(isAbove8(9)).toBe(true)
    expect(isAbove8(Infinity)).toBe(true)
  })

  test('returns false if its input is equal to or less than its floor value', () => {
    const isAbove8 = above(8)
    expect(isAbove8(8)).toBe(false)
    expect(isAbove8(0)).toBe(false)
    expect(isAbove8(-Infinity)).toBe(false)
  })

  test('returns false if its input is not a number', () => {
    const isAbove8 = above(8)
    expect(isAbove8(false)).toBe(false)
    expect(isAbove8(undefined)).toBe(false)
    expect(isAbove8(null)).toBe(false)
    expect(isAbove8(NaN)).toBe(false)
    expect(isAbove8('abc')).toBe(false)
    expect(isAbove8({})).toBe(false)
    expect(isAbove8({ length: 0 })).toBe(false)
    expect(isAbove8(isAbove8)).toBe(false)
  })
})
