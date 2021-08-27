import { PlainObject, Predicate, Static } from '../types'
import { isObject } from '../predicates/isObject'

export const shape = <T extends ShapePredicateRecord>(
  shape: T,
): Predicate<StaticShape<T>> => {
  const predicates = Object.keys(shape).map((key) => {
    const valuePredicate = shape[key]
    return (object: PlainObject): object is any => valuePredicate(object[key])
  })

  return (
    value: unknown,
  ): value is StaticShape<T> => {
    let isValid = isObject(value)
    if (isValid) {
      for (let i = 0; i < predicates.length; ++i) {
        isValid = predicates[i](value as PlainObject)
        if (!isValid) {
          break
        }
      }
    }
    return isValid
  }
}

type ShapePredicateRecord = Record<PropertyKey, Predicate<any>>

type StaticShape<T extends ShapePredicateRecord> = {
    [P in {
      [K in keyof T]: Extract<Static<T[K]>, undefined> extends never ? K : never
    }[keyof T]]: Static<T[P]>
  } &
    {
      [P in {
        [K in keyof T]: Extract<Static<T[K]>, undefined> extends never ? never : K
      }[keyof T]]?: Static<T[P]>
    }