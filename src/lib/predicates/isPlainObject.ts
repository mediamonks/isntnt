import { and } from '../generics/and'
import { PlainObject, Predicate } from '../types'
import { isNone } from './isNone'
import { isObject } from './isObject'

export const isPlainObject: Predicate<PlainObject> = and(isObject, <U>(value: U): value is Extract<
  U,
  PlainObject
> => {
  const prototype = Object.getPrototypeOf(value) as Object | null
  return (
    isNone(prototype) || (prototype.constructor === Object && String(value) === '[object Object]')
  )
})
