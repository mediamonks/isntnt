export type PredicateType<T, U> = (Exclude<any, U> extends never ? 1 : 0) extends 1
  ? Extract<T, U>
  : U extends T
  ? U
  : T extends U
  ? T
  : never

export type Predicate<T> = <U>(value: U) => value is PredicateType<T, U>

export type Static<T extends Predicate<any>> = T extends Predicate<infer R> ? R : never

export interface Constructor<T extends object = any, U extends ReadonlyArray<any> = []> {
  new (...rest: U): T
}

// see https://github.com/Microsoft/TypeScript/issues/29594#issuecomment-507673155
export type Intersect<T> = (T extends any ? (k: T) => void : never) extends (k: infer I) => void
  ? I
  : never

export type Unknown = Some | None
export type None = null | undefined
export type Some<T = Function | boolean | bigint | number | string | symbol | object> = Exclude<
  T,
  None
>

export type Maybe<T> = T | None
export type Optional<T> = T | undefined
export type Nullable<T> = T | null

export type Dictionary = Record<string, string>

export type PlainObject = Record<string | symbol, unknown>

export type ArrayLike = { length: number }

export type ObjectLike = Exclude<Some, boolean>

export type Primitive = SerializablePrimitive | undefined | symbol | bigint

export type SerializableArray = Array<Serializable> | ReadonlyArray<Serializable>
export type SerializablePrimitive = null | boolean | number | string
export type SerializableObject = { [key: string]: Serializable | undefined }
export type Serializable = SerializablePrimitive | SerializableObject | SerializableArray

export type EmptyMap = Map<any, never>
export type EmptySet = Set<never>
export type EmptyArray = Array<never> | ReadonlyArray<never>
export type EmptyObject = Record<any, never>
export type EmptyPrimitive = EmptyString | None
export type EmptyString = ''

export type Empty = EmptyPrimitive | EmptyArray | EmptyObject | EmptyMap | EmptySet
