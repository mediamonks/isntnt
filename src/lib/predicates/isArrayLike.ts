import { and } from '../generics/and'
import { at } from '../generics/at'
import { isFunction } from './isFunction'
import { isLength } from './isLength'
import { ArrayLike, Predicate } from '../types'

export const isArrayLike = and(
  at('length', isLength),
  (value: unknown): value is any => !isFunction(value),
) as Predicate<ArrayLike>
