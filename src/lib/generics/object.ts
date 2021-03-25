import { Predicate } from '../types'
import { isObject } from '../predicates/isObject'

export const object = <T>(predicate: Predicate<T>): Predicate<Record<any, T>> => <U>(
  value: U,
): value is Extract<U, Record<any, T>> => {
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
