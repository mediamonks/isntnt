import { Predicate } from '../types'
import { isObject } from '../predicates'

export const record = <K extends PropertyKey, T>(
  keyPredicate: Predicate<K>,
  valuePredicate: Predicate<T>,
) => (value: unknown): value is Record<K, T> => {
  const isObjectValue = isObject(value)
  if (isObjectValue) {
    for (const key in value as object) {
      if (
        Object.hasOwnProperty.call(value, key) &&
        (!keyPredicate(key) || !valuePredicate((value as any)[key]))
      ) {
        return false
      }
    }
  }
  return isObjectValue
}

