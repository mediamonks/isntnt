import { Predicate } from '../types'
import { and } from '../generics/and'
import { at } from '../generics/at'
import { isFunction } from './isFunction'
import { isLength } from './isLength'

export const isArrayLike: Predicate<Record<number, unknown>> = and(
  at('length', isLength),
  (value: unknown): value is any => !isFunction(value),
)
