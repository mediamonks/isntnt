import { Predicate } from '../types'
import { below } from './below'
import { min } from './min'
import { isInt } from '../predicates'
import { and } from './and'

export const int = (bitDepth: number): Predicate<number> => {
  const boundary = Math.pow(2, bitDepth) / 2
  return and(isInt, min(-boundary), below(boundary))
}
