import { isString } from '../predicates/isString'

export const test = <T extends string = string>(expression: RegExp) => {
  const clonedExpression = new RegExp(expression.source, expression.flags)
  return (value: unknown): value is T =>
    isString(value) && !(clonedExpression.lastIndex = 0) && clonedExpression.test(value)
}
