import { Predicate } from '../types'
import { instance } from '../generics/instance'

/**
 * Checks if a value is a Map object.
 */
export const isMap: Predicate<Map<any, unknown>> = instance(Map)
