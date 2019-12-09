import { Predicate } from '../types'
import { or } from './or'
import { isNone } from '../predicates/isNone'

export const noneable = <T>(predicate: Predicate<T>) => or(predicate, isNone)
