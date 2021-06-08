import { and } from '../generics/and'
import { Predicate, PredicateType } from '../types'
import { isArray } from './isArray'

const isWritable = <T extends Array<any>>(value: T): value is PredicateType<Array<unknown>, T> =>
  !Object.isFrozen(value)

export const isWritableArray = and(isArray, isWritable as Predicate<Array<any>>) as Predicate<
  Array<any>
>
