import { PlainObject, Predicate } from '../types'
import { isObject } from '../predicates'

export const record = <K extends PropertyKey, T>(
  keyPredicate: Predicate<K>,
  valuePredicate: Predicate<T>,
) => (value: unknown): value is Record<K, T> => {
  let isValid = isObject(value)
  if (isValid) {
    for (const key in value as PlainObject) {
      if (Object.hasOwnProperty.call(value, key)) {
        isValid = keyPredicate(key) && valuePredicate((value as PlainObject)[key])
        if (!isValid) {
          break
        }
      }
    }
  }
  return isValid
}
