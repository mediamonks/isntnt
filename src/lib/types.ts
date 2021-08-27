export type InferredPartial<T extends {}> = {
  [P in {
    [K in keyof T]: Extract<T[K], undefined> extends never ? K : never
  }[keyof T]]: InferredPartial<T[P]>
} &
  Partial<
    {
      [P in {
        [K in keyof T]: Extract<T[K], undefined> extends never ? never : K
      }[keyof T]]: InferredPartial<T[P]>
    }
  >

export type Predicate<T> = (value: unknown, ...rest: ReadonlyArray<unknown>) => value is T

export type Static<T extends Predicate<any>> = T extends Predicate<infer R> ? R : never

export type Constructor<T extends object, U extends ReadonlyArray<any> = []> = {
  new (...rest: U): T
}

// see https://github.com/Microsoft/TypeScript/issues/29594#issuecomment-507673155
export type Intersect<T> = (T extends any ? (k: T) => void : never) extends (k: infer I) => void
  ? I
  : never

export type None = null | undefined
export type Some<T = Function | boolean | bigint | number | string | symbol | object> = Exclude<
  T,
  None
>
export type Maybe<T> = T | None
export type Optional<T> = T | undefined
export type Nullable<T> = T | null

export type ObjectLike = {}
export type ArrayLike = Record<number, unknown>
export type PlainObject = Record<PropertyKey, unknown>
export type Dictionary = Record<string, string>

export type Primitive = SerializablePrimitive | undefined | symbol | bigint

export type SerializableArray = Array<Serializable> | ReadonlyArray<Serializable>
export type SerializablePrimitive = null | boolean | number | string
export type SerializableObject = { [key: string]: Serializable | undefined }
export type Serializable = SerializablePrimitive | SerializableObject | SerializableArray
