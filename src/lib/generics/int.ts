import { below } from './below'
import { min } from './min'
import { isInt } from '../predicates'
import { Predicate } from '../types'

export const int = (bitDepth: number): Predicate<number> => {
  const boundry = Math.pow(2, bitDepth) / 2
  const isMinBoundry = min(-boundry)
  const isBelowBoundry = below(boundry)
  return (value: any): value is number =>
    isInt(value) && isMinBoundry(value) && isBelowBoundry(value)
}
