import { has } from './has'

describe('has', () => {
  test('is a function', () => {
    expect(has).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const hasA = has('a')
    expect(hasA).toBeInstanceOf(Function)
  })

  test('returns true if the value has a given key', () => {
    const hasFoo = has('foo')
    expect(hasFoo({ foo: {} })).toBe(true)
    const hasBar = has('bar')
    expect(hasBar({ bar: 'abc' })).toBe(true)
  })

  test('returns true if the value has a given index', () => {
    const hasZeroIndex = has(0)
    expect(hasZeroIndex([{}])).toBe(true)
    const hasTwoIndex = has(2)
    expect(hasTwoIndex([42, 'abc', {}])).toBe(true)
  })

  test('returns false if the value does not have a given key', () => {
    const hasFoo = has('foo')
    expect(hasFoo({})).toBe(false)
    const hasPrototype = has('prototype')
    expect(hasPrototype({})).toBe(false)
  })

  test('returns false if the value does not have a given index', () => {
    const hasHead = has(0)
    expect(hasHead([])).toBe(false)
    const hasTwoIndex = has(2)
    expect(hasTwoIndex(['abc', 42])).toBe(false)
  })

  test('returns false if the value is not object-like', () => {
    const hasHead = has(0)
    expect(hasHead(true)).toBe(false)
    expect(hasHead(false)).toBe(false)
    expect(hasHead(null)).toBe(false)
    expect(hasHead(undefined)).toBe(false)
  })
})
