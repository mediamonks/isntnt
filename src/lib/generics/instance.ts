import { Constructor } from '../types'

export const instance = <T extends Constructor<any>>(constructor: T) => {
  ;({} instanceof constructor)
  return (value: any): value is InstanceType<T> => value instanceof constructor
}
