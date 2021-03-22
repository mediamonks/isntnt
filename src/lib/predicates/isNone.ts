import { None } from '../types'
import { isSome } from './isSome'

export const isNone = <T>(value: T): value is Extract<T, None> => !isSome(value)
