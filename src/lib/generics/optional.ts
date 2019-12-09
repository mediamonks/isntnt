import { Predicate } from '../types'
import { or } from './or'
import { isUndefined } from '../predicates/isUndefined'

export const optional = <T>(predicate: Predicate<T>) =>
  or(predicate, isUndefined)
