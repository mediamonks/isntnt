import { either } from '../generics'

describe('either', () => {
  test('is a function', () => {
    expect(either).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isEitherOf2 = either('abc', 'xyz')
    expect(isEitherOf2).toBeInstanceOf(Function)
  })

  test('returns true for any input if no values are provided', () => {
    const isEitherWhatever = either()
    expect(isEitherWhatever('abc')).toBe(true)
    expect(isEitherWhatever(123)).toBe(true)
    expect(isEitherWhatever(null)).toBe(true)
    expect(isEitherWhatever({})).toBe(true)
  })

  test('returns true if its inputs equals any of its provided values', () => {
    const isEitherOf2 = either('abc', 'xyz')
    expect(isEitherOf2('abc')).toBe(true)
    expect(isEitherOf2('xyz')).toBe(true)
    const isEitherOf3 = either('abc', 'mno', 'xyz')
    expect(isEitherOf3('abc')).toBe(true)
    expect(isEitherOf3('mno')).toBe(true)
    expect(isEitherOf3('xyz')).toBe(true)
  })

  test('returns false if its inputs equals none of its provided values', () => {
    const isEitherAbcOrXyz = either('abc', 'xyz')
    expect(isEitherAbcOrXyz('mno')).toBe(false)
  })
})
