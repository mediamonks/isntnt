import { array } from '../generics/array'
import { EmptyArray, Predicate } from '../types'
import { isNever } from './isNever'

export const isEmptyArray: Predicate<EmptyArray> = array(isNever)
