import { Some } from '../types'

export const isSome = <T>(value: T): value is Some<T> => value != null && value === value
