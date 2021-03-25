import { None, Predicate } from '../types'
import { isSome } from './isSome'

export const isNone: Predicate<None> = <T>(value: T): value is Extract<T, None> => !isSome(value)
