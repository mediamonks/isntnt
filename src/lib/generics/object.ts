import { Predicate, PlainObject } from '../types'
import { isObject } from '../predicates/isObject'

export const object = <T>(predicate: Predicate<T>): Predicate<Record<PropertyKey, T>> => (
  value: unknown,
): value is Record<PropertyKey, T> => {
  let isValid = isObject(value)
  if (isValid) {
    for (const key in value as PlainObject) {
      if (Object.hasOwnProperty.call(value, key)) {
        isValid = predicate((value as PlainObject)[key])
        if (!isValid) {
          break
        }
      }
    }
  }
  return isValid
}
