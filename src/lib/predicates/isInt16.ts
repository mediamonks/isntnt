import { int } from '../generics'
import { Predicate } from '../types'

export const isInt16: Predicate<number> = int(16)
