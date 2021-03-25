import { Predicate } from '../types'

export const isBoolean: Predicate<boolean> = <T>(value: T): value is Extract<T, boolean> =>
  typeof value === 'boolean'
