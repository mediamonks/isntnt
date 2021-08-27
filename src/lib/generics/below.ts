import { isNumber } from '../predicates'
import { Predicate } from '../types'

export const below = (ceiling: number): Predicate<number> => (value: unknown): value is number =>
  isNumber(value) && value < ceiling
