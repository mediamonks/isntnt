import { and } from '../generics/and'
import { at } from '../generics/at'
import { PlainObject, Predicate } from '../types'
import { isObject } from './isObject'

const hasObjectConstructor: Predicate<{ constructor: ObjectConstructor }> = at(
  'constructor',
  (value: any): value is any => value === Object,
)

export const isPlainObject = and(
  isObject,
  (value: unknown): value is any =>
    hasObjectConstructor(Object.getPrototypeOf(value)) && String(value) === '[object Object]',
) as Predicate<PlainObject>
