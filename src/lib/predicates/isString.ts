import { Predicate } from '../types'

export const isString = ((value) => typeof value === 'string') as Predicate<string>
