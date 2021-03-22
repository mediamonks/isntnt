import { StaticPredicate } from '../types'

export const isInt: StaticPredicate<number> = (value: unknown): value is number =>
  typeof value === 'number' && value === Math.floor(value)
