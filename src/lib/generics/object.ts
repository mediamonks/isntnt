import { Predicate, PredicateType } from '../types'
import { isObject } from '../predicates/isObject'

export const object =
  <T>(predicate: Predicate<T>): Predicate<Record<PropertyKey, T>> =>
  <U>(value: U): value is PredicateType<Record<PropertyKey, T>, U> => {
    const isObjectValue = isObject(value)
    if (isObjectValue) {
      for (const key in value) {
        if (Object.hasOwnProperty.call(value, key) && !predicate(value[key])) {
          return false
        }
      }
    }
    return isObjectValue
  }
