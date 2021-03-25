import { Predicate } from '../types'

export const isNumber: Predicate<number> = <T>(value: T): value is Extract<T, number> =>
  typeof value === 'number' && value === value
