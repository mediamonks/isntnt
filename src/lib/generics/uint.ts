import { isInt, isPositive } from '../predicates'
import { Predicate } from '../types'
import { and } from './and'
import { below } from './below'

export const uint = (bitDepth: number): Predicate<number> => {
  const ceiling = Math.pow(2, bitDepth)
  return and(isInt, isPositive, below(ceiling))
}
