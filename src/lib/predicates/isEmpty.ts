import { or } from '../generics/or'
import { Empty, Predicate } from '../types'
import { isEmptyArray } from './isEmptyArray'
import { isEmptyObject } from './isEmptyObject'
import { isEmptyPrimitive } from './isEmptyPrimitive'

export const isEmpty: Predicate<Empty> = or(isEmptyPrimitive, isEmptyArray, isEmptyObject)
