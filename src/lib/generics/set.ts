import { Predicate, Static } from '../types'
import { isSet } from '../predicates/isSet'

export const set = <T extends Predicate<any>>(predicate: T): Predicate<Set<Static<T>>> => (
  value: unknown,
): value is Set<Static<T>> => {
  let isValid = isSet(value)
  if (isValid) {
    for (const entry of value  as Set<unknown>) {
      isValid = predicate(entry)
      if (!isValid) {
        break
      }
    }
  }
  return isValid
}
