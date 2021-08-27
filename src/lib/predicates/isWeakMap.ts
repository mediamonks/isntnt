import { Predicate } from '../types'
import { instance } from '../generics/instance'

/**
 * Checks if a value is a WeakMap object.
 */
export const isWeakMap: Predicate<WeakMap<any, unknown>> = instance(WeakMap)
