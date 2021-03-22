import { isNumber } from '../predicates'
import { Predicate } from '../types'

export const below = (ceiling: number) =>
  ((value: any) => isNumber(value) && value < ceiling) as Predicate<number>
