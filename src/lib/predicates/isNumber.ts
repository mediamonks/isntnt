import { Predicate } from '../types'

export const isNumber = ((value) =>
  typeof value === 'number' && value === value) as Predicate<number>
