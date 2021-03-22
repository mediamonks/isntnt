import { Predicate } from '../types'
import { isObjectLike } from '../predicates/isObjectLike'

export const at = <K extends PropertyKey, T>(
  key: K,
  predicate: Predicate<T>,
): Predicate<
  Extract<T, undefined> extends never
    ? {
        [P in K]: T
      }
    : {
        [P in K]?: T
      }
> => ((value: any) => isObjectLike(value) && predicate(value[key])) as any
