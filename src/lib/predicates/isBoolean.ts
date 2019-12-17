import { Predicate } from '../types'

export const isBoolean: Predicate<boolean> = (value: unknown): value is boolean =>
  typeof value === 'boolean'
