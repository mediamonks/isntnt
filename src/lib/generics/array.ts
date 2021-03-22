import { Predicate } from '../types'
import { isArray } from '../predicates/isArray'

export const array = <T>(predicate: Predicate<T>) =>
  ((value: any) => isArray(value) && value.every(predicate)) as Predicate<
    Array<T> | ReadonlyArray<T>
  >
