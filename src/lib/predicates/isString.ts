import { Predicate } from '../types'

export const isString: Predicate<string> = (value: unknown): value is string =>
  typeof value === 'string'
