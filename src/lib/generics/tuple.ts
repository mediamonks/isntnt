import { Predicate } from '../types'
import { isArray } from '../predicates/isArray'

type BaseTuple = ReadonlyArray<any>

type TuplePredicates<T extends BaseTuple> = { [K in keyof T]: Predicate<T[K]> }

type Tuple<T extends BaseTuple> = Readonly<{ [K in keyof T]: T[K] }> | { [K in keyof T]: T[K] }

export const tuple = <T extends BaseTuple>(
  ...predicates: TuplePredicates<T>
): Predicate<Tuple<T>> => <U>(value: U): value is Extract<U, T> => {
  const isArrayOfLength = isArray(value) && value.length === predicates.length
  if (isArrayOfLength) {
    for (let i = 0; i < predicates.length; ++i) {
      if (!predicates[i]((value as any)[i])) {
        return false
      }
    }
  }
  return isArrayOfLength
}
