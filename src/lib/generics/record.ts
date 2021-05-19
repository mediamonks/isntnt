import { Predicate, PredicateType } from '../types'
import { isObject } from '../predicates'

export const record =
  <K extends PropertyKey, T>(
    keyPredicate: Predicate<K>,
    valuePredicate: Predicate<T>,
  ): Predicate<Record<K, T>> =>
  <U>(value: U): value is PredicateType<Record<K, T>, U> => {
    const isObjectValue = isObject(value)
    if (isObjectValue) {
      for (const key in value) {
        if (
          Object.hasOwnProperty.call(value, key) &&
          (!keyPredicate(key) || !valuePredicate(value[key]))
        ) {
          return false
        }
      }
    }
    return isObjectValue
  }
