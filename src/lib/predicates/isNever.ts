import { Predicate } from '../types'

/**
 * Always returns false.
 */
export const isNever: Predicate<never> = (() => false) as any
