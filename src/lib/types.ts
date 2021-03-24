export type Predicate<T> = <U>(value: U) => value is Extract<U, T>

export type Static<T extends Predicate<any>> = T extends Predicate<infer R> ? R : never

export type Constructor<T extends object, U extends ReadonlyArray<any> = []> = {
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

export type PlainObject = Record<string | symbol, unknown>

export type ArrayLike = { length: number }

export type ObjectLike = Exclude<Some, boolean>

export type Primitive = SerializablePrimitive | undefined | symbol | bigint

export type SerializableArray = Array<Serializable> | ReadonlyArray<Serializable>
export type SerializablePrimitive = null | boolean | number | string
export type SerializableObject = { [key: string]: Serializable | undefined }
export type Serializable = SerializablePrimitive | SerializableObject | SerializableArray
