import { Static, Predicate } from '../types'
import { isObject } from '../predicates/isObject'
import { at } from './at'

type ShapePredicates = Record<PropertyKey, Predicate<any>>

export const shape = <T extends ShapePredicates>(
  shapePredicates: T,
): Predicate<
  {
    [P in {
      [K in keyof T]: Extract<Static<T[K]>, undefined> extends never ? K : never
    }[keyof T]]: Static<T[P]>
  } &
    {
      [P in {
        [K in keyof T]: Extract<Static<T[K]>, undefined> extends never ? never : K
      }[keyof T]]?: Static<T[P]>
    }
> => {
  const predicates = Object.entries(shapePredicates).map(([key, predicate]) => at(key, predicate))
  return ((value: unknown) => {
    const isObjectValue = isObject(value)
    if (isObjectValue) {
      for (let i = 0; i < predicates.length; ++i) {
        if (!predicates[i](value)) {
          return false
        }
      }
    }
    return isObjectValue
  }) as any
}
