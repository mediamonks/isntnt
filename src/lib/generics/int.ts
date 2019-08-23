import { below } from './below'
import { min } from './min'
import { isInt } from '../predicates'
import { Predicate } from '../types'

export const int = (bitDepth: number): Predicate<number> => {
  const boundary = Math.pow(2, bitDepth) / 2
  const isMinBoundary = min(-boundary)
  const isBelowBoundary = below(boundary)
  return (value: any): value is number =>
    isInt(value) && isMinBoundary(value) && isBelowBoundary(value)
}
