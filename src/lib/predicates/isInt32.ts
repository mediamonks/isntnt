import { int } from '../generics'
import { Predicate } from '../types'

export const isInt32: Predicate<number> = int(32)
