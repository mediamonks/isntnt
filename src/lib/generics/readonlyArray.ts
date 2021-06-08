import { Predicate, PredicateType } from '../types'
import { isReadonlyArray } from '../predicates/isReadonlyArray'

export const readonlyArray =
  <T>(predicate: Predicate<T>): Predicate<ReadonlyArray<T>> =>
  <U>(value: U): value is PredicateType<ReadonlyArray<T>, U> =>
    isReadonlyArray(value) && value.every((element) => predicate(element))
