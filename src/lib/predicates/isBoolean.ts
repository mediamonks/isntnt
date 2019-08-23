import { Predicate } from '../types'

export const isBoolean: Predicate<boolean> = (value: any): value is boolean =>
  typeof value === 'boolean'
