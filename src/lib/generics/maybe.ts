import { Predicate, None } from '../types'
import { or } from './or'
import { isNone } from '../predicates/isNone'

export const maybe = <T>(predicate: Predicate<T>): Predicate<T | None> => or(predicate, isNone)
