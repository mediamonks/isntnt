Isntnt is a collection of composable JavaScript runtime type predicates with TypeScript type guard declarations. Supports generics including union and intersection types.

# Features

- [Predicates](#predicates)
- [Predicate Factories](#predicate-factories)
- [Types](#types)

# Predicates

A predicate is a function that checks whether a value matches a certain type, it always returns a boolean. Well known examples of JavaScript predicates are `Array.isArray`, `isNan`, and `Number.isNaN`. With `isntnt` you add a whole slew of additional predicates to your toolbox, they are listed below.

## hasLength

Returns `true` when you pass an object with a length property that is a valid [`length`](#isLength).

```typescript
isWithLength(value)
```

## isAny

Always returns `true`.

```typescript
isAny(value)
```

## isArray

Returns `true` when you pass an array.

```typescript
isArray(value)
```

## isArrayLike

Returns `true` when you pass a object that is not a function with a length property that is a valid [`length`](#isLength).

```typescript
isArrayLike(value)
```

## isBigInt

Returns `true` when you pass a bigint.

```typescript
isBigInt(value)
```

## isBoolean

Returns `true` when you pass a boolean.

```typescript
isBoolean(value)
```

## isDate

Returns `true` when you pass a Date object.

```typescript
isDate(value)
```

## isDictionary

Returns `true` when you pass an object of which each property name, and each property value are a string.

```typescript
isDictionary(value)
```

## isFalse

Returns `true` when you pass `false`.

```typescript
isFalse(value)
```

## isFunction

Returns `true` when you pass a function.

```typescript
isFunction(value)
```

## isInt

Returns `true` when you pass an integer (a whole number).

```typescript
isInt(value)
```

## isInt8

Returns `true` when you pass an [integer](#isInt) ranging from -128 to 127.

```typescript
isInt8(value)
```

## isInt16

Returns `true` when you pass an [integer](#isInt) ranging from -32,768 to 32,767.

```typescript
isInt16(value)
```

## isInt32

Returns `true` when you pass an [integer](#isInt) ranging from -2,147,483,648 to 2,147,483,647.

```typescript
isInt32(value)
```

## isLength

Alias to [`isUint32`](#isUint32).

```typescript
isLength(value)
```

## isMap

Returns `true` when you pas a Map object.

```typescript
isMap(value)
```

## isNegative

Returns `true` when you pas a negative number (including -0).

```typescript
isNegative(value)
```

## isNever

Always returns `false`.

```typescript
isNever(value)
```

## isNone

Returns `true` when you pass `null` or `undefined`.

```typescript
isNone(value)
```

## isNull

Returns `true` when you pass `null`.

```typescript
isNull(value)
```

## isNumber

Returns `true` when you pass a number that is not `NaN`.

```typescript
isNumber(value)
```

## isObject

Returns `true` when you pass an object that is not `null`.

```typescript
isObject(value)
```

## isObjectLike

Returns `true` when you pass an value that is not a boolean, `null`, or `undefined`.

```typescript
isObjectLike(value)
```

## isPlainObject

Returns `true` when you pass an object that was constructed by `Object`.

```typescript
isPlainObject(value)
```

## isPositive

Returns `true` when you pass a positive number.

```typescript
isPositive(value)
```

## isPrimitive

Returns `true` when you pass `null`, `undefined`, a boolean, bigint, number, symbol, or string.

```typescript
isPrimitive(value)
```

## isRegExp

Returns `true` when you pass a RegExp object.

```typescript
isRegExp(value)
```

## isSerializable

Returns `true` when you pass a [serializable primitive](#isSerializablePrimitive), a [serializable array](#isSerializableArray), or [serializable object](#isSerializableObject).

```typescript
isSerializable(value)
```

## isSerializableArray

Returns `true` when you pass an array where every element is [serializable](#isSerializable).

```typescript
isSerializableArray(value)
```

## isSerializableNumber

Returns `true` when you pass a number that is not `NaN`, `Infinity`, or `-Infinity`.

```typescript
isSerializableNumber(value)
```

## isSerializableObject

Returns `true` when you pass an object where every property is [serializable](#isSerializable).

```typescript
isSerializableObject(value)
```

## isSerializablePrimitive

Returns `true` when you pass `null`, a [serializable number](#isSerializableNumber), a boolean, bigint, symbol, or string.

```typescript
isSerializablePrimitive(value)
```

## isSet

Returns `true` when you pas a Set object.

```typescript
isSet(value)
```

## isSome

Returns `true` when you pas a value other than `null` or `undefined`.

```typescript
isSome(value)
```

## isString

Returns `true` when you pas a string.

```typescript
isString(value)
```

## isSymbol

Returns `true` when you pas a symbol.

```typescript
isSymbol(value)
```

## isTrue

Returns `true` when you pas `true`.

```typescript
isTrue(value)
```

## isUint

Returns `true` when you pass a positive [integer](#isInt).

```typescript
isUint(value)
```

## isUint8

Returns `true` when you pass an [unsigned integer](#isUint) ranging from 0 to 255.

```typescript
isUint8(value)
```

## isUint16

Returns `true` when you pass an [unsigned integer](#isUint) ranging from 0 to 65,535.

```typescript
isUint16(value)
```

## isUint32

Returns `true` when you pass an [unsigned integer](#isUint) ranging from 0 to 4,294,967,295.

```typescript
isUint32(value)
```

## isUndefined

Returns `true` when you pass `undefined`.

```typescript
isUndefined(value)
```

## isWeakMap

Returns `true` when you pass a `WeakMap` object.

```typescript
isWeakMap(value)
```

# Predicate factories

Predicate factories is where the real fun begins, they allow you to create and combine predicates of your own to create new predicates. By composing predicates you can describe objects, union types, number ranges, and so on.

## above

Create a predicate based on a floor value, it checks if a [number](#isNumber) exceeds the floor value it’s given. This is an analogue to the `>` operator.

```typescript
const isAboveZero = above(0)

isAboveZero(-1) // false
isAboveZero(12) // true
```

The `isAboveZero` predicate above returns `true` when you pass a [number](#isNumber) that is greater than `0`.

## and

Create a predicate based on several other predicates, it returns `true` if every predicate that is passed also returns `true`. This is an analogue to the `&&` operator.

```typescript
const adultAge = 18
const isMinorAge = and(isUint, below(adultAge))

isMinorAge(12) // true
isMinorAge(33) // false
```

The `isMinorAge` predicate above returns `true` when you pass an [unsigned integer](#isUint) that is below 18.

```typescript
const isUser = shape({ name: isString })
const hasEmailAddress = shape({ email: isString })

const isUserWithEmail = and(isUser, hasEmailAddress)
```

The `isUserWithEmail` predicate above returns `true` when you pass an object with a `name` and an `email` property, both of which are a string.

## array

Create a predicate that checks every array element, it returns `true` when its predicate returns `true` for every element in an array.

```typescript
const isNumberArray = array(isNumber)
```

The `isNumberArray` predicate above returns `true` when you pass an array of which every element is a [number](#isNumber).

## at

Create a predicate based on a property key and another predicate, it returns `true` when its predicate returns `true` for the value of an object at its given key.

```typescript
const isStringAtName = at('name', isString)

isStringAtName({ name: 'Jane' }) // true
isStringAtName({ name: null }) // false
```

The `isStringAtName` predicate above returns `true` when you pass an object of which the `name` property is a string.

## below

Create a predicate based on a ceiling value, it checks if a [number](#isNumber) is below the ceiling value it’s given. This is an analogue to the `<` operator.

```typescript
const isBelow100 = below(100)

isBelow100(124) // false
isBelow100(32) // true
```

The `isBelow100` predicate above returns `true` when you pass a [number](#isNumber) that is less than `100`.

## either

Create a predicate based on several [literal](#literal) values, it returns `true` if a value matches either of the primitive values it’s given.

```typescript
const isAOrB = either('a', 'b')

isAOrB('a') // true
isAOrB('c') // false
```

The `isAOrB` predicate above returns `true` when you pass either `a`, or `b`.

## has

Create a predicate based on a property key, it returns `true` if an object has a property of the key it’s given.

```typescript
const hasName = has('name')

hasName({ name: null }) // true
hasName({ age: 36 }) // false
```

The `hasName` predicate above returns `true` when you pass an object that has a `name` property.

## instance

Create a predicate based on a constructor, it returns `true` if an object is an instance of the constructor key it’s given.

```typescript
const isInstanceofString = instance(String)

isInstanceofString(new String('foo')) // true
isInstanceofString('foo') // false
```

The `isInstanceofString` predicate above returns `true` when you pass a String object.

## literal

Create a predicate based a [primitive](#isPrimitive) value, it returns `true` if a value equals the primitive value it’s given.

```typescript
const is42 = literal(42)

is42(42) // true
is42(43) // false
```

The `is42` predicate above returns `true` when you pass `42`.

## max

Create a predicate based on a max. value, it checks if a [number](#isNumber) is below or equal to the max. value it’s given. This is an analogue to the `<=` operator.

```typescript
const isMax100 = max(100)

isMax100(100) // true
isMax100(101) // false
```

The `isMax100` predicate above returns `true` when you pass a [number](#isNumber) that is below or equal to `100`.

## maybe

Create a predicate based on another predicate, it checks if a value matches it’s given predicate, or equals `null` or `undefined`.

```typescript
const isMaybeString = maybe(isString)

isMaybeString(null) // true
isMaybeString(12) // false
```

The `isMaybeString` predicate above returns `true` when you pass a string, `null`, or `undefined`.

## min

Create a predicate based on a min. value, it checks if a [number](#isNumber) is above or equal to the min. value it’s given. This is an analogue to the `>=` operator.

```typescript
const isMin100 = min(100)

isMin100(100) // true
isMin100(99) // false
```

The `isMin0` predicate above returns `true` when you pass a [number](#isNumber) that is above or equal to `100`.

## noneable

Aliases [`maybe`](#maybe).

## nullable

Create a predicate based on another predicate, it checks if a value matches it’s given predicate, or equals `null`.

```typescript
const isNullableString = nullable(isString)

isNullableString(null) // true
isNullableString(12) // false
```

The `isNullableString` predicate above returns `true` when you pass a string or `null`.

## object

Create a predicate that checks every object property, it returns `true` when its predicate returns `true` for every object value.

```typescript
const isEnumerable = object(isUint)
```

The `isEnumerable` predicate above returns `true` when you pass an object of which every element is an [unsigned integer](#isUint).

## optional

`<T>(predicate: Predicate<T>) => (value: unknown) => value is T | undefined`

```typescript
const isOptionalString = optional(isString)

isOptionalString(undefined) // true
isOptionalString(12) // false
```

The `isOptionalString` predicate above returns `true` when you pass a string or `undefined`.

## or

Create a predicate based on several other predicates, it returns `true` if some predicate that is passed also returns `true`. This is an analogue to the `||` operator.

```typescript
const isContent = or(isString, isSerializableNumber)

isContent(12) // true
isContent(null) // false
```

The `isContent` predicate above returns `true` when you pass a string or a [primitive number](#isPrimitiveNumber).

```typescript
const isStringOrNumber = or(isString, isNumber)

isStringOrNumber(8) // true
isStringOrNumber([]) // false
```

## record

Create a predicate based on a key predicate and a value predicate, it returns `true` if each property key of an object returns `true` for its key predicate, and each value returns `true` for its value predicate.

```typescript
const isValidKey = either('a', 'b')

const isKeyValueMap = record(isValidKey, isInt)

isKeyValueMap({ a: 2 }) // true
isKeyValueMap({ a: null }) // false
isKeyValueMap({ c: 2 }) // false
```

The `isKeyValueMap` predicate above returns `true` when you pass an object where each key is either `a` or `b`, and each property value is an [integer](#isInt).

## shape

Create a predicate based on a predicate object, it returns `true` if each property value of an object returns `true` for its corresponding predicate.

```typescript
const isPoint = shape({ x: isNumber, y: isNumber })

isPoint({ x: 12, y: 36 }) // true
isPoint({ x: 12 }) // false
```

The `isPoint` predicate above returns `true` when you an pass an object where both `x` and `y` properties are a [number](#isNumber).

## test

```typescript
const isSlug = test(/^[A-Z0-9-]+$/i)

isSlug('foo-bar') // true
isSlug('!#$') // false
```

The `isSlug` predicate above returns `true` when you an pass a string that matches `/^[A-Z0-9-]+$/i`.

## tuple

Create a predicate based on index-based predicates, it returns `true` if the element at each index of an array with a fixed length returns `true` for its corresponding predicate.

```typescript
const isLatitude = and(min(-90), max(90))
const isLongitude = and(min(-180), max(180))

const isLatLong = tuple(isLatitude, isLongitude)

isLatLong(45, -120) // true
isLatLong(120, 200) // false
```

The `isLatLong` predicate above returns `true` when you an pass an array with a length of 2 where index 0 is a latitude, and index 1 is a longitude value.

# Types

## Intersect

```typescript
type User = Intersect<{ name: string } | { email: string }>
```

equals

```typescript
type User = {
  name: string
} & {
  email: string
}
```

## Maybe

Unions a type with `null` and `undefined`.

```typescript
type MaybeString = Maybe<string>
```

equals

```typescript
type MaybeString = string | null | undefined
```

## None

Union of `null` and `undefined`.

```typescript
type NoneType = None
```

equals

```typescript
type NoneType = null | undefined
```

## Nullable

Unions a type with `null`.

```typescript
type NullableString = Nullable<string>
```

equals

```typescript
type NullableString = string | null
```

## Optional

Unions a type with `undefined`.

```typescript
type OptionalString = Optional<string>
```

equals

```typescript
type OptionalString = string | undefined
```

## Predicate

Describes a predicate function signature

```typescript
type IsString = Predicate<string>
```

equals

```typescript
type IsString = <T>(value: T) => value is Extract<T, string>
```

## Primitive

Union of all primitive types.

```typescript
type PrimitiveType = Primitive
```

equals

```typescript
type PrimitiveType = null | undefined | boolean | number | string | symbol | bigint
```

## Serializable

```typescript
type SerializableType = Serializable
```

equals

```typescript
type SerializableType = SerializableArray | SerializableObject | SerializableObject
```

## SerializableArray

```typescript
type SerializableArrayType = SerializableArray
```

equals

```typescript
type SerializableArrayType = Array<Serializable> | ReadonlyArray<Serializable>
```

## SerializableObject

```typescript
type SerializableObjectType = SerializableObject
```

equals

```typescript
type SerializableObjectType = { [key: string]: Serializable | undefined }
```

## SerializablePrimitive

```typescript
type SerializablePrimitiveType = SerializablePrimitive
```

equals

```typescript
type SerializablePrimitiveType = null | boolean | number | string
```

## Some

Excludes `null` and `undefined` from type.

```typescript
type SomeType = Some
type SomeString = Some<string | null>
```

equals

```typescript
type SomeType = Function | boolean | bigint | number | string | symbol | object
type SomeString = string
```

## Static

Extracts type parameter from Predicate type. This is useful to extract TypeScript types from (complex) predicates.

```typescript
type PredicateType = Static<Predicate<string>>>
```

equals

```typescript
type PredicateType = string
```
