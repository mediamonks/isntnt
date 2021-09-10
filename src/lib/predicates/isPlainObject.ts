import { PlainObject, Predicate } from '../types'
import { at } from '../generics/at'
import { isObject } from './isObject'

export const hasObjectConstructor = at(
  'constructor',
  (value: unknown): value is Object => value === Object,
)

/**
 * Checks if a value is a plain object.
 */
export const isPlainObject: Predicate<PlainObject> = (value: unknown): value is PlainObject =>
  isObject(value) && hasObjectConstructor(value)
