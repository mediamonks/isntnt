import { isNumber } from '../predicates'
import { Predicate } from '../types'

export const min = (floor: number): Predicate<number> => (value: unknown): value is number =>
  isNumber(value) && value >= floor
