import { isInt } from '../predicates'
import { Predicate } from '../types'
import { isPositive } from '../predicates/isPositive'

export const uint = (bitDepth: number): Predicate<number> => {
  const ceiling = Math.pow(2, bitDepth)
  return (value: any): value is number =>
    isInt(value) && isPositive(value) && value < ceiling
}
