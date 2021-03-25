import { or } from '../generics/or'
import { EmptyPrimitive, Predicate } from '../types'
import { isEmptyString } from './isEmptyString'
import { isNone } from './isNone'

export const isEmptyPrimitive: Predicate<EmptyPrimitive> = or(isNone, isEmptyString)
