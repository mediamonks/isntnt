import { Predicate, Nothing } from '../types'

export const isNothing: Predicate<Nothing> = (value: any): value is Nothing =>
  value == null
