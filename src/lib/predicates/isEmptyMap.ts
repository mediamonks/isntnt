import { map } from '../generics/map'
import { EmptyMap, Predicate } from '../types'
import { isNever } from './isNever'

export const isEmptyMap: Predicate<EmptyMap> = map(isNever, isNever)
