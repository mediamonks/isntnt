import { and } from '../generics/and'
import { at } from '../generics/at'
import { PlainObject } from '../types'
import { isObject } from './isObject'

export const hasObjectConstructor = at(
  'constructor',
  (value: unknown): value is Object => value === Object,
)

export const isPlainObject = and(
  isObject,
  (value: unknown): value is PlainObject =>
    hasObjectConstructor(Object.getPrototypeOf(value)) && String(value) === '[object Object]',
) as <T>(value: T) => value is Extract<T, PlainObject>
