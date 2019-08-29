import { Predicate, None } from '../types'

export const isNone: Predicate<None> = (value: any): value is None =>
  value == null
