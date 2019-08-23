import { either } from '../generics'

describe('either', () => {
  test('is a function', () => {
    expect(either).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isEitherAbcOrXyz = either('abc', 'xyz')
    expect(isEitherAbcOrXyz).toBeInstanceOf(Function)
  })

  test('eturns true for any input if no values are provided', () => {
    const isEitherWhatever = either()
    expect(isEitherWhatever('abc')).toBe(true)
    expect(isEitherWhatever(123)).toBe(true)
    expect(isEitherWhatever(null)).toBe(true)
    expect(isEitherWhatever({})).toBe(true)
  })

  test('returns true if its inputs equals any of its provided values', () => {
    const isEitherAbcOrXyz = either('abc', 'xyz')
    expect(isEitherAbcOrXyz('abc')).toBe(true)
    expect(isEitherAbcOrXyz('xyz')).toBe(true)
  })

  test('returns false if its inputs equals none of its provided values', () => {
    const isEitherAbcOrXyz = either('abc', 'xyz')
    expect(isEitherAbcOrXyz('mno')).toBe(false)
  })
})
