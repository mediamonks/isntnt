import { Static, Predicate } from '../types'
import { isObject } from '../predicates/isObject'

export const object = <T extends Predicate<any>>(predicate: T) => (
  value: any,
): value is Record<any, Static<T>> => {
  const isObjectValue = isObject(value)
  if (isObjectValue) {
    for (const key in value) {
      if (Object.hasOwnProperty.call(value, key)) {
        if (!predicate(value[key])) {
          return false
        }
      }
    }
  }
  return isObjectValue
}
