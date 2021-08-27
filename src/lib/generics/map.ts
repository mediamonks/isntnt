import { Predicate, Static } from '../types'
import { isMap } from '../predicates/isMap'

export const map = <T extends Predicate<any>, U extends Predicate<any>>(keyPredicate: T, valuePredicate: U): Predicate<Map<Static<T>, Static<U>>> => (
  value: unknown,
): value is Map<Static<T>, Static<U>> => {
  let isValid = isMap(value)
  if (isValid) {
    for (const [key, entry] of value as Map<unknown, unknown>) {
      isValid = keyPredicate(key) && valuePredicate(entry)
      if (!isValid) {
        break
      }
    }
  }
  return isValid
}
