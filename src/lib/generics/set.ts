import { Predicate } from '../types'
import { isSet } from '../predicates/isSet'

export const set = <T>(predicate: Predicate<T>): Predicate<Set<T>> => <U>(
  value: U,
): value is Extract<U, Set<T>> => isSet(value) && [...value].every((element) => predicate(element))
