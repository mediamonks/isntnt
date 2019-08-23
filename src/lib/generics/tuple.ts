import { Predicate } from "../types";
import { isArray } from "../predicates/isArray";

export const tuple = <T extends Array<any>>(
  ...predicates: { [K in keyof T]: Predicate<T[K]> }
) => {
  const length = predicates.length;
  return (value: any): value is { [K in keyof T]: T[K] } => {
    const isTupleOfLength = isArray(value) && value.length === length;
    if (isTupleOfLength) {
      for (let i = 0; i < length; ++i) {
        if (!predicates[i](value[i])) {
          return false;
        }
      }
    }
    return isTupleOfLength;
  };
};
