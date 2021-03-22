import { Constructor, Predicate } from '../types'

export const instance = <T extends Constructor<any, any>>(
  constructor: T,
): Predicate<InstanceType<T>> => {
  ;({} instanceof constructor)
  return ((value) => value instanceof constructor) as Predicate<InstanceType<T>>
}
