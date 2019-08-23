import { Predicate, Static } from "../types";
import { isArray } from "../predicates/isArray";

export const array = <T extends Predicate<any>>(predicate: T) => (
  value: any
): value is Array<Static<T>> => isArray(value) && value.every(predicate);
