import { Predicate } from '../types'

export const isBigInt: Predicate<bigint> = (value: any): value is bigint =>
  typeof value === 'bigint'
