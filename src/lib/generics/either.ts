import { Primitive, Predicate } from '../types'
import { or } from './or'
import { literal } from './literal'

export const either = <T extends ReadonlyArray<Primitive>>(...options: T) =>
  or(...options.map(literal)) as Predicate<T[number]>
