import { Predicate } from '../types'
import { or } from './or'
import { isNone } from '../predicates/isNone'

export const maybe = <T>(predicate: Predicate<T>) => or(predicate, isNone)
