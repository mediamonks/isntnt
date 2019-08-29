import { Predicate, Intersect, Static } from '../types'
import { isAny } from '../predicates/isAny'

export const and = <T extends Array<Predicate<any>>>(
  ...predicates: T
): Predicate<Intersect<Static<T[number]>>> => {
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
      return ((value: any) => a(value) && b(value)) as any
    }
    case 3: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      return ((value: any) => a(value) && b(value) && c(value)) as any
    }
    case 4: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      const d = predicates[3]
      return ((value: any) =>
        a(value) && b(value) && c(value) && d(value)) as any
    }
    case 5: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      const d = predicates[3]
      const e = predicates[4]
      return ((value: any) =>
        a(value) && b(value) && c(value) && d(value) && e(value)) as any
    }
    default: {
      return ((value: any) => {
        for (let i = 0; i < length; ++i) {
          if (!predicates[i](value)) {
            return false
          }
        }
        return true
      }) as any
    }
  }
}
