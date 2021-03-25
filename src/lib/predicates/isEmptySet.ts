import { set } from '../generics/set'
import { EmptySet, Predicate } from '../types'
import { isNever } from './isNever'

export const isEmptySet: Predicate<EmptySet> = set(isNever)
