import { Predicate, None } from '../types'
import { isSome } from './isSome'

export const isNone: Predicate<None> = (value: unknown): value is None =>
  !isSome(value)
