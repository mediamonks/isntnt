import { Predicate } from '../types'
import { instance } from '../generics/instance'

/**
 * Checks if a value is a set.
 */
export const isSet: Predicate<Set<unknown>> = instance(Set)
