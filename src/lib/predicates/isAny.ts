import { Predicate } from '../types'

/**
 * Always returns true.
 */
export const isAny: Predicate<any> = (() => true) as any
