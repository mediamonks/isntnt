import { Predicate, PredicateType } from '../types'
import { isMap } from '../predicates/isMap'

export const map =
  <K, T>(keyPredicate: Predicate<K>, valuePredicate: Predicate<T>): Predicate<Map<K, T>> =>
  <U>(value: U): value is PredicateType<Map<K, T>, U> =>
    isMap(value) &&
    [...value].every(([key, element]) => keyPredicate(key) && valuePredicate(element))
