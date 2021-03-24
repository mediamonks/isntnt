import { and } from '../generics/and'
import { isFunction } from './isFunction'
import { ArrayLike, Predicate } from '../types'
import { hasLength } from './hasLength'

export const isArrayLike = and(
  hasLength,
  (value: unknown): value is any => !isFunction(value),
) as Predicate<ArrayLike>
