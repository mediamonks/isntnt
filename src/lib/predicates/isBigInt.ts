import { Predicate } from '../types'

export const isBigInt = ((value) => typeof value === 'bigint') as Predicate<bigint>
