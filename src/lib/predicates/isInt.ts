import { Predicate } from '../types'

export const isInt: Predicate<number> = <T>(value: T): value is Extract<T, number> =>
  typeof value === 'number' && value === Math.floor(value)
