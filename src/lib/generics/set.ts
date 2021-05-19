import { Predicate, PredicateType } from '../types'
import { isSet } from '../predicates/isSet'

export const set =
  <T>(predicate: Predicate<T>): Predicate<Set<T>> =>
  <U>(value: U): value is PredicateType<Set<T>, U> =>
    isSet(value) && [...value].every((element) => predicate(element))
