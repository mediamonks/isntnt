import { isSerializableArray } from '../predicates'

describe('isSerializableArray', () => {
  test('is a function', () => {
    expect(isSerializableArray).toBeInstanceOf(Function)
  })

  test('returns true if its input is an empty Array', () => {
    expect(isSerializableArray([])).toBe(true)
  })

  test('returns true if every of its Array elements is serializable', () => {
    expect(isSerializableArray([1, 2, 3])).toBe(true)
    expect(isSerializableArray([1, 'abc', {}])).toBe(true)
  })
  test('returns false if some of its Array elements are serializable', () => {
    expect(isSerializableArray([Infinity, 'abc', null])).toBe(false)
    expect(isSerializableArray([null, {}, NaN])).toBe(false)
  })

  test('returns false if none of its Array elements are serializable', () => {
    expect(isSerializableArray([Infinity, NaN, () => {}])).toBe(false)
    expect(isSerializableArray([() => {}])).toBe(false)
  })

  test('returns false if its input is not an Array', () => {
    expect(isSerializableArray(() => {})).toBe(false)
    expect(isSerializableArray({ foo: 'bar' })).toBe(false)
    expect(isSerializableArray(NaN)).toBe(false)
    expect(isSerializableArray(Infinity)).toBe(false)
    expect(isSerializableArray('abc')).toBe(false)
    expect(isSerializableArray({ length: 10 })).toBe(false)
    expect(isSerializableArray(null)).toBe(false)
  })
})
