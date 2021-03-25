import { literal } from '../generics/literal'
import { Predicate } from '../types'

export const isTrue: Predicate<true> = literal(true)
