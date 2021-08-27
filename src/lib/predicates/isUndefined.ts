import { Predicate } from '../types'
import { literal } from '../generics/literal'

/**
 * Check if a value is `undefined`
 */
export const isUndefined: Predicate<undefined> = literal(undefined)
