import { Predicate, DeepMerge, Unreachable, FillArray } from '../types'
import { isAny } from '../predicates/isAny'

export const and = <T extends ReadonlyArray<Predicate<unknown>>>(
  ...predicates: AndPredicates<T>
): Predicate<StaticAnd<T>> => {
  const length = predicates.length
  switch (length) {
    case 0: {
      return isAny
    }
    case 1: {
      return predicates[0] as Predicate<StaticAnd<T>>
    }
    case 2: {
      const a = predicates[0]
      const b = predicates[1]
      return ((value: unknown) => a(value) && b(value)) as any
    }
    case 3: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      return ((value: unknown) => a(value) && b(value) && c(value)) as any
    }
    case 4: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      const d = predicates[3]
      return ((value: unknown) => a(value) && b(value) && c(value) && d(value)) as any
    }
    case 5: {
      const a = predicates[0]
      const b = predicates[1]
      const c = predicates[2]
      const d = predicates[3]
      const e = predicates[4]
      return ((value: unknown) => a(value) && b(value) && c(value) && d(value) && e(value)) as any
    }
    default: {
      return ((value: unknown) => {
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

export type AndPredicates<T extends ReadonlyArray<Predicate<unknown>>> = T extends [
  infer A,
  ...infer B
]
  ? A extends Predicate<infer C>
    ? B extends ReadonlyArray<Predicate<infer D>>
      ? DeepMerge<C, D> extends never
        ? [A, ...FillArray<B, A>]
        : [A, ...AndPredicates<B>]
      : [A]
    : Unreachable
  : T

export type StaticAnd<T extends ReadonlyArray<Predicate<unknown>>> = T extends [infer A]
  ? A extends Predicate<infer B>
    ? B
    : Unreachable
  : T extends [infer A, ...infer B]
  ? A extends Predicate<infer C>
    ? B extends ReadonlyArray<Predicate<unknown>>
      ? DeepMerge<C, StaticAnd<B>>
      : C
    : Unreachable
  : Unreachable
