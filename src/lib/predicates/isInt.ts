import { Predicate } from '../types'

export const isInt: Predicate<number> = ((value: unknown) =>
  typeof value === 'number' && value === Math.floor(value)) as Predicate<number>
