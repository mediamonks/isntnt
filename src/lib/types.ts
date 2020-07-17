type ObjectWith<K extends PropertyKey> = { [P in K]: unknown }

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

export type Predicate<T> = (value: unknown, ...rest: Array<unknown>) => value is T

export type Static<T extends Predicate<any>> = T extends Predicate<infer R> ? R : never

export type Constructor<T extends object, U extends Array<any> = []> = {
  new (...rest: U): T
}

// see https://github.com/Microsoft/TypeScript/issues/29594#issuecomment-507673155
export type Intersect<T> = (T extends any ? (k: T) => void : never) extends (k: infer I) => void
  ? I
  : never

export type None = null | undefined
export type Some = Function | boolean | bigint | number | string | symbol | object

export type ObjectLike = ObjectWith<PropertyKey>

export type Primitive = null | undefined | boolean | number | string | symbol | bigint

export type SerializableArray = Array<Serializable>
export type SerializablePrimitive = null | boolean | number | string
export type SerializableObject = Partial<{ [key: string]: Serializable }>
export type Serializable = SerializablePrimitive | SerializableObject | SerializableArray
