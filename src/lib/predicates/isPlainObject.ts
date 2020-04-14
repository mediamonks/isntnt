import { Predicate } from '../types'
import { and } from '../generics/and'
import { at } from '../generics/at'
import { isObject } from './isObject'

export const hasObjectConstructor = at(
  'constructor',
  (value: unknown): value is Object => value === Object,
)

export const isPlainObject: Predicate<{}> = and(
  isObject,
  (value: unknown): value is {} =>
    hasObjectConstructor(Object.getPrototypeOf(value)) && String(value) === '[object Object]',
)
