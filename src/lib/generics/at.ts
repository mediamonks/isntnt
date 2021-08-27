import { PlainObject, Predicate, Static } from '../types'
import { isObjectLike } from '../predicates/isObjectLike'

export const at = <K extends PropertyKey, T extends Predicate<any>>(key: K, predicate: T) => (
  value: unknown
): value is StaticAt<K, T> => isObjectLike(value) && predicate((value as PlainObject)[key])

type StaticAt<K extends PropertyKey, T extends Predicate<any>> = 
  Extract<Static<T>, undefined> extends never
    ? { [P in K]: Static<T> }
    : { [P in K]?: Static<T> }