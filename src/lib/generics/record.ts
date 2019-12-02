import { Predicate, Static } from '../types'
import { isObject } from '../predicates'

export const record = <
  K extends Predicate<string | symbol>,
  T extends Predicate<any>
>(
  keyPredicate: K,
  valuePredicate: T,
) => {
  return (value: unknown): value is Record<Static<K>, Static<T>> => {
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
}
