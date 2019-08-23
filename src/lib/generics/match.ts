import { Predicate, Static } from '../types'
import { isString } from '../predicates/isString'

type Transform<I, O> = (value: I, ...rest: Array<unknown>) => O

type MatchRule<I, O> = [Predicate<I>, Transform<I, O>]

type MatchType<M extends MatchRule<any, any>> = Static<M[0]>

export const match = <O, R extends Array<MatchRule<any, O>>>(...rules: R) => <
  T extends MatchType<R[number]>
>(
  value: T,
):
  | {
      [K in keyof R]: R[K] extends MatchRule<any, any>
        ? T extends Static<R[K][0]>
          ? ReturnType<R[K][1]>
          : never
        : never
    }[number]
  | undefined => {
  for (let i = 0; i < rules.length; ++i) {
    if (rules[i][0](value)) {
      return rules[i][1](value) as any
    }
  }
}

const matchX = match([isString, (value: string) => value.length])

const oi = matchX('12')!
