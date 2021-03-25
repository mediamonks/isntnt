import { or } from '../generics/or'
import { Empty, Predicate } from '../types'
import { isEmptyArray } from './isEmptyArray'
import { isEmptyMap } from './isEmptyMap'
import { isEmptyObject } from './isEmptyObject'
import { isEmptyPrimitive } from './isEmptyPrimitive'
import { isEmptySet } from './isEmptySet'

export const isEmpty: Predicate<Empty> = or(
  isEmptyPrimitive,
  isEmptyArray,
  isEmptyObject,
  isEmptySet,
  isEmptyMap,
)
