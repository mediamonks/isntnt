import { Predicate } from '../types'

export const isString: Predicate<string> = (value: any): value is string =>
  typeof value === 'string'
