import { int } from '../generics'
import { Predicate } from '../types'

export const isInt8: Predicate<number> = int(8)
