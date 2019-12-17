import { isNumber } from '../predicates'
import { Predicate } from '../types'

export const above = (floor: number): Predicate<number> => (value: any): value is number =>
  isNumber(value) && value > floor
