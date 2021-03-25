import { Predicate } from '../types'

export const isString: Predicate<string> = <T>(value: T): value is Extract<T, string> =>
  typeof value === 'string'
