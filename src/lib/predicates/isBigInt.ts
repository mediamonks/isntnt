import { Predicate } from '../types'

export const isBigInt: Predicate<bigint> = (value: unknown): value is bigint =>
  typeof value === 'bigint'
