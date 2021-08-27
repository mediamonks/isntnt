import { PlainObject, Predicate } from '../types'
import { and } from '../generics/and'
import { at } from '../generics/at'
import { isObject } from './isObject'

export const hasObjectConstructor = at(
  'constructor',
  (value: unknown): value is Object => value === Object,
)

/**
 * Checks if a value is a plain object.
 */
export const isPlainObject: Predicate<PlainObject> = and(
  isObject,
  (value: unknown): value is PlainObject =>
    hasObjectConstructor(Object.getPrototypeOf(value)) && String(value) === '[object Object]',
)
