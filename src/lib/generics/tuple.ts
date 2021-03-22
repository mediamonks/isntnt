import { Predicate, Static } from '../types'
import { isArray } from '../predicates/isArray'
import { isString } from '../predicates/isString'
import { isTrue } from '../predicates/isTrue'
import { optional } from './optional'

type BaseTuple = ReadonlyArray<any>

export const tuple = <T extends BaseTuple>(
  ...predicates: { [K in keyof T]: Predicate<T[K]> }
): Predicate<Readonly<{ [K in keyof T]: T[K] }> | { [K in keyof T]: T[K] }> =>
  ((value: any) => {
    const isArrayOfMaxLength = isArray(value) && value.length <= predicates.length
    if (isArrayOfMaxLength) {
      for (let i = 0; i < length; ++i) {
        if (!predicates[i]((value as any)[i])) {
          return false
        }
      }
    }
    return isArrayOfMaxLength
  }) as any

const isX = tuple(isString, optional(isTrue))

const oi = ['a', undefined] as unknown

const y = [oi].filter(isX)
