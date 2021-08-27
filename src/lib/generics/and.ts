import { Predicate, Static } from '../types'
import { isAny } from '../predicates/isAny'

export const and = <T extends ReadonlyArray<Predicate<any>>>(
  ...predicates: T
): Predicate<StaticAnd<T>> => {
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
      return ((value: unknown): value is StaticAnd<T> => a(value) && b(value))
    }
    case 3: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      return ((value: unknown): value is StaticAnd<T> => a(value) && b(value) && c(value))
    }
    case 4: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      const d = predicates[3]
      return ((value: unknown): value is StaticAnd<T>  => a(value) && b(value) && c(value) && d(value))
    }
    case 5: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      const d = predicates[3]
      const e = predicates[4]
      return ((value: unknown): value is StaticAnd<T> => a(value) && b(value) && c(value) && d(value) && e(value))
    }
    default: {
      return ((value: unknown) : value is StaticAnd<T> => {
        let isValid = true
        let index = 0
        while (isValid && index < length) {
          isValid = predicates[index++](value)
        }
        return isValid
      })
    }
  }
}

export type StaticAnd<T extends ReadonlyArray<Predicate<any>>> = T extends Readonly<[]> 
  ? unknown 
  : T extends Readonly<[infer A, ...infer B]>
    ? A extends Predicate<any> 
      ? B extends ReadonlyArray<Predicate<any>> 
        ? Static<A> & StaticAnd<B> 
        : never
      : never
    : never
