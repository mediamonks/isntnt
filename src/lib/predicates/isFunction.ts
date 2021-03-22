import { Predicate } from '../types'

export const isFunction = ((value) => typeof value === 'function') as Predicate<Function>
