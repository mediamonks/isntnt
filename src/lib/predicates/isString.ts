import { Predicate, PredicateType } from '../types'

export const isString: Predicate<string> = <T>(value: T): value is PredicateType<string, T> =>
  typeof value === 'string'
