import { Predicate } from '../types'
import { instance } from '../generics/instance'
import { isNever } from './isNever'

export const isSet: Predicate<Set<unknown>> =
  typeof Set === 'function' ? instance(Set) : isNever
