import { isAny, isNever, isString } from '../predicates'
import { literal, record } from '../generics'

describe('record', () => {
  test('is a function', () => {
    expect(record).toBeInstanceOf(Function)
  })

  test('returns a function', () => {
    const isAnyRecord = record(isAny, isAny)
    expect(isAnyRecord).toBeInstanceOf(Function)
  })

  test('returns true if every key matches its predicate', () => {
    const isPersonRecord = record(isString, isAny)
    expect(isPersonRecord({ name: 'John', age: 42 })).toBe(true)
  })

  test('returns false if some keys match its predicate', () => {
    const isNameRecord = record(literal('name'), isAny)
    expect(isNameRecord({ name: 'John', age: 42 })).toBe(false)
  })

  test('returns false if no key matches its predicate', () => {
    const isNeverKeyRecord = record(isNever, isAny)
    expect(isNeverKeyRecord({ name: 'John', age: 42 })).toBe(false)
  })

  test('returns true if every value matches its predicate', () => {
    const isPersonRecord = record(isString, isAny)
    expect(isPersonRecord({ name: 'John', age: 42 })).toBe(true)
  })

  test('returns false if some values match its predicate', () => {
    const isStringRecord = record(isString, isString)
    expect(isStringRecord({ name: 'John', age: 42 })).toBe(false)
  })

  test('returns false if no value matches its predicate', () => {
    const isNeverValueRecord = record(isString, isNever)
    expect(isNeverValueRecord({ name: 'John', age: 42 })).toBe(false)
  })

  test('returns true if an empty object is passed', () => {
    const isNeverRecord = record(isNever, isNever)
    expect(isNeverRecord({})).toBe(true)
  })

  test('returns false if its input is not an object', () => {
    const isPersonRecord = record(isAny, isAny)
    expect(isPersonRecord(null)).toBe(false)
    expect(isPersonRecord(12)).toBe(false)
    expect(isPersonRecord('abc')).toBe(false)
  })
})
