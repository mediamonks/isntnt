import { and } from '../generics/and'
import { PlainObject, Predicate, PredicateType } from '../types'
import { isNone } from './isNone'
import { isObject } from './isObject'

export const isPlainObject: Predicate<PlainObject> = and(
  isObject,
  <U>(value: U): value is PredicateType<PlainObject, U> => {
    const prototype = Object.getPrototypeOf(value) as Object | null
    return (
      isNone(prototype) || (prototype.constructor === Object && String(value) === '[object Object]')
    )
  },
)
