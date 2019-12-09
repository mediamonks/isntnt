import { Predicate } from '../types'
import { or } from './or'
import { isNull } from '../predicates/isNull'

export const nullable = <T>(predicate: Predicate<T>): Predicate<T | null> =>
  or(predicate, isNull)
