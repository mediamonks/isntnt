import { and } from '../generics/and'
import { Primitive } from '../types'
import { isSome } from './isSome'

export const isObject = and(
  isSome,
  (value: unknown): value is object => typeof value === 'object',
) as <T>(value: T) => value is Exclude<T, Primitive>
