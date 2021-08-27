import { Predicate } from '../types'
import { instance } from '../generics/instance'

/**
 * Checks if a value is RegExp object.
 */
export const isRegExp: Predicate<RegExp> = instance(RegExp)
