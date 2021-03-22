import { Predicate } from '../types'
import { isArray } from '../predicates/isArray'

type BaseTuple = ReadonlyArray<any>

export const tuple = <T extends BaseTuple>(
  ...predicates: { [K in keyof T]: Predicate<T[K]> }
): Predicate<Readonly<{ [K in keyof T]: T[K] }> | { [K in keyof T]: T[K] }> =>
  ((value: any) => {
    const isArrayOfLength = isArray(value) && value.length === predicates.length
    if (isArrayOfLength) {
      for (let i = 0; i < predicates.length; ++i) {
        if (!predicates[i]((value as any)[i])) {
          return false
        }
      }
    }
    return isArrayOfLength
  }) as any
