import { Predicate, Static } from '../types'
import { isAny } from '../predicates/isAny'

export const or = <T extends ReadonlyArray<Predicate<any>>>(
  ...predicates: T
): Predicate<StaticOr<T>> => {
  const length = predicates.length
  switch (length) {
    case 0: {
      return isAny
    }
    case 1: {
      return predicates[0]
    }
    case 2: {
      const a = predicates[0]
      const b = predicates[1]
      return (value: unknown): value is StaticOr<T> => a(value) || b(value)
    }
    case 3: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      return (value: unknown): value is StaticOr<T> => a(value) || b(value) || c(value)
    }
    case 4: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      const d = predicates[3]
      return (value: unknown): value is StaticOr<T> => a(value) || b(value) || c(value) || d(value)
    }
    case 5: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      const d = predicates[3]
      const e = predicates[4]
      return (value: unknown): value is StaticOr<T> => a(value) || b(value) || c(value) || d(value) || e(value)
    }
    default: {
      return ((value: unknown): value is StaticOr<T> => {
        let isValid = false
        let index = 0
        while (!isValid && index < length) {
          isValid = predicates[index++](value)
        }
        return isValid
      })
    }
  }
}

export type StaticOr<T extends ReadonlyArray<Predicate<any>>> = Static<T[number]>
