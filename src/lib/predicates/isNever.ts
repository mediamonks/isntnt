import { Predicate } from '../types'

export const isNever: Predicate<never> = (() => false) as any
