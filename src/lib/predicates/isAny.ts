import { Predicate } from '../types'

export const isAny: Predicate<any> = (() => true) as any
