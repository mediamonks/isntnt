import { isNumber } from '../predicates'
import { Predicate } from '../types'

export const above = (floor: number) =>
  ((value: any) => isNumber(value) && value > floor) as Predicate<number>
