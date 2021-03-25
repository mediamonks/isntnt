import { EmptyPrimitive, Predicate } from '../types'
import { isNone } from './isNone'
import { isString } from './isString'

export const isEmptyPrimitive: Predicate<EmptyPrimitive> = <U>(
  value: U,
): value is Extract<U, EmptyPrimitive> => (isString(value) ? value.length === 0 : isNone(value))
