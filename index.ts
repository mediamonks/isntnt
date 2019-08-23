import { isString, isNumber, isInt } from './src/lib/predicates'
import { shape, literal, or, array, tuple, either, isNull } from './src/index'

const isSomeShape = shape({
  a: or(isString, isNumber),
  b: literal('abc'),
  c: shape({
    x: array(isString),
    y: tuple(isInt, isInt),
    z: either('yes', 'no'),
  }),
})

const oi = or(isString, isNull)
