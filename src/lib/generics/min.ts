import { isNumber } from '../predicates'
import { Predicate } from '../types'

export const min = (floor: number) =>
  ((value) => isNumber(value) && value >= floor) as Predicate<number>
