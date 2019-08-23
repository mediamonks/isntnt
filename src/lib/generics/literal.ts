import { Primitive } from '../types'

export const literal = <T extends Primitive>(input: T) => (
  value: any,
): value is T => input === value
