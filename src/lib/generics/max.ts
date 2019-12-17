import { isNumber } from '../predicates'
import { Predicate } from '../types'

export const max = (ceiling: number): Predicate<number> => (value: any): value is number =>
  isNumber(value) && value <= ceiling
