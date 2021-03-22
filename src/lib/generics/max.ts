import { isNumber } from '../predicates'
import { Predicate } from '../types'

export const max = (ceiling: number): Predicate<number> =>
  ((value) => isNumber(value) && value <= ceiling) as Predicate<number>
