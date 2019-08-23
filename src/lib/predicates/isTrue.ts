import { Predicate } from '../types'
import { literal } from '../generics/literal'

export const isTrue: Predicate<true> = literal(true)
