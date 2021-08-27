import { isNumber } from '../predicates'
import { Predicate } from '../types'

export const above = (floor: number): Predicate<number> => (value: unknown): value is number =>
  isNumber(value) && value > floor
