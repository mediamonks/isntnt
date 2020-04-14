import { Predicate, Static } from '../types'
import { isObject } from '../predicates/isObject'
import { at } from './at'

export const shape = <T extends Record<PropertyKey, Predicate<any>>>(
  shape: T,
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
  const predicates = Object.keys(shape).map((key) => at(key, shape[key]))
  return (
    value: unknown,
  ): value is {
    [P in {
      [K in keyof T]: Extract<Static<T[K]>, undefined> extends never ? K : never
    }[keyof T]]: Static<T[P]>
  } &
    {
      [P in {
        [K in keyof T]: Extract<Static<T[K]>, undefined> extends never ? never : K
      }[keyof T]]?: Static<T[P]>
    } => {
    const isObjectValue = isObject(value)
    if (isObjectValue) {
      for (let i = 0; i < predicates.length; ++i) {
        if (!predicates[i](value)) {
          return false
        }
      }
    }
    return isObjectValue
  }
}
