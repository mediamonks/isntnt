import { isString } from '../predicates/isString'

export const test = (expression: RegExp) => {
  const clonedExpression = new RegExp(expression.source, expression.flags)
  return (value: any): value is string =>
    isString(value) &&
    !(clonedExpression.lastIndex = 0) &&
    clonedExpression.test(value)
}
