import { isString } from '../predicates/isString'
import { Predicate, PredicateType } from '../types'

export const test = <T extends string = string>(expression: RegExp): Predicate<T> => {
  const clonedExpression = new RegExp(expression.source, expression.flags)
  return <U>(value: U): value is PredicateType<T, U> =>
    isString(value) && !(clonedExpression.lastIndex = 0) && clonedExpression.test(value)
}
