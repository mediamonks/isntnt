import { instance } from '../generics'

describe('instance', () => {
  test('is a function', () => {
    expect(instance).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isArray = instance(Array)
    expect(isArray).toBeInstanceOf(Function)
  })

  test('returns true if its input is an instance of the provided constructor', () => {
    const isArray = instance(Array)
    expect(isArray([])).toBe(true)
    const isObject = instance(Object)
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
  })

  test('returns false if its input is not an instance of the provided constructor', () => {
    const isArray = instance(Array)
    expect(isArray('abc')).toBe(false)
    expect(isArray({ length: 12 })).toBe(false)
    const isObject = instance(Object)
    expect(isObject(null)).toBe(false)
  })

  test('throws an error if its provided value is not a constructor', () => {
    expect(() => instance({} as any)).toThrow()
  })
})
