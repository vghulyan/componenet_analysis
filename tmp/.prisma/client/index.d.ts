
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ComponentUsage
 * 
 */
export type ComponentUsage = $Result.DefaultSelection<Prisma.$ComponentUsagePayload>
/**
 * Model PropUsage
 * 
 */
export type PropUsage = $Result.DefaultSelection<Prisma.$PropUsagePayload>
/**
 * Model UnusedComponent
 * 
 */
export type UnusedComponent = $Result.DefaultSelection<Prisma.$UnusedComponentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.componentUsage`: Exposes CRUD operations for the **ComponentUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComponentUsages
    * const componentUsages = await prisma.componentUsage.findMany()
    * ```
    */
  get componentUsage(): Prisma.ComponentUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propUsage`: Exposes CRUD operations for the **PropUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropUsages
    * const propUsages = await prisma.propUsage.findMany()
    * ```
    */
  get propUsage(): Prisma.PropUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unusedComponent`: Exposes CRUD operations for the **UnusedComponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnusedComponents
    * const unusedComponents = await prisma.unusedComponent.findMany()
    * ```
    */
  get unusedComponent(): Prisma.UnusedComponentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    ComponentUsage: 'ComponentUsage',
    PropUsage: 'PropUsage',
    UnusedComponent: 'UnusedComponent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "componentUsage" | "propUsage" | "unusedComponent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ComponentUsage: {
        payload: Prisma.$ComponentUsagePayload<ExtArgs>
        fields: Prisma.ComponentUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComponentUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComponentUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload>
          }
          findFirst: {
            args: Prisma.ComponentUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComponentUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload>
          }
          findMany: {
            args: Prisma.ComponentUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload>[]
          }
          create: {
            args: Prisma.ComponentUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload>
          }
          createMany: {
            args: Prisma.ComponentUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComponentUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload>[]
          }
          delete: {
            args: Prisma.ComponentUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload>
          }
          update: {
            args: Prisma.ComponentUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload>
          }
          deleteMany: {
            args: Prisma.ComponentUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComponentUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComponentUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload>[]
          }
          upsert: {
            args: Prisma.ComponentUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentUsagePayload>
          }
          aggregate: {
            args: Prisma.ComponentUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComponentUsage>
          }
          groupBy: {
            args: Prisma.ComponentUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComponentUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComponentUsageCountArgs<ExtArgs>
            result: $Utils.Optional<ComponentUsageCountAggregateOutputType> | number
          }
        }
      }
      PropUsage: {
        payload: Prisma.$PropUsagePayload<ExtArgs>
        fields: Prisma.PropUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload>
          }
          findFirst: {
            args: Prisma.PropUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload>
          }
          findMany: {
            args: Prisma.PropUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload>[]
          }
          create: {
            args: Prisma.PropUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload>
          }
          createMany: {
            args: Prisma.PropUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload>[]
          }
          delete: {
            args: Prisma.PropUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload>
          }
          update: {
            args: Prisma.PropUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload>
          }
          deleteMany: {
            args: Prisma.PropUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload>[]
          }
          upsert: {
            args: Prisma.PropUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropUsagePayload>
          }
          aggregate: {
            args: Prisma.PropUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropUsage>
          }
          groupBy: {
            args: Prisma.PropUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropUsageCountArgs<ExtArgs>
            result: $Utils.Optional<PropUsageCountAggregateOutputType> | number
          }
        }
      }
      UnusedComponent: {
        payload: Prisma.$UnusedComponentPayload<ExtArgs>
        fields: Prisma.UnusedComponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnusedComponentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnusedComponentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload>
          }
          findFirst: {
            args: Prisma.UnusedComponentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnusedComponentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload>
          }
          findMany: {
            args: Prisma.UnusedComponentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload>[]
          }
          create: {
            args: Prisma.UnusedComponentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload>
          }
          createMany: {
            args: Prisma.UnusedComponentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnusedComponentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload>[]
          }
          delete: {
            args: Prisma.UnusedComponentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload>
          }
          update: {
            args: Prisma.UnusedComponentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload>
          }
          deleteMany: {
            args: Prisma.UnusedComponentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnusedComponentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnusedComponentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload>[]
          }
          upsert: {
            args: Prisma.UnusedComponentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnusedComponentPayload>
          }
          aggregate: {
            args: Prisma.UnusedComponentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnusedComponent>
          }
          groupBy: {
            args: Prisma.UnusedComponentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnusedComponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnusedComponentCountArgs<ExtArgs>
            result: $Utils.Optional<UnusedComponentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    componentUsage?: ComponentUsageOmit
    propUsage?: PropUsageOmit
    unusedComponent?: UnusedComponentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    componentUsages: number
    propUsages: number
    unusedComponents: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    componentUsages?: boolean | ProjectCountOutputTypeCountComponentUsagesArgs
    propUsages?: boolean | ProjectCountOutputTypeCountPropUsagesArgs
    unusedComponents?: boolean | ProjectCountOutputTypeCountUnusedComponentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountComponentUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentUsageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPropUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropUsageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUnusedComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnusedComponentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    repoUrl: string | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    repoUrl: string | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    repoUrl: number
    createdAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    repoUrl?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    repoUrl?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    repoUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    repoUrl: string
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    repoUrl?: boolean
    createdAt?: boolean
    componentUsages?: boolean | Project$componentUsagesArgs<ExtArgs>
    propUsages?: boolean | Project$propUsagesArgs<ExtArgs>
    unusedComponents?: boolean | Project$unusedComponentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    repoUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    repoUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    repoUrl?: boolean
    createdAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "repoUrl" | "createdAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    componentUsages?: boolean | Project$componentUsagesArgs<ExtArgs>
    propUsages?: boolean | Project$propUsagesArgs<ExtArgs>
    unusedComponents?: boolean | Project$unusedComponentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      componentUsages: Prisma.$ComponentUsagePayload<ExtArgs>[]
      propUsages: Prisma.$PropUsagePayload<ExtArgs>[]
      unusedComponents: Prisma.$UnusedComponentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      repoUrl: string
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    componentUsages<T extends Project$componentUsagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$componentUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propUsages<T extends Project$propUsagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$propUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unusedComponents<T extends Project$unusedComponentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$unusedComponentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly repoUrl: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.componentUsages
   */
  export type Project$componentUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
    where?: ComponentUsageWhereInput
    orderBy?: ComponentUsageOrderByWithRelationInput | ComponentUsageOrderByWithRelationInput[]
    cursor?: ComponentUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComponentUsageScalarFieldEnum | ComponentUsageScalarFieldEnum[]
  }

  /**
   * Project.propUsages
   */
  export type Project$propUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
    where?: PropUsageWhereInput
    orderBy?: PropUsageOrderByWithRelationInput | PropUsageOrderByWithRelationInput[]
    cursor?: PropUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropUsageScalarFieldEnum | PropUsageScalarFieldEnum[]
  }

  /**
   * Project.unusedComponents
   */
  export type Project$unusedComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
    where?: UnusedComponentWhereInput
    orderBy?: UnusedComponentOrderByWithRelationInput | UnusedComponentOrderByWithRelationInput[]
    cursor?: UnusedComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnusedComponentScalarFieldEnum | UnusedComponentScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ComponentUsage
   */

  export type AggregateComponentUsage = {
    _count: ComponentUsageCountAggregateOutputType | null
    _avg: ComponentUsageAvgAggregateOutputType | null
    _sum: ComponentUsageSumAggregateOutputType | null
    _min: ComponentUsageMinAggregateOutputType | null
    _max: ComponentUsageMaxAggregateOutputType | null
  }

  export type ComponentUsageAvgAggregateOutputType = {
    id: number | null
    count: number | null
    total: number | null
    projectId: number | null
  }

  export type ComponentUsageSumAggregateOutputType = {
    id: number | null
    count: number | null
    total: number | null
    projectId: number | null
  }

  export type ComponentUsageMinAggregateOutputType = {
    id: number | null
    component: string | null
    file: string | null
    count: number | null
    total: number | null
    projectId: number | null
  }

  export type ComponentUsageMaxAggregateOutputType = {
    id: number | null
    component: string | null
    file: string | null
    count: number | null
    total: number | null
    projectId: number | null
  }

  export type ComponentUsageCountAggregateOutputType = {
    id: number
    component: number
    file: number
    count: number
    total: number
    projectId: number
    _all: number
  }


  export type ComponentUsageAvgAggregateInputType = {
    id?: true
    count?: true
    total?: true
    projectId?: true
  }

  export type ComponentUsageSumAggregateInputType = {
    id?: true
    count?: true
    total?: true
    projectId?: true
  }

  export type ComponentUsageMinAggregateInputType = {
    id?: true
    component?: true
    file?: true
    count?: true
    total?: true
    projectId?: true
  }

  export type ComponentUsageMaxAggregateInputType = {
    id?: true
    component?: true
    file?: true
    count?: true
    total?: true
    projectId?: true
  }

  export type ComponentUsageCountAggregateInputType = {
    id?: true
    component?: true
    file?: true
    count?: true
    total?: true
    projectId?: true
    _all?: true
  }

  export type ComponentUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComponentUsage to aggregate.
     */
    where?: ComponentUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentUsages to fetch.
     */
    orderBy?: ComponentUsageOrderByWithRelationInput | ComponentUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComponentUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComponentUsages
    **/
    _count?: true | ComponentUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComponentUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComponentUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponentUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponentUsageMaxAggregateInputType
  }

  export type GetComponentUsageAggregateType<T extends ComponentUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateComponentUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponentUsage[P]>
      : GetScalarType<T[P], AggregateComponentUsage[P]>
  }




  export type ComponentUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentUsageWhereInput
    orderBy?: ComponentUsageOrderByWithAggregationInput | ComponentUsageOrderByWithAggregationInput[]
    by: ComponentUsageScalarFieldEnum[] | ComponentUsageScalarFieldEnum
    having?: ComponentUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponentUsageCountAggregateInputType | true
    _avg?: ComponentUsageAvgAggregateInputType
    _sum?: ComponentUsageSumAggregateInputType
    _min?: ComponentUsageMinAggregateInputType
    _max?: ComponentUsageMaxAggregateInputType
  }

  export type ComponentUsageGroupByOutputType = {
    id: number
    component: string
    file: string
    count: number
    total: number
    projectId: number
    _count: ComponentUsageCountAggregateOutputType | null
    _avg: ComponentUsageAvgAggregateOutputType | null
    _sum: ComponentUsageSumAggregateOutputType | null
    _min: ComponentUsageMinAggregateOutputType | null
    _max: ComponentUsageMaxAggregateOutputType | null
  }

  type GetComponentUsageGroupByPayload<T extends ComponentUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComponentUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComponentUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComponentUsageGroupByOutputType[P]>
            : GetScalarType<T[P], ComponentUsageGroupByOutputType[P]>
        }
      >
    >


  export type ComponentUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    component?: boolean
    file?: boolean
    count?: boolean
    total?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["componentUsage"]>

  export type ComponentUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    component?: boolean
    file?: boolean
    count?: boolean
    total?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["componentUsage"]>

  export type ComponentUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    component?: boolean
    file?: boolean
    count?: boolean
    total?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["componentUsage"]>

  export type ComponentUsageSelectScalar = {
    id?: boolean
    component?: boolean
    file?: boolean
    count?: boolean
    total?: boolean
    projectId?: boolean
  }

  export type ComponentUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "component" | "file" | "count" | "total" | "projectId", ExtArgs["result"]["componentUsage"]>
  export type ComponentUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ComponentUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ComponentUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ComponentUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComponentUsage"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      component: string
      file: string
      count: number
      total: number
      projectId: number
    }, ExtArgs["result"]["componentUsage"]>
    composites: {}
  }

  type ComponentUsageGetPayload<S extends boolean | null | undefined | ComponentUsageDefaultArgs> = $Result.GetResult<Prisma.$ComponentUsagePayload, S>

  type ComponentUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComponentUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComponentUsageCountAggregateInputType | true
    }

  export interface ComponentUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComponentUsage'], meta: { name: 'ComponentUsage' } }
    /**
     * Find zero or one ComponentUsage that matches the filter.
     * @param {ComponentUsageFindUniqueArgs} args - Arguments to find a ComponentUsage
     * @example
     * // Get one ComponentUsage
     * const componentUsage = await prisma.componentUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComponentUsageFindUniqueArgs>(args: SelectSubset<T, ComponentUsageFindUniqueArgs<ExtArgs>>): Prisma__ComponentUsageClient<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComponentUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComponentUsageFindUniqueOrThrowArgs} args - Arguments to find a ComponentUsage
     * @example
     * // Get one ComponentUsage
     * const componentUsage = await prisma.componentUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComponentUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, ComponentUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComponentUsageClient<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComponentUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentUsageFindFirstArgs} args - Arguments to find a ComponentUsage
     * @example
     * // Get one ComponentUsage
     * const componentUsage = await prisma.componentUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComponentUsageFindFirstArgs>(args?: SelectSubset<T, ComponentUsageFindFirstArgs<ExtArgs>>): Prisma__ComponentUsageClient<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComponentUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentUsageFindFirstOrThrowArgs} args - Arguments to find a ComponentUsage
     * @example
     * // Get one ComponentUsage
     * const componentUsage = await prisma.componentUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComponentUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, ComponentUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComponentUsageClient<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComponentUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComponentUsages
     * const componentUsages = await prisma.componentUsage.findMany()
     * 
     * // Get first 10 ComponentUsages
     * const componentUsages = await prisma.componentUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const componentUsageWithIdOnly = await prisma.componentUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComponentUsageFindManyArgs>(args?: SelectSubset<T, ComponentUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComponentUsage.
     * @param {ComponentUsageCreateArgs} args - Arguments to create a ComponentUsage.
     * @example
     * // Create one ComponentUsage
     * const ComponentUsage = await prisma.componentUsage.create({
     *   data: {
     *     // ... data to create a ComponentUsage
     *   }
     * })
     * 
     */
    create<T extends ComponentUsageCreateArgs>(args: SelectSubset<T, ComponentUsageCreateArgs<ExtArgs>>): Prisma__ComponentUsageClient<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComponentUsages.
     * @param {ComponentUsageCreateManyArgs} args - Arguments to create many ComponentUsages.
     * @example
     * // Create many ComponentUsages
     * const componentUsage = await prisma.componentUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComponentUsageCreateManyArgs>(args?: SelectSubset<T, ComponentUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComponentUsages and returns the data saved in the database.
     * @param {ComponentUsageCreateManyAndReturnArgs} args - Arguments to create many ComponentUsages.
     * @example
     * // Create many ComponentUsages
     * const componentUsage = await prisma.componentUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComponentUsages and only return the `id`
     * const componentUsageWithIdOnly = await prisma.componentUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComponentUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, ComponentUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComponentUsage.
     * @param {ComponentUsageDeleteArgs} args - Arguments to delete one ComponentUsage.
     * @example
     * // Delete one ComponentUsage
     * const ComponentUsage = await prisma.componentUsage.delete({
     *   where: {
     *     // ... filter to delete one ComponentUsage
     *   }
     * })
     * 
     */
    delete<T extends ComponentUsageDeleteArgs>(args: SelectSubset<T, ComponentUsageDeleteArgs<ExtArgs>>): Prisma__ComponentUsageClient<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComponentUsage.
     * @param {ComponentUsageUpdateArgs} args - Arguments to update one ComponentUsage.
     * @example
     * // Update one ComponentUsage
     * const componentUsage = await prisma.componentUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComponentUsageUpdateArgs>(args: SelectSubset<T, ComponentUsageUpdateArgs<ExtArgs>>): Prisma__ComponentUsageClient<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComponentUsages.
     * @param {ComponentUsageDeleteManyArgs} args - Arguments to filter ComponentUsages to delete.
     * @example
     * // Delete a few ComponentUsages
     * const { count } = await prisma.componentUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComponentUsageDeleteManyArgs>(args?: SelectSubset<T, ComponentUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComponentUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComponentUsages
     * const componentUsage = await prisma.componentUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComponentUsageUpdateManyArgs>(args: SelectSubset<T, ComponentUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComponentUsages and returns the data updated in the database.
     * @param {ComponentUsageUpdateManyAndReturnArgs} args - Arguments to update many ComponentUsages.
     * @example
     * // Update many ComponentUsages
     * const componentUsage = await prisma.componentUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComponentUsages and only return the `id`
     * const componentUsageWithIdOnly = await prisma.componentUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComponentUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, ComponentUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComponentUsage.
     * @param {ComponentUsageUpsertArgs} args - Arguments to update or create a ComponentUsage.
     * @example
     * // Update or create a ComponentUsage
     * const componentUsage = await prisma.componentUsage.upsert({
     *   create: {
     *     // ... data to create a ComponentUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComponentUsage we want to update
     *   }
     * })
     */
    upsert<T extends ComponentUsageUpsertArgs>(args: SelectSubset<T, ComponentUsageUpsertArgs<ExtArgs>>): Prisma__ComponentUsageClient<$Result.GetResult<Prisma.$ComponentUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComponentUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentUsageCountArgs} args - Arguments to filter ComponentUsages to count.
     * @example
     * // Count the number of ComponentUsages
     * const count = await prisma.componentUsage.count({
     *   where: {
     *     // ... the filter for the ComponentUsages we want to count
     *   }
     * })
    **/
    count<T extends ComponentUsageCountArgs>(
      args?: Subset<T, ComponentUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponentUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComponentUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComponentUsageAggregateArgs>(args: Subset<T, ComponentUsageAggregateArgs>): Prisma.PrismaPromise<GetComponentUsageAggregateType<T>>

    /**
     * Group by ComponentUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComponentUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComponentUsageGroupByArgs['orderBy'] }
        : { orderBy?: ComponentUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComponentUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponentUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComponentUsage model
   */
  readonly fields: ComponentUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComponentUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComponentUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ComponentUsage model
   */
  interface ComponentUsageFieldRefs {
    readonly id: FieldRef<"ComponentUsage", 'Int'>
    readonly component: FieldRef<"ComponentUsage", 'String'>
    readonly file: FieldRef<"ComponentUsage", 'String'>
    readonly count: FieldRef<"ComponentUsage", 'Int'>
    readonly total: FieldRef<"ComponentUsage", 'Int'>
    readonly projectId: FieldRef<"ComponentUsage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ComponentUsage findUnique
   */
  export type ComponentUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
    /**
     * Filter, which ComponentUsage to fetch.
     */
    where: ComponentUsageWhereUniqueInput
  }

  /**
   * ComponentUsage findUniqueOrThrow
   */
  export type ComponentUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
    /**
     * Filter, which ComponentUsage to fetch.
     */
    where: ComponentUsageWhereUniqueInput
  }

  /**
   * ComponentUsage findFirst
   */
  export type ComponentUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
    /**
     * Filter, which ComponentUsage to fetch.
     */
    where?: ComponentUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentUsages to fetch.
     */
    orderBy?: ComponentUsageOrderByWithRelationInput | ComponentUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComponentUsages.
     */
    cursor?: ComponentUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComponentUsages.
     */
    distinct?: ComponentUsageScalarFieldEnum | ComponentUsageScalarFieldEnum[]
  }

  /**
   * ComponentUsage findFirstOrThrow
   */
  export type ComponentUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
    /**
     * Filter, which ComponentUsage to fetch.
     */
    where?: ComponentUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentUsages to fetch.
     */
    orderBy?: ComponentUsageOrderByWithRelationInput | ComponentUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComponentUsages.
     */
    cursor?: ComponentUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComponentUsages.
     */
    distinct?: ComponentUsageScalarFieldEnum | ComponentUsageScalarFieldEnum[]
  }

  /**
   * ComponentUsage findMany
   */
  export type ComponentUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
    /**
     * Filter, which ComponentUsages to fetch.
     */
    where?: ComponentUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentUsages to fetch.
     */
    orderBy?: ComponentUsageOrderByWithRelationInput | ComponentUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComponentUsages.
     */
    cursor?: ComponentUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentUsages.
     */
    skip?: number
    distinct?: ComponentUsageScalarFieldEnum | ComponentUsageScalarFieldEnum[]
  }

  /**
   * ComponentUsage create
   */
  export type ComponentUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a ComponentUsage.
     */
    data: XOR<ComponentUsageCreateInput, ComponentUsageUncheckedCreateInput>
  }

  /**
   * ComponentUsage createMany
   */
  export type ComponentUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComponentUsages.
     */
    data: ComponentUsageCreateManyInput | ComponentUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComponentUsage createManyAndReturn
   */
  export type ComponentUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * The data used to create many ComponentUsages.
     */
    data: ComponentUsageCreateManyInput | ComponentUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComponentUsage update
   */
  export type ComponentUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a ComponentUsage.
     */
    data: XOR<ComponentUsageUpdateInput, ComponentUsageUncheckedUpdateInput>
    /**
     * Choose, which ComponentUsage to update.
     */
    where: ComponentUsageWhereUniqueInput
  }

  /**
   * ComponentUsage updateMany
   */
  export type ComponentUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComponentUsages.
     */
    data: XOR<ComponentUsageUpdateManyMutationInput, ComponentUsageUncheckedUpdateManyInput>
    /**
     * Filter which ComponentUsages to update
     */
    where?: ComponentUsageWhereInput
    /**
     * Limit how many ComponentUsages to update.
     */
    limit?: number
  }

  /**
   * ComponentUsage updateManyAndReturn
   */
  export type ComponentUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * The data used to update ComponentUsages.
     */
    data: XOR<ComponentUsageUpdateManyMutationInput, ComponentUsageUncheckedUpdateManyInput>
    /**
     * Filter which ComponentUsages to update
     */
    where?: ComponentUsageWhereInput
    /**
     * Limit how many ComponentUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComponentUsage upsert
   */
  export type ComponentUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the ComponentUsage to update in case it exists.
     */
    where: ComponentUsageWhereUniqueInput
    /**
     * In case the ComponentUsage found by the `where` argument doesn't exist, create a new ComponentUsage with this data.
     */
    create: XOR<ComponentUsageCreateInput, ComponentUsageUncheckedCreateInput>
    /**
     * In case the ComponentUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComponentUsageUpdateInput, ComponentUsageUncheckedUpdateInput>
  }

  /**
   * ComponentUsage delete
   */
  export type ComponentUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
    /**
     * Filter which ComponentUsage to delete.
     */
    where: ComponentUsageWhereUniqueInput
  }

  /**
   * ComponentUsage deleteMany
   */
  export type ComponentUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComponentUsages to delete
     */
    where?: ComponentUsageWhereInput
    /**
     * Limit how many ComponentUsages to delete.
     */
    limit?: number
  }

  /**
   * ComponentUsage without action
   */
  export type ComponentUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentUsage
     */
    select?: ComponentUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentUsage
     */
    omit?: ComponentUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentUsageInclude<ExtArgs> | null
  }


  /**
   * Model PropUsage
   */

  export type AggregatePropUsage = {
    _count: PropUsageCountAggregateOutputType | null
    _avg: PropUsageAvgAggregateOutputType | null
    _sum: PropUsageSumAggregateOutputType | null
    _min: PropUsageMinAggregateOutputType | null
    _max: PropUsageMaxAggregateOutputType | null
  }

  export type PropUsageAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type PropUsageSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type PropUsageMinAggregateOutputType = {
    id: number | null
    component: string | null
    file: string | null
    prop: string | null
    projectId: number | null
  }

  export type PropUsageMaxAggregateOutputType = {
    id: number | null
    component: string | null
    file: string | null
    prop: string | null
    projectId: number | null
  }

  export type PropUsageCountAggregateOutputType = {
    id: number
    component: number
    file: number
    prop: number
    projectId: number
    _all: number
  }


  export type PropUsageAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type PropUsageSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type PropUsageMinAggregateInputType = {
    id?: true
    component?: true
    file?: true
    prop?: true
    projectId?: true
  }

  export type PropUsageMaxAggregateInputType = {
    id?: true
    component?: true
    file?: true
    prop?: true
    projectId?: true
  }

  export type PropUsageCountAggregateInputType = {
    id?: true
    component?: true
    file?: true
    prop?: true
    projectId?: true
    _all?: true
  }

  export type PropUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropUsage to aggregate.
     */
    where?: PropUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropUsages to fetch.
     */
    orderBy?: PropUsageOrderByWithRelationInput | PropUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropUsages
    **/
    _count?: true | PropUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropUsageMaxAggregateInputType
  }

  export type GetPropUsageAggregateType<T extends PropUsageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropUsage[P]>
      : GetScalarType<T[P], AggregatePropUsage[P]>
  }




  export type PropUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropUsageWhereInput
    orderBy?: PropUsageOrderByWithAggregationInput | PropUsageOrderByWithAggregationInput[]
    by: PropUsageScalarFieldEnum[] | PropUsageScalarFieldEnum
    having?: PropUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropUsageCountAggregateInputType | true
    _avg?: PropUsageAvgAggregateInputType
    _sum?: PropUsageSumAggregateInputType
    _min?: PropUsageMinAggregateInputType
    _max?: PropUsageMaxAggregateInputType
  }

  export type PropUsageGroupByOutputType = {
    id: number
    component: string
    file: string
    prop: string
    projectId: number
    _count: PropUsageCountAggregateOutputType | null
    _avg: PropUsageAvgAggregateOutputType | null
    _sum: PropUsageSumAggregateOutputType | null
    _min: PropUsageMinAggregateOutputType | null
    _max: PropUsageMaxAggregateOutputType | null
  }

  type GetPropUsageGroupByPayload<T extends PropUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropUsageGroupByOutputType[P]>
            : GetScalarType<T[P], PropUsageGroupByOutputType[P]>
        }
      >
    >


  export type PropUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    component?: boolean
    file?: boolean
    prop?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propUsage"]>

  export type PropUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    component?: boolean
    file?: boolean
    prop?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propUsage"]>

  export type PropUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    component?: boolean
    file?: boolean
    prop?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propUsage"]>

  export type PropUsageSelectScalar = {
    id?: boolean
    component?: boolean
    file?: boolean
    prop?: boolean
    projectId?: boolean
  }

  export type PropUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "component" | "file" | "prop" | "projectId", ExtArgs["result"]["propUsage"]>
  export type PropUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PropUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PropUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PropUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropUsage"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      component: string
      file: string
      prop: string
      projectId: number
    }, ExtArgs["result"]["propUsage"]>
    composites: {}
  }

  type PropUsageGetPayload<S extends boolean | null | undefined | PropUsageDefaultArgs> = $Result.GetResult<Prisma.$PropUsagePayload, S>

  type PropUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropUsageCountAggregateInputType | true
    }

  export interface PropUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropUsage'], meta: { name: 'PropUsage' } }
    /**
     * Find zero or one PropUsage that matches the filter.
     * @param {PropUsageFindUniqueArgs} args - Arguments to find a PropUsage
     * @example
     * // Get one PropUsage
     * const propUsage = await prisma.propUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropUsageFindUniqueArgs>(args: SelectSubset<T, PropUsageFindUniqueArgs<ExtArgs>>): Prisma__PropUsageClient<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropUsageFindUniqueOrThrowArgs} args - Arguments to find a PropUsage
     * @example
     * // Get one PropUsage
     * const propUsage = await prisma.propUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropUsageClient<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropUsageFindFirstArgs} args - Arguments to find a PropUsage
     * @example
     * // Get one PropUsage
     * const propUsage = await prisma.propUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropUsageFindFirstArgs>(args?: SelectSubset<T, PropUsageFindFirstArgs<ExtArgs>>): Prisma__PropUsageClient<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropUsageFindFirstOrThrowArgs} args - Arguments to find a PropUsage
     * @example
     * // Get one PropUsage
     * const propUsage = await prisma.propUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropUsageClient<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropUsages
     * const propUsages = await prisma.propUsage.findMany()
     * 
     * // Get first 10 PropUsages
     * const propUsages = await prisma.propUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propUsageWithIdOnly = await prisma.propUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropUsageFindManyArgs>(args?: SelectSubset<T, PropUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropUsage.
     * @param {PropUsageCreateArgs} args - Arguments to create a PropUsage.
     * @example
     * // Create one PropUsage
     * const PropUsage = await prisma.propUsage.create({
     *   data: {
     *     // ... data to create a PropUsage
     *   }
     * })
     * 
     */
    create<T extends PropUsageCreateArgs>(args: SelectSubset<T, PropUsageCreateArgs<ExtArgs>>): Prisma__PropUsageClient<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropUsages.
     * @param {PropUsageCreateManyArgs} args - Arguments to create many PropUsages.
     * @example
     * // Create many PropUsages
     * const propUsage = await prisma.propUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropUsageCreateManyArgs>(args?: SelectSubset<T, PropUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropUsages and returns the data saved in the database.
     * @param {PropUsageCreateManyAndReturnArgs} args - Arguments to create many PropUsages.
     * @example
     * // Create many PropUsages
     * const propUsage = await prisma.propUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropUsages and only return the `id`
     * const propUsageWithIdOnly = await prisma.propUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, PropUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropUsage.
     * @param {PropUsageDeleteArgs} args - Arguments to delete one PropUsage.
     * @example
     * // Delete one PropUsage
     * const PropUsage = await prisma.propUsage.delete({
     *   where: {
     *     // ... filter to delete one PropUsage
     *   }
     * })
     * 
     */
    delete<T extends PropUsageDeleteArgs>(args: SelectSubset<T, PropUsageDeleteArgs<ExtArgs>>): Prisma__PropUsageClient<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropUsage.
     * @param {PropUsageUpdateArgs} args - Arguments to update one PropUsage.
     * @example
     * // Update one PropUsage
     * const propUsage = await prisma.propUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropUsageUpdateArgs>(args: SelectSubset<T, PropUsageUpdateArgs<ExtArgs>>): Prisma__PropUsageClient<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropUsages.
     * @param {PropUsageDeleteManyArgs} args - Arguments to filter PropUsages to delete.
     * @example
     * // Delete a few PropUsages
     * const { count } = await prisma.propUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropUsageDeleteManyArgs>(args?: SelectSubset<T, PropUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropUsages
     * const propUsage = await prisma.propUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropUsageUpdateManyArgs>(args: SelectSubset<T, PropUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropUsages and returns the data updated in the database.
     * @param {PropUsageUpdateManyAndReturnArgs} args - Arguments to update many PropUsages.
     * @example
     * // Update many PropUsages
     * const propUsage = await prisma.propUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropUsages and only return the `id`
     * const propUsageWithIdOnly = await prisma.propUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, PropUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropUsage.
     * @param {PropUsageUpsertArgs} args - Arguments to update or create a PropUsage.
     * @example
     * // Update or create a PropUsage
     * const propUsage = await prisma.propUsage.upsert({
     *   create: {
     *     // ... data to create a PropUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropUsage we want to update
     *   }
     * })
     */
    upsert<T extends PropUsageUpsertArgs>(args: SelectSubset<T, PropUsageUpsertArgs<ExtArgs>>): Prisma__PropUsageClient<$Result.GetResult<Prisma.$PropUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropUsageCountArgs} args - Arguments to filter PropUsages to count.
     * @example
     * // Count the number of PropUsages
     * const count = await prisma.propUsage.count({
     *   where: {
     *     // ... the filter for the PropUsages we want to count
     *   }
     * })
    **/
    count<T extends PropUsageCountArgs>(
      args?: Subset<T, PropUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropUsageAggregateArgs>(args: Subset<T, PropUsageAggregateArgs>): Prisma.PrismaPromise<GetPropUsageAggregateType<T>>

    /**
     * Group by PropUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropUsageGroupByArgs['orderBy'] }
        : { orderBy?: PropUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropUsage model
   */
  readonly fields: PropUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropUsage model
   */
  interface PropUsageFieldRefs {
    readonly id: FieldRef<"PropUsage", 'Int'>
    readonly component: FieldRef<"PropUsage", 'String'>
    readonly file: FieldRef<"PropUsage", 'String'>
    readonly prop: FieldRef<"PropUsage", 'String'>
    readonly projectId: FieldRef<"PropUsage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PropUsage findUnique
   */
  export type PropUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
    /**
     * Filter, which PropUsage to fetch.
     */
    where: PropUsageWhereUniqueInput
  }

  /**
   * PropUsage findUniqueOrThrow
   */
  export type PropUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
    /**
     * Filter, which PropUsage to fetch.
     */
    where: PropUsageWhereUniqueInput
  }

  /**
   * PropUsage findFirst
   */
  export type PropUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
    /**
     * Filter, which PropUsage to fetch.
     */
    where?: PropUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropUsages to fetch.
     */
    orderBy?: PropUsageOrderByWithRelationInput | PropUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropUsages.
     */
    cursor?: PropUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropUsages.
     */
    distinct?: PropUsageScalarFieldEnum | PropUsageScalarFieldEnum[]
  }

  /**
   * PropUsage findFirstOrThrow
   */
  export type PropUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
    /**
     * Filter, which PropUsage to fetch.
     */
    where?: PropUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropUsages to fetch.
     */
    orderBy?: PropUsageOrderByWithRelationInput | PropUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropUsages.
     */
    cursor?: PropUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropUsages.
     */
    distinct?: PropUsageScalarFieldEnum | PropUsageScalarFieldEnum[]
  }

  /**
   * PropUsage findMany
   */
  export type PropUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
    /**
     * Filter, which PropUsages to fetch.
     */
    where?: PropUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropUsages to fetch.
     */
    orderBy?: PropUsageOrderByWithRelationInput | PropUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropUsages.
     */
    cursor?: PropUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropUsages.
     */
    skip?: number
    distinct?: PropUsageScalarFieldEnum | PropUsageScalarFieldEnum[]
  }

  /**
   * PropUsage create
   */
  export type PropUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropUsage.
     */
    data: XOR<PropUsageCreateInput, PropUsageUncheckedCreateInput>
  }

  /**
   * PropUsage createMany
   */
  export type PropUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropUsages.
     */
    data: PropUsageCreateManyInput | PropUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropUsage createManyAndReturn
   */
  export type PropUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * The data used to create many PropUsages.
     */
    data: PropUsageCreateManyInput | PropUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropUsage update
   */
  export type PropUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropUsage.
     */
    data: XOR<PropUsageUpdateInput, PropUsageUncheckedUpdateInput>
    /**
     * Choose, which PropUsage to update.
     */
    where: PropUsageWhereUniqueInput
  }

  /**
   * PropUsage updateMany
   */
  export type PropUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropUsages.
     */
    data: XOR<PropUsageUpdateManyMutationInput, PropUsageUncheckedUpdateManyInput>
    /**
     * Filter which PropUsages to update
     */
    where?: PropUsageWhereInput
    /**
     * Limit how many PropUsages to update.
     */
    limit?: number
  }

  /**
   * PropUsage updateManyAndReturn
   */
  export type PropUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * The data used to update PropUsages.
     */
    data: XOR<PropUsageUpdateManyMutationInput, PropUsageUncheckedUpdateManyInput>
    /**
     * Filter which PropUsages to update
     */
    where?: PropUsageWhereInput
    /**
     * Limit how many PropUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropUsage upsert
   */
  export type PropUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropUsage to update in case it exists.
     */
    where: PropUsageWhereUniqueInput
    /**
     * In case the PropUsage found by the `where` argument doesn't exist, create a new PropUsage with this data.
     */
    create: XOR<PropUsageCreateInput, PropUsageUncheckedCreateInput>
    /**
     * In case the PropUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropUsageUpdateInput, PropUsageUncheckedUpdateInput>
  }

  /**
   * PropUsage delete
   */
  export type PropUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
    /**
     * Filter which PropUsage to delete.
     */
    where: PropUsageWhereUniqueInput
  }

  /**
   * PropUsage deleteMany
   */
  export type PropUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropUsages to delete
     */
    where?: PropUsageWhereInput
    /**
     * Limit how many PropUsages to delete.
     */
    limit?: number
  }

  /**
   * PropUsage without action
   */
  export type PropUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropUsage
     */
    select?: PropUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropUsage
     */
    omit?: PropUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropUsageInclude<ExtArgs> | null
  }


  /**
   * Model UnusedComponent
   */

  export type AggregateUnusedComponent = {
    _count: UnusedComponentCountAggregateOutputType | null
    _avg: UnusedComponentAvgAggregateOutputType | null
    _sum: UnusedComponentSumAggregateOutputType | null
    _min: UnusedComponentMinAggregateOutputType | null
    _max: UnusedComponentMaxAggregateOutputType | null
  }

  export type UnusedComponentAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type UnusedComponentSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type UnusedComponentMinAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
  }

  export type UnusedComponentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
  }

  export type UnusedComponentCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    _all: number
  }


  export type UnusedComponentAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type UnusedComponentSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type UnusedComponentMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
  }

  export type UnusedComponentMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
  }

  export type UnusedComponentCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    _all?: true
  }

  export type UnusedComponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnusedComponent to aggregate.
     */
    where?: UnusedComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnusedComponents to fetch.
     */
    orderBy?: UnusedComponentOrderByWithRelationInput | UnusedComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnusedComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnusedComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnusedComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnusedComponents
    **/
    _count?: true | UnusedComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnusedComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnusedComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnusedComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnusedComponentMaxAggregateInputType
  }

  export type GetUnusedComponentAggregateType<T extends UnusedComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateUnusedComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnusedComponent[P]>
      : GetScalarType<T[P], AggregateUnusedComponent[P]>
  }




  export type UnusedComponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnusedComponentWhereInput
    orderBy?: UnusedComponentOrderByWithAggregationInput | UnusedComponentOrderByWithAggregationInput[]
    by: UnusedComponentScalarFieldEnum[] | UnusedComponentScalarFieldEnum
    having?: UnusedComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnusedComponentCountAggregateInputType | true
    _avg?: UnusedComponentAvgAggregateInputType
    _sum?: UnusedComponentSumAggregateInputType
    _min?: UnusedComponentMinAggregateInputType
    _max?: UnusedComponentMaxAggregateInputType
  }

  export type UnusedComponentGroupByOutputType = {
    id: number
    name: string
    projectId: number
    _count: UnusedComponentCountAggregateOutputType | null
    _avg: UnusedComponentAvgAggregateOutputType | null
    _sum: UnusedComponentSumAggregateOutputType | null
    _min: UnusedComponentMinAggregateOutputType | null
    _max: UnusedComponentMaxAggregateOutputType | null
  }

  type GetUnusedComponentGroupByPayload<T extends UnusedComponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnusedComponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnusedComponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnusedComponentGroupByOutputType[P]>
            : GetScalarType<T[P], UnusedComponentGroupByOutputType[P]>
        }
      >
    >


  export type UnusedComponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unusedComponent"]>

  export type UnusedComponentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unusedComponent"]>

  export type UnusedComponentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unusedComponent"]>

  export type UnusedComponentSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
  }

  export type UnusedComponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectId", ExtArgs["result"]["unusedComponent"]>
  export type UnusedComponentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type UnusedComponentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type UnusedComponentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $UnusedComponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnusedComponent"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      projectId: number
    }, ExtArgs["result"]["unusedComponent"]>
    composites: {}
  }

  type UnusedComponentGetPayload<S extends boolean | null | undefined | UnusedComponentDefaultArgs> = $Result.GetResult<Prisma.$UnusedComponentPayload, S>

  type UnusedComponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnusedComponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnusedComponentCountAggregateInputType | true
    }

  export interface UnusedComponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnusedComponent'], meta: { name: 'UnusedComponent' } }
    /**
     * Find zero or one UnusedComponent that matches the filter.
     * @param {UnusedComponentFindUniqueArgs} args - Arguments to find a UnusedComponent
     * @example
     * // Get one UnusedComponent
     * const unusedComponent = await prisma.unusedComponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnusedComponentFindUniqueArgs>(args: SelectSubset<T, UnusedComponentFindUniqueArgs<ExtArgs>>): Prisma__UnusedComponentClient<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnusedComponent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnusedComponentFindUniqueOrThrowArgs} args - Arguments to find a UnusedComponent
     * @example
     * // Get one UnusedComponent
     * const unusedComponent = await prisma.unusedComponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnusedComponentFindUniqueOrThrowArgs>(args: SelectSubset<T, UnusedComponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnusedComponentClient<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnusedComponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnusedComponentFindFirstArgs} args - Arguments to find a UnusedComponent
     * @example
     * // Get one UnusedComponent
     * const unusedComponent = await prisma.unusedComponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnusedComponentFindFirstArgs>(args?: SelectSubset<T, UnusedComponentFindFirstArgs<ExtArgs>>): Prisma__UnusedComponentClient<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnusedComponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnusedComponentFindFirstOrThrowArgs} args - Arguments to find a UnusedComponent
     * @example
     * // Get one UnusedComponent
     * const unusedComponent = await prisma.unusedComponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnusedComponentFindFirstOrThrowArgs>(args?: SelectSubset<T, UnusedComponentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnusedComponentClient<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnusedComponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnusedComponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnusedComponents
     * const unusedComponents = await prisma.unusedComponent.findMany()
     * 
     * // Get first 10 UnusedComponents
     * const unusedComponents = await prisma.unusedComponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unusedComponentWithIdOnly = await prisma.unusedComponent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnusedComponentFindManyArgs>(args?: SelectSubset<T, UnusedComponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnusedComponent.
     * @param {UnusedComponentCreateArgs} args - Arguments to create a UnusedComponent.
     * @example
     * // Create one UnusedComponent
     * const UnusedComponent = await prisma.unusedComponent.create({
     *   data: {
     *     // ... data to create a UnusedComponent
     *   }
     * })
     * 
     */
    create<T extends UnusedComponentCreateArgs>(args: SelectSubset<T, UnusedComponentCreateArgs<ExtArgs>>): Prisma__UnusedComponentClient<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnusedComponents.
     * @param {UnusedComponentCreateManyArgs} args - Arguments to create many UnusedComponents.
     * @example
     * // Create many UnusedComponents
     * const unusedComponent = await prisma.unusedComponent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnusedComponentCreateManyArgs>(args?: SelectSubset<T, UnusedComponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnusedComponents and returns the data saved in the database.
     * @param {UnusedComponentCreateManyAndReturnArgs} args - Arguments to create many UnusedComponents.
     * @example
     * // Create many UnusedComponents
     * const unusedComponent = await prisma.unusedComponent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnusedComponents and only return the `id`
     * const unusedComponentWithIdOnly = await prisma.unusedComponent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnusedComponentCreateManyAndReturnArgs>(args?: SelectSubset<T, UnusedComponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnusedComponent.
     * @param {UnusedComponentDeleteArgs} args - Arguments to delete one UnusedComponent.
     * @example
     * // Delete one UnusedComponent
     * const UnusedComponent = await prisma.unusedComponent.delete({
     *   where: {
     *     // ... filter to delete one UnusedComponent
     *   }
     * })
     * 
     */
    delete<T extends UnusedComponentDeleteArgs>(args: SelectSubset<T, UnusedComponentDeleteArgs<ExtArgs>>): Prisma__UnusedComponentClient<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnusedComponent.
     * @param {UnusedComponentUpdateArgs} args - Arguments to update one UnusedComponent.
     * @example
     * // Update one UnusedComponent
     * const unusedComponent = await prisma.unusedComponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnusedComponentUpdateArgs>(args: SelectSubset<T, UnusedComponentUpdateArgs<ExtArgs>>): Prisma__UnusedComponentClient<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnusedComponents.
     * @param {UnusedComponentDeleteManyArgs} args - Arguments to filter UnusedComponents to delete.
     * @example
     * // Delete a few UnusedComponents
     * const { count } = await prisma.unusedComponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnusedComponentDeleteManyArgs>(args?: SelectSubset<T, UnusedComponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnusedComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnusedComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnusedComponents
     * const unusedComponent = await prisma.unusedComponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnusedComponentUpdateManyArgs>(args: SelectSubset<T, UnusedComponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnusedComponents and returns the data updated in the database.
     * @param {UnusedComponentUpdateManyAndReturnArgs} args - Arguments to update many UnusedComponents.
     * @example
     * // Update many UnusedComponents
     * const unusedComponent = await prisma.unusedComponent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnusedComponents and only return the `id`
     * const unusedComponentWithIdOnly = await prisma.unusedComponent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnusedComponentUpdateManyAndReturnArgs>(args: SelectSubset<T, UnusedComponentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnusedComponent.
     * @param {UnusedComponentUpsertArgs} args - Arguments to update or create a UnusedComponent.
     * @example
     * // Update or create a UnusedComponent
     * const unusedComponent = await prisma.unusedComponent.upsert({
     *   create: {
     *     // ... data to create a UnusedComponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnusedComponent we want to update
     *   }
     * })
     */
    upsert<T extends UnusedComponentUpsertArgs>(args: SelectSubset<T, UnusedComponentUpsertArgs<ExtArgs>>): Prisma__UnusedComponentClient<$Result.GetResult<Prisma.$UnusedComponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnusedComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnusedComponentCountArgs} args - Arguments to filter UnusedComponents to count.
     * @example
     * // Count the number of UnusedComponents
     * const count = await prisma.unusedComponent.count({
     *   where: {
     *     // ... the filter for the UnusedComponents we want to count
     *   }
     * })
    **/
    count<T extends UnusedComponentCountArgs>(
      args?: Subset<T, UnusedComponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnusedComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnusedComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnusedComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnusedComponentAggregateArgs>(args: Subset<T, UnusedComponentAggregateArgs>): Prisma.PrismaPromise<GetUnusedComponentAggregateType<T>>

    /**
     * Group by UnusedComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnusedComponentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnusedComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnusedComponentGroupByArgs['orderBy'] }
        : { orderBy?: UnusedComponentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnusedComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnusedComponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnusedComponent model
   */
  readonly fields: UnusedComponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnusedComponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnusedComponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnusedComponent model
   */
  interface UnusedComponentFieldRefs {
    readonly id: FieldRef<"UnusedComponent", 'Int'>
    readonly name: FieldRef<"UnusedComponent", 'String'>
    readonly projectId: FieldRef<"UnusedComponent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UnusedComponent findUnique
   */
  export type UnusedComponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
    /**
     * Filter, which UnusedComponent to fetch.
     */
    where: UnusedComponentWhereUniqueInput
  }

  /**
   * UnusedComponent findUniqueOrThrow
   */
  export type UnusedComponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
    /**
     * Filter, which UnusedComponent to fetch.
     */
    where: UnusedComponentWhereUniqueInput
  }

  /**
   * UnusedComponent findFirst
   */
  export type UnusedComponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
    /**
     * Filter, which UnusedComponent to fetch.
     */
    where?: UnusedComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnusedComponents to fetch.
     */
    orderBy?: UnusedComponentOrderByWithRelationInput | UnusedComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnusedComponents.
     */
    cursor?: UnusedComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnusedComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnusedComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnusedComponents.
     */
    distinct?: UnusedComponentScalarFieldEnum | UnusedComponentScalarFieldEnum[]
  }

  /**
   * UnusedComponent findFirstOrThrow
   */
  export type UnusedComponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
    /**
     * Filter, which UnusedComponent to fetch.
     */
    where?: UnusedComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnusedComponents to fetch.
     */
    orderBy?: UnusedComponentOrderByWithRelationInput | UnusedComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnusedComponents.
     */
    cursor?: UnusedComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnusedComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnusedComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnusedComponents.
     */
    distinct?: UnusedComponentScalarFieldEnum | UnusedComponentScalarFieldEnum[]
  }

  /**
   * UnusedComponent findMany
   */
  export type UnusedComponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
    /**
     * Filter, which UnusedComponents to fetch.
     */
    where?: UnusedComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnusedComponents to fetch.
     */
    orderBy?: UnusedComponentOrderByWithRelationInput | UnusedComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnusedComponents.
     */
    cursor?: UnusedComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnusedComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnusedComponents.
     */
    skip?: number
    distinct?: UnusedComponentScalarFieldEnum | UnusedComponentScalarFieldEnum[]
  }

  /**
   * UnusedComponent create
   */
  export type UnusedComponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
    /**
     * The data needed to create a UnusedComponent.
     */
    data: XOR<UnusedComponentCreateInput, UnusedComponentUncheckedCreateInput>
  }

  /**
   * UnusedComponent createMany
   */
  export type UnusedComponentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnusedComponents.
     */
    data: UnusedComponentCreateManyInput | UnusedComponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnusedComponent createManyAndReturn
   */
  export type UnusedComponentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * The data used to create many UnusedComponents.
     */
    data: UnusedComponentCreateManyInput | UnusedComponentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnusedComponent update
   */
  export type UnusedComponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
    /**
     * The data needed to update a UnusedComponent.
     */
    data: XOR<UnusedComponentUpdateInput, UnusedComponentUncheckedUpdateInput>
    /**
     * Choose, which UnusedComponent to update.
     */
    where: UnusedComponentWhereUniqueInput
  }

  /**
   * UnusedComponent updateMany
   */
  export type UnusedComponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnusedComponents.
     */
    data: XOR<UnusedComponentUpdateManyMutationInput, UnusedComponentUncheckedUpdateManyInput>
    /**
     * Filter which UnusedComponents to update
     */
    where?: UnusedComponentWhereInput
    /**
     * Limit how many UnusedComponents to update.
     */
    limit?: number
  }

  /**
   * UnusedComponent updateManyAndReturn
   */
  export type UnusedComponentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * The data used to update UnusedComponents.
     */
    data: XOR<UnusedComponentUpdateManyMutationInput, UnusedComponentUncheckedUpdateManyInput>
    /**
     * Filter which UnusedComponents to update
     */
    where?: UnusedComponentWhereInput
    /**
     * Limit how many UnusedComponents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnusedComponent upsert
   */
  export type UnusedComponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
    /**
     * The filter to search for the UnusedComponent to update in case it exists.
     */
    where: UnusedComponentWhereUniqueInput
    /**
     * In case the UnusedComponent found by the `where` argument doesn't exist, create a new UnusedComponent with this data.
     */
    create: XOR<UnusedComponentCreateInput, UnusedComponentUncheckedCreateInput>
    /**
     * In case the UnusedComponent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnusedComponentUpdateInput, UnusedComponentUncheckedUpdateInput>
  }

  /**
   * UnusedComponent delete
   */
  export type UnusedComponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
    /**
     * Filter which UnusedComponent to delete.
     */
    where: UnusedComponentWhereUniqueInput
  }

  /**
   * UnusedComponent deleteMany
   */
  export type UnusedComponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnusedComponents to delete
     */
    where?: UnusedComponentWhereInput
    /**
     * Limit how many UnusedComponents to delete.
     */
    limit?: number
  }

  /**
   * UnusedComponent without action
   */
  export type UnusedComponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnusedComponent
     */
    select?: UnusedComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnusedComponent
     */
    omit?: UnusedComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnusedComponentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    repoUrl: 'repoUrl',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ComponentUsageScalarFieldEnum: {
    id: 'id',
    component: 'component',
    file: 'file',
    count: 'count',
    total: 'total',
    projectId: 'projectId'
  };

  export type ComponentUsageScalarFieldEnum = (typeof ComponentUsageScalarFieldEnum)[keyof typeof ComponentUsageScalarFieldEnum]


  export const PropUsageScalarFieldEnum: {
    id: 'id',
    component: 'component',
    file: 'file',
    prop: 'prop',
    projectId: 'projectId'
  };

  export type PropUsageScalarFieldEnum = (typeof PropUsageScalarFieldEnum)[keyof typeof PropUsageScalarFieldEnum]


  export const UnusedComponentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId'
  };

  export type UnusedComponentScalarFieldEnum = (typeof UnusedComponentScalarFieldEnum)[keyof typeof UnusedComponentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    repoUrl?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    componentUsages?: ComponentUsageListRelationFilter
    propUsages?: PropUsageListRelationFilter
    unusedComponents?: UnusedComponentListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
    componentUsages?: ComponentUsageOrderByRelationAggregateInput
    propUsages?: PropUsageOrderByRelationAggregateInput
    unusedComponents?: UnusedComponentOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    repoUrl?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    componentUsages?: ComponentUsageListRelationFilter
    propUsages?: PropUsageListRelationFilter
    unusedComponents?: UnusedComponentListRelationFilter
  }, "id" | "name">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    repoUrl?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ComponentUsageWhereInput = {
    AND?: ComponentUsageWhereInput | ComponentUsageWhereInput[]
    OR?: ComponentUsageWhereInput[]
    NOT?: ComponentUsageWhereInput | ComponentUsageWhereInput[]
    id?: IntFilter<"ComponentUsage"> | number
    component?: StringFilter<"ComponentUsage"> | string
    file?: StringFilter<"ComponentUsage"> | string
    count?: IntFilter<"ComponentUsage"> | number
    total?: IntFilter<"ComponentUsage"> | number
    projectId?: IntFilter<"ComponentUsage"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ComponentUsageOrderByWithRelationInput = {
    id?: SortOrder
    component?: SortOrder
    file?: SortOrder
    count?: SortOrder
    total?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ComponentUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComponentUsageWhereInput | ComponentUsageWhereInput[]
    OR?: ComponentUsageWhereInput[]
    NOT?: ComponentUsageWhereInput | ComponentUsageWhereInput[]
    component?: StringFilter<"ComponentUsage"> | string
    file?: StringFilter<"ComponentUsage"> | string
    count?: IntFilter<"ComponentUsage"> | number
    total?: IntFilter<"ComponentUsage"> | number
    projectId?: IntFilter<"ComponentUsage"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ComponentUsageOrderByWithAggregationInput = {
    id?: SortOrder
    component?: SortOrder
    file?: SortOrder
    count?: SortOrder
    total?: SortOrder
    projectId?: SortOrder
    _count?: ComponentUsageCountOrderByAggregateInput
    _avg?: ComponentUsageAvgOrderByAggregateInput
    _max?: ComponentUsageMaxOrderByAggregateInput
    _min?: ComponentUsageMinOrderByAggregateInput
    _sum?: ComponentUsageSumOrderByAggregateInput
  }

  export type ComponentUsageScalarWhereWithAggregatesInput = {
    AND?: ComponentUsageScalarWhereWithAggregatesInput | ComponentUsageScalarWhereWithAggregatesInput[]
    OR?: ComponentUsageScalarWhereWithAggregatesInput[]
    NOT?: ComponentUsageScalarWhereWithAggregatesInput | ComponentUsageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ComponentUsage"> | number
    component?: StringWithAggregatesFilter<"ComponentUsage"> | string
    file?: StringWithAggregatesFilter<"ComponentUsage"> | string
    count?: IntWithAggregatesFilter<"ComponentUsage"> | number
    total?: IntWithAggregatesFilter<"ComponentUsage"> | number
    projectId?: IntWithAggregatesFilter<"ComponentUsage"> | number
  }

  export type PropUsageWhereInput = {
    AND?: PropUsageWhereInput | PropUsageWhereInput[]
    OR?: PropUsageWhereInput[]
    NOT?: PropUsageWhereInput | PropUsageWhereInput[]
    id?: IntFilter<"PropUsage"> | number
    component?: StringFilter<"PropUsage"> | string
    file?: StringFilter<"PropUsage"> | string
    prop?: StringFilter<"PropUsage"> | string
    projectId?: IntFilter<"PropUsage"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type PropUsageOrderByWithRelationInput = {
    id?: SortOrder
    component?: SortOrder
    file?: SortOrder
    prop?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type PropUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropUsageWhereInput | PropUsageWhereInput[]
    OR?: PropUsageWhereInput[]
    NOT?: PropUsageWhereInput | PropUsageWhereInput[]
    component?: StringFilter<"PropUsage"> | string
    file?: StringFilter<"PropUsage"> | string
    prop?: StringFilter<"PropUsage"> | string
    projectId?: IntFilter<"PropUsage"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type PropUsageOrderByWithAggregationInput = {
    id?: SortOrder
    component?: SortOrder
    file?: SortOrder
    prop?: SortOrder
    projectId?: SortOrder
    _count?: PropUsageCountOrderByAggregateInput
    _avg?: PropUsageAvgOrderByAggregateInput
    _max?: PropUsageMaxOrderByAggregateInput
    _min?: PropUsageMinOrderByAggregateInput
    _sum?: PropUsageSumOrderByAggregateInput
  }

  export type PropUsageScalarWhereWithAggregatesInput = {
    AND?: PropUsageScalarWhereWithAggregatesInput | PropUsageScalarWhereWithAggregatesInput[]
    OR?: PropUsageScalarWhereWithAggregatesInput[]
    NOT?: PropUsageScalarWhereWithAggregatesInput | PropUsageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropUsage"> | number
    component?: StringWithAggregatesFilter<"PropUsage"> | string
    file?: StringWithAggregatesFilter<"PropUsage"> | string
    prop?: StringWithAggregatesFilter<"PropUsage"> | string
    projectId?: IntWithAggregatesFilter<"PropUsage"> | number
  }

  export type UnusedComponentWhereInput = {
    AND?: UnusedComponentWhereInput | UnusedComponentWhereInput[]
    OR?: UnusedComponentWhereInput[]
    NOT?: UnusedComponentWhereInput | UnusedComponentWhereInput[]
    id?: IntFilter<"UnusedComponent"> | number
    name?: StringFilter<"UnusedComponent"> | string
    projectId?: IntFilter<"UnusedComponent"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type UnusedComponentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type UnusedComponentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UnusedComponentWhereInput | UnusedComponentWhereInput[]
    OR?: UnusedComponentWhereInput[]
    NOT?: UnusedComponentWhereInput | UnusedComponentWhereInput[]
    name?: StringFilter<"UnusedComponent"> | string
    projectId?: IntFilter<"UnusedComponent"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type UnusedComponentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    _count?: UnusedComponentCountOrderByAggregateInput
    _avg?: UnusedComponentAvgOrderByAggregateInput
    _max?: UnusedComponentMaxOrderByAggregateInput
    _min?: UnusedComponentMinOrderByAggregateInput
    _sum?: UnusedComponentSumOrderByAggregateInput
  }

  export type UnusedComponentScalarWhereWithAggregatesInput = {
    AND?: UnusedComponentScalarWhereWithAggregatesInput | UnusedComponentScalarWhereWithAggregatesInput[]
    OR?: UnusedComponentScalarWhereWithAggregatesInput[]
    NOT?: UnusedComponentScalarWhereWithAggregatesInput | UnusedComponentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UnusedComponent"> | number
    name?: StringWithAggregatesFilter<"UnusedComponent"> | string
    projectId?: IntWithAggregatesFilter<"UnusedComponent"> | number
  }

  export type ProjectCreateInput = {
    name: string
    repoUrl: string
    createdAt?: Date | string
    componentUsages?: ComponentUsageCreateNestedManyWithoutProjectInput
    propUsages?: PropUsageCreateNestedManyWithoutProjectInput
    unusedComponents?: UnusedComponentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    repoUrl: string
    createdAt?: Date | string
    componentUsages?: ComponentUsageUncheckedCreateNestedManyWithoutProjectInput
    propUsages?: PropUsageUncheckedCreateNestedManyWithoutProjectInput
    unusedComponents?: UnusedComponentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentUsages?: ComponentUsageUpdateManyWithoutProjectNestedInput
    propUsages?: PropUsageUpdateManyWithoutProjectNestedInput
    unusedComponents?: UnusedComponentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentUsages?: ComponentUsageUncheckedUpdateManyWithoutProjectNestedInput
    propUsages?: PropUsageUncheckedUpdateManyWithoutProjectNestedInput
    unusedComponents?: UnusedComponentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    repoUrl: string
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComponentUsageCreateInput = {
    component: string
    file: string
    count: number
    total: number
    project: ProjectCreateNestedOneWithoutComponentUsagesInput
  }

  export type ComponentUsageUncheckedCreateInput = {
    id?: number
    component: string
    file: string
    count: number
    total: number
    projectId: number
  }

  export type ComponentUsageUpdateInput = {
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutComponentUsagesNestedInput
  }

  export type ComponentUsageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ComponentUsageCreateManyInput = {
    id?: number
    component: string
    file: string
    count: number
    total: number
    projectId: number
  }

  export type ComponentUsageUpdateManyMutationInput = {
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ComponentUsageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type PropUsageCreateInput = {
    component: string
    file: string
    prop: string
    project: ProjectCreateNestedOneWithoutPropUsagesInput
  }

  export type PropUsageUncheckedCreateInput = {
    id?: number
    component: string
    file: string
    prop: string
    projectId: number
  }

  export type PropUsageUpdateInput = {
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    prop?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutPropUsagesNestedInput
  }

  export type PropUsageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    prop?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type PropUsageCreateManyInput = {
    id?: number
    component: string
    file: string
    prop: string
    projectId: number
  }

  export type PropUsageUpdateManyMutationInput = {
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    prop?: StringFieldUpdateOperationsInput | string
  }

  export type PropUsageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    prop?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type UnusedComponentCreateInput = {
    name: string
    project: ProjectCreateNestedOneWithoutUnusedComponentsInput
  }

  export type UnusedComponentUncheckedCreateInput = {
    id?: number
    name: string
    projectId: number
  }

  export type UnusedComponentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutUnusedComponentsNestedInput
  }

  export type UnusedComponentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type UnusedComponentCreateManyInput = {
    id?: number
    name: string
    projectId: number
  }

  export type UnusedComponentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UnusedComponentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ComponentUsageListRelationFilter = {
    every?: ComponentUsageWhereInput
    some?: ComponentUsageWhereInput
    none?: ComponentUsageWhereInput
  }

  export type PropUsageListRelationFilter = {
    every?: PropUsageWhereInput
    some?: PropUsageWhereInput
    none?: PropUsageWhereInput
  }

  export type UnusedComponentListRelationFilter = {
    every?: UnusedComponentWhereInput
    some?: UnusedComponentWhereInput
    none?: UnusedComponentWhereInput
  }

  export type ComponentUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnusedComponentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ComponentUsageCountOrderByAggregateInput = {
    id?: SortOrder
    component?: SortOrder
    file?: SortOrder
    count?: SortOrder
    total?: SortOrder
    projectId?: SortOrder
  }

  export type ComponentUsageAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    total?: SortOrder
    projectId?: SortOrder
  }

  export type ComponentUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    component?: SortOrder
    file?: SortOrder
    count?: SortOrder
    total?: SortOrder
    projectId?: SortOrder
  }

  export type ComponentUsageMinOrderByAggregateInput = {
    id?: SortOrder
    component?: SortOrder
    file?: SortOrder
    count?: SortOrder
    total?: SortOrder
    projectId?: SortOrder
  }

  export type ComponentUsageSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    total?: SortOrder
    projectId?: SortOrder
  }

  export type PropUsageCountOrderByAggregateInput = {
    id?: SortOrder
    component?: SortOrder
    file?: SortOrder
    prop?: SortOrder
    projectId?: SortOrder
  }

  export type PropUsageAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type PropUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    component?: SortOrder
    file?: SortOrder
    prop?: SortOrder
    projectId?: SortOrder
  }

  export type PropUsageMinOrderByAggregateInput = {
    id?: SortOrder
    component?: SortOrder
    file?: SortOrder
    prop?: SortOrder
    projectId?: SortOrder
  }

  export type PropUsageSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type UnusedComponentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type UnusedComponentAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type UnusedComponentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type UnusedComponentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type UnusedComponentSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ComponentUsageCreateNestedManyWithoutProjectInput = {
    create?: XOR<ComponentUsageCreateWithoutProjectInput, ComponentUsageUncheckedCreateWithoutProjectInput> | ComponentUsageCreateWithoutProjectInput[] | ComponentUsageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ComponentUsageCreateOrConnectWithoutProjectInput | ComponentUsageCreateOrConnectWithoutProjectInput[]
    createMany?: ComponentUsageCreateManyProjectInputEnvelope
    connect?: ComponentUsageWhereUniqueInput | ComponentUsageWhereUniqueInput[]
  }

  export type PropUsageCreateNestedManyWithoutProjectInput = {
    create?: XOR<PropUsageCreateWithoutProjectInput, PropUsageUncheckedCreateWithoutProjectInput> | PropUsageCreateWithoutProjectInput[] | PropUsageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PropUsageCreateOrConnectWithoutProjectInput | PropUsageCreateOrConnectWithoutProjectInput[]
    createMany?: PropUsageCreateManyProjectInputEnvelope
    connect?: PropUsageWhereUniqueInput | PropUsageWhereUniqueInput[]
  }

  export type UnusedComponentCreateNestedManyWithoutProjectInput = {
    create?: XOR<UnusedComponentCreateWithoutProjectInput, UnusedComponentUncheckedCreateWithoutProjectInput> | UnusedComponentCreateWithoutProjectInput[] | UnusedComponentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UnusedComponentCreateOrConnectWithoutProjectInput | UnusedComponentCreateOrConnectWithoutProjectInput[]
    createMany?: UnusedComponentCreateManyProjectInputEnvelope
    connect?: UnusedComponentWhereUniqueInput | UnusedComponentWhereUniqueInput[]
  }

  export type ComponentUsageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ComponentUsageCreateWithoutProjectInput, ComponentUsageUncheckedCreateWithoutProjectInput> | ComponentUsageCreateWithoutProjectInput[] | ComponentUsageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ComponentUsageCreateOrConnectWithoutProjectInput | ComponentUsageCreateOrConnectWithoutProjectInput[]
    createMany?: ComponentUsageCreateManyProjectInputEnvelope
    connect?: ComponentUsageWhereUniqueInput | ComponentUsageWhereUniqueInput[]
  }

  export type PropUsageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PropUsageCreateWithoutProjectInput, PropUsageUncheckedCreateWithoutProjectInput> | PropUsageCreateWithoutProjectInput[] | PropUsageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PropUsageCreateOrConnectWithoutProjectInput | PropUsageCreateOrConnectWithoutProjectInput[]
    createMany?: PropUsageCreateManyProjectInputEnvelope
    connect?: PropUsageWhereUniqueInput | PropUsageWhereUniqueInput[]
  }

  export type UnusedComponentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UnusedComponentCreateWithoutProjectInput, UnusedComponentUncheckedCreateWithoutProjectInput> | UnusedComponentCreateWithoutProjectInput[] | UnusedComponentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UnusedComponentCreateOrConnectWithoutProjectInput | UnusedComponentCreateOrConnectWithoutProjectInput[]
    createMany?: UnusedComponentCreateManyProjectInputEnvelope
    connect?: UnusedComponentWhereUniqueInput | UnusedComponentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ComponentUsageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ComponentUsageCreateWithoutProjectInput, ComponentUsageUncheckedCreateWithoutProjectInput> | ComponentUsageCreateWithoutProjectInput[] | ComponentUsageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ComponentUsageCreateOrConnectWithoutProjectInput | ComponentUsageCreateOrConnectWithoutProjectInput[]
    upsert?: ComponentUsageUpsertWithWhereUniqueWithoutProjectInput | ComponentUsageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ComponentUsageCreateManyProjectInputEnvelope
    set?: ComponentUsageWhereUniqueInput | ComponentUsageWhereUniqueInput[]
    disconnect?: ComponentUsageWhereUniqueInput | ComponentUsageWhereUniqueInput[]
    delete?: ComponentUsageWhereUniqueInput | ComponentUsageWhereUniqueInput[]
    connect?: ComponentUsageWhereUniqueInput | ComponentUsageWhereUniqueInput[]
    update?: ComponentUsageUpdateWithWhereUniqueWithoutProjectInput | ComponentUsageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ComponentUsageUpdateManyWithWhereWithoutProjectInput | ComponentUsageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ComponentUsageScalarWhereInput | ComponentUsageScalarWhereInput[]
  }

  export type PropUsageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PropUsageCreateWithoutProjectInput, PropUsageUncheckedCreateWithoutProjectInput> | PropUsageCreateWithoutProjectInput[] | PropUsageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PropUsageCreateOrConnectWithoutProjectInput | PropUsageCreateOrConnectWithoutProjectInput[]
    upsert?: PropUsageUpsertWithWhereUniqueWithoutProjectInput | PropUsageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PropUsageCreateManyProjectInputEnvelope
    set?: PropUsageWhereUniqueInput | PropUsageWhereUniqueInput[]
    disconnect?: PropUsageWhereUniqueInput | PropUsageWhereUniqueInput[]
    delete?: PropUsageWhereUniqueInput | PropUsageWhereUniqueInput[]
    connect?: PropUsageWhereUniqueInput | PropUsageWhereUniqueInput[]
    update?: PropUsageUpdateWithWhereUniqueWithoutProjectInput | PropUsageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PropUsageUpdateManyWithWhereWithoutProjectInput | PropUsageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PropUsageScalarWhereInput | PropUsageScalarWhereInput[]
  }

  export type UnusedComponentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UnusedComponentCreateWithoutProjectInput, UnusedComponentUncheckedCreateWithoutProjectInput> | UnusedComponentCreateWithoutProjectInput[] | UnusedComponentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UnusedComponentCreateOrConnectWithoutProjectInput | UnusedComponentCreateOrConnectWithoutProjectInput[]
    upsert?: UnusedComponentUpsertWithWhereUniqueWithoutProjectInput | UnusedComponentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UnusedComponentCreateManyProjectInputEnvelope
    set?: UnusedComponentWhereUniqueInput | UnusedComponentWhereUniqueInput[]
    disconnect?: UnusedComponentWhereUniqueInput | UnusedComponentWhereUniqueInput[]
    delete?: UnusedComponentWhereUniqueInput | UnusedComponentWhereUniqueInput[]
    connect?: UnusedComponentWhereUniqueInput | UnusedComponentWhereUniqueInput[]
    update?: UnusedComponentUpdateWithWhereUniqueWithoutProjectInput | UnusedComponentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UnusedComponentUpdateManyWithWhereWithoutProjectInput | UnusedComponentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UnusedComponentScalarWhereInput | UnusedComponentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComponentUsageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ComponentUsageCreateWithoutProjectInput, ComponentUsageUncheckedCreateWithoutProjectInput> | ComponentUsageCreateWithoutProjectInput[] | ComponentUsageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ComponentUsageCreateOrConnectWithoutProjectInput | ComponentUsageCreateOrConnectWithoutProjectInput[]
    upsert?: ComponentUsageUpsertWithWhereUniqueWithoutProjectInput | ComponentUsageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ComponentUsageCreateManyProjectInputEnvelope
    set?: ComponentUsageWhereUniqueInput | ComponentUsageWhereUniqueInput[]
    disconnect?: ComponentUsageWhereUniqueInput | ComponentUsageWhereUniqueInput[]
    delete?: ComponentUsageWhereUniqueInput | ComponentUsageWhereUniqueInput[]
    connect?: ComponentUsageWhereUniqueInput | ComponentUsageWhereUniqueInput[]
    update?: ComponentUsageUpdateWithWhereUniqueWithoutProjectInput | ComponentUsageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ComponentUsageUpdateManyWithWhereWithoutProjectInput | ComponentUsageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ComponentUsageScalarWhereInput | ComponentUsageScalarWhereInput[]
  }

  export type PropUsageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PropUsageCreateWithoutProjectInput, PropUsageUncheckedCreateWithoutProjectInput> | PropUsageCreateWithoutProjectInput[] | PropUsageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PropUsageCreateOrConnectWithoutProjectInput | PropUsageCreateOrConnectWithoutProjectInput[]
    upsert?: PropUsageUpsertWithWhereUniqueWithoutProjectInput | PropUsageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PropUsageCreateManyProjectInputEnvelope
    set?: PropUsageWhereUniqueInput | PropUsageWhereUniqueInput[]
    disconnect?: PropUsageWhereUniqueInput | PropUsageWhereUniqueInput[]
    delete?: PropUsageWhereUniqueInput | PropUsageWhereUniqueInput[]
    connect?: PropUsageWhereUniqueInput | PropUsageWhereUniqueInput[]
    update?: PropUsageUpdateWithWhereUniqueWithoutProjectInput | PropUsageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PropUsageUpdateManyWithWhereWithoutProjectInput | PropUsageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PropUsageScalarWhereInput | PropUsageScalarWhereInput[]
  }

  export type UnusedComponentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UnusedComponentCreateWithoutProjectInput, UnusedComponentUncheckedCreateWithoutProjectInput> | UnusedComponentCreateWithoutProjectInput[] | UnusedComponentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UnusedComponentCreateOrConnectWithoutProjectInput | UnusedComponentCreateOrConnectWithoutProjectInput[]
    upsert?: UnusedComponentUpsertWithWhereUniqueWithoutProjectInput | UnusedComponentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UnusedComponentCreateManyProjectInputEnvelope
    set?: UnusedComponentWhereUniqueInput | UnusedComponentWhereUniqueInput[]
    disconnect?: UnusedComponentWhereUniqueInput | UnusedComponentWhereUniqueInput[]
    delete?: UnusedComponentWhereUniqueInput | UnusedComponentWhereUniqueInput[]
    connect?: UnusedComponentWhereUniqueInput | UnusedComponentWhereUniqueInput[]
    update?: UnusedComponentUpdateWithWhereUniqueWithoutProjectInput | UnusedComponentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UnusedComponentUpdateManyWithWhereWithoutProjectInput | UnusedComponentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UnusedComponentScalarWhereInput | UnusedComponentScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutComponentUsagesInput = {
    create?: XOR<ProjectCreateWithoutComponentUsagesInput, ProjectUncheckedCreateWithoutComponentUsagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutComponentUsagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutComponentUsagesNestedInput = {
    create?: XOR<ProjectCreateWithoutComponentUsagesInput, ProjectUncheckedCreateWithoutComponentUsagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutComponentUsagesInput
    upsert?: ProjectUpsertWithoutComponentUsagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutComponentUsagesInput, ProjectUpdateWithoutComponentUsagesInput>, ProjectUncheckedUpdateWithoutComponentUsagesInput>
  }

  export type ProjectCreateNestedOneWithoutPropUsagesInput = {
    create?: XOR<ProjectCreateWithoutPropUsagesInput, ProjectUncheckedCreateWithoutPropUsagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPropUsagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutPropUsagesNestedInput = {
    create?: XOR<ProjectCreateWithoutPropUsagesInput, ProjectUncheckedCreateWithoutPropUsagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPropUsagesInput
    upsert?: ProjectUpsertWithoutPropUsagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPropUsagesInput, ProjectUpdateWithoutPropUsagesInput>, ProjectUncheckedUpdateWithoutPropUsagesInput>
  }

  export type ProjectCreateNestedOneWithoutUnusedComponentsInput = {
    create?: XOR<ProjectCreateWithoutUnusedComponentsInput, ProjectUncheckedCreateWithoutUnusedComponentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUnusedComponentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutUnusedComponentsNestedInput = {
    create?: XOR<ProjectCreateWithoutUnusedComponentsInput, ProjectUncheckedCreateWithoutUnusedComponentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUnusedComponentsInput
    upsert?: ProjectUpsertWithoutUnusedComponentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUnusedComponentsInput, ProjectUpdateWithoutUnusedComponentsInput>, ProjectUncheckedUpdateWithoutUnusedComponentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ComponentUsageCreateWithoutProjectInput = {
    component: string
    file: string
    count: number
    total: number
  }

  export type ComponentUsageUncheckedCreateWithoutProjectInput = {
    id?: number
    component: string
    file: string
    count: number
    total: number
  }

  export type ComponentUsageCreateOrConnectWithoutProjectInput = {
    where: ComponentUsageWhereUniqueInput
    create: XOR<ComponentUsageCreateWithoutProjectInput, ComponentUsageUncheckedCreateWithoutProjectInput>
  }

  export type ComponentUsageCreateManyProjectInputEnvelope = {
    data: ComponentUsageCreateManyProjectInput | ComponentUsageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PropUsageCreateWithoutProjectInput = {
    component: string
    file: string
    prop: string
  }

  export type PropUsageUncheckedCreateWithoutProjectInput = {
    id?: number
    component: string
    file: string
    prop: string
  }

  export type PropUsageCreateOrConnectWithoutProjectInput = {
    where: PropUsageWhereUniqueInput
    create: XOR<PropUsageCreateWithoutProjectInput, PropUsageUncheckedCreateWithoutProjectInput>
  }

  export type PropUsageCreateManyProjectInputEnvelope = {
    data: PropUsageCreateManyProjectInput | PropUsageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UnusedComponentCreateWithoutProjectInput = {
    name: string
  }

  export type UnusedComponentUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
  }

  export type UnusedComponentCreateOrConnectWithoutProjectInput = {
    where: UnusedComponentWhereUniqueInput
    create: XOR<UnusedComponentCreateWithoutProjectInput, UnusedComponentUncheckedCreateWithoutProjectInput>
  }

  export type UnusedComponentCreateManyProjectInputEnvelope = {
    data: UnusedComponentCreateManyProjectInput | UnusedComponentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ComponentUsageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ComponentUsageWhereUniqueInput
    update: XOR<ComponentUsageUpdateWithoutProjectInput, ComponentUsageUncheckedUpdateWithoutProjectInput>
    create: XOR<ComponentUsageCreateWithoutProjectInput, ComponentUsageUncheckedCreateWithoutProjectInput>
  }

  export type ComponentUsageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ComponentUsageWhereUniqueInput
    data: XOR<ComponentUsageUpdateWithoutProjectInput, ComponentUsageUncheckedUpdateWithoutProjectInput>
  }

  export type ComponentUsageUpdateManyWithWhereWithoutProjectInput = {
    where: ComponentUsageScalarWhereInput
    data: XOR<ComponentUsageUpdateManyMutationInput, ComponentUsageUncheckedUpdateManyWithoutProjectInput>
  }

  export type ComponentUsageScalarWhereInput = {
    AND?: ComponentUsageScalarWhereInput | ComponentUsageScalarWhereInput[]
    OR?: ComponentUsageScalarWhereInput[]
    NOT?: ComponentUsageScalarWhereInput | ComponentUsageScalarWhereInput[]
    id?: IntFilter<"ComponentUsage"> | number
    component?: StringFilter<"ComponentUsage"> | string
    file?: StringFilter<"ComponentUsage"> | string
    count?: IntFilter<"ComponentUsage"> | number
    total?: IntFilter<"ComponentUsage"> | number
    projectId?: IntFilter<"ComponentUsage"> | number
  }

  export type PropUsageUpsertWithWhereUniqueWithoutProjectInput = {
    where: PropUsageWhereUniqueInput
    update: XOR<PropUsageUpdateWithoutProjectInput, PropUsageUncheckedUpdateWithoutProjectInput>
    create: XOR<PropUsageCreateWithoutProjectInput, PropUsageUncheckedCreateWithoutProjectInput>
  }

  export type PropUsageUpdateWithWhereUniqueWithoutProjectInput = {
    where: PropUsageWhereUniqueInput
    data: XOR<PropUsageUpdateWithoutProjectInput, PropUsageUncheckedUpdateWithoutProjectInput>
  }

  export type PropUsageUpdateManyWithWhereWithoutProjectInput = {
    where: PropUsageScalarWhereInput
    data: XOR<PropUsageUpdateManyMutationInput, PropUsageUncheckedUpdateManyWithoutProjectInput>
  }

  export type PropUsageScalarWhereInput = {
    AND?: PropUsageScalarWhereInput | PropUsageScalarWhereInput[]
    OR?: PropUsageScalarWhereInput[]
    NOT?: PropUsageScalarWhereInput | PropUsageScalarWhereInput[]
    id?: IntFilter<"PropUsage"> | number
    component?: StringFilter<"PropUsage"> | string
    file?: StringFilter<"PropUsage"> | string
    prop?: StringFilter<"PropUsage"> | string
    projectId?: IntFilter<"PropUsage"> | number
  }

  export type UnusedComponentUpsertWithWhereUniqueWithoutProjectInput = {
    where: UnusedComponentWhereUniqueInput
    update: XOR<UnusedComponentUpdateWithoutProjectInput, UnusedComponentUncheckedUpdateWithoutProjectInput>
    create: XOR<UnusedComponentCreateWithoutProjectInput, UnusedComponentUncheckedCreateWithoutProjectInput>
  }

  export type UnusedComponentUpdateWithWhereUniqueWithoutProjectInput = {
    where: UnusedComponentWhereUniqueInput
    data: XOR<UnusedComponentUpdateWithoutProjectInput, UnusedComponentUncheckedUpdateWithoutProjectInput>
  }

  export type UnusedComponentUpdateManyWithWhereWithoutProjectInput = {
    where: UnusedComponentScalarWhereInput
    data: XOR<UnusedComponentUpdateManyMutationInput, UnusedComponentUncheckedUpdateManyWithoutProjectInput>
  }

  export type UnusedComponentScalarWhereInput = {
    AND?: UnusedComponentScalarWhereInput | UnusedComponentScalarWhereInput[]
    OR?: UnusedComponentScalarWhereInput[]
    NOT?: UnusedComponentScalarWhereInput | UnusedComponentScalarWhereInput[]
    id?: IntFilter<"UnusedComponent"> | number
    name?: StringFilter<"UnusedComponent"> | string
    projectId?: IntFilter<"UnusedComponent"> | number
  }

  export type ProjectCreateWithoutComponentUsagesInput = {
    name: string
    repoUrl: string
    createdAt?: Date | string
    propUsages?: PropUsageCreateNestedManyWithoutProjectInput
    unusedComponents?: UnusedComponentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutComponentUsagesInput = {
    id?: number
    name: string
    repoUrl: string
    createdAt?: Date | string
    propUsages?: PropUsageUncheckedCreateNestedManyWithoutProjectInput
    unusedComponents?: UnusedComponentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutComponentUsagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutComponentUsagesInput, ProjectUncheckedCreateWithoutComponentUsagesInput>
  }

  export type ProjectUpsertWithoutComponentUsagesInput = {
    update: XOR<ProjectUpdateWithoutComponentUsagesInput, ProjectUncheckedUpdateWithoutComponentUsagesInput>
    create: XOR<ProjectCreateWithoutComponentUsagesInput, ProjectUncheckedCreateWithoutComponentUsagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutComponentUsagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutComponentUsagesInput, ProjectUncheckedUpdateWithoutComponentUsagesInput>
  }

  export type ProjectUpdateWithoutComponentUsagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propUsages?: PropUsageUpdateManyWithoutProjectNestedInput
    unusedComponents?: UnusedComponentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutComponentUsagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propUsages?: PropUsageUncheckedUpdateManyWithoutProjectNestedInput
    unusedComponents?: UnusedComponentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutPropUsagesInput = {
    name: string
    repoUrl: string
    createdAt?: Date | string
    componentUsages?: ComponentUsageCreateNestedManyWithoutProjectInput
    unusedComponents?: UnusedComponentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPropUsagesInput = {
    id?: number
    name: string
    repoUrl: string
    createdAt?: Date | string
    componentUsages?: ComponentUsageUncheckedCreateNestedManyWithoutProjectInput
    unusedComponents?: UnusedComponentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPropUsagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPropUsagesInput, ProjectUncheckedCreateWithoutPropUsagesInput>
  }

  export type ProjectUpsertWithoutPropUsagesInput = {
    update: XOR<ProjectUpdateWithoutPropUsagesInput, ProjectUncheckedUpdateWithoutPropUsagesInput>
    create: XOR<ProjectCreateWithoutPropUsagesInput, ProjectUncheckedCreateWithoutPropUsagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPropUsagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPropUsagesInput, ProjectUncheckedUpdateWithoutPropUsagesInput>
  }

  export type ProjectUpdateWithoutPropUsagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentUsages?: ComponentUsageUpdateManyWithoutProjectNestedInput
    unusedComponents?: UnusedComponentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPropUsagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentUsages?: ComponentUsageUncheckedUpdateManyWithoutProjectNestedInput
    unusedComponents?: UnusedComponentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutUnusedComponentsInput = {
    name: string
    repoUrl: string
    createdAt?: Date | string
    componentUsages?: ComponentUsageCreateNestedManyWithoutProjectInput
    propUsages?: PropUsageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUnusedComponentsInput = {
    id?: number
    name: string
    repoUrl: string
    createdAt?: Date | string
    componentUsages?: ComponentUsageUncheckedCreateNestedManyWithoutProjectInput
    propUsages?: PropUsageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUnusedComponentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUnusedComponentsInput, ProjectUncheckedCreateWithoutUnusedComponentsInput>
  }

  export type ProjectUpsertWithoutUnusedComponentsInput = {
    update: XOR<ProjectUpdateWithoutUnusedComponentsInput, ProjectUncheckedUpdateWithoutUnusedComponentsInput>
    create: XOR<ProjectCreateWithoutUnusedComponentsInput, ProjectUncheckedCreateWithoutUnusedComponentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUnusedComponentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUnusedComponentsInput, ProjectUncheckedUpdateWithoutUnusedComponentsInput>
  }

  export type ProjectUpdateWithoutUnusedComponentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentUsages?: ComponentUsageUpdateManyWithoutProjectNestedInput
    propUsages?: PropUsageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUnusedComponentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    componentUsages?: ComponentUsageUncheckedUpdateManyWithoutProjectNestedInput
    propUsages?: PropUsageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ComponentUsageCreateManyProjectInput = {
    id?: number
    component: string
    file: string
    count: number
    total: number
  }

  export type PropUsageCreateManyProjectInput = {
    id?: number
    component: string
    file: string
    prop: string
  }

  export type UnusedComponentCreateManyProjectInput = {
    id?: number
    name: string
  }

  export type ComponentUsageUpdateWithoutProjectInput = {
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ComponentUsageUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ComponentUsageUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type PropUsageUpdateWithoutProjectInput = {
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    prop?: StringFieldUpdateOperationsInput | string
  }

  export type PropUsageUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    prop?: StringFieldUpdateOperationsInput | string
  }

  export type PropUsageUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    prop?: StringFieldUpdateOperationsInput | string
  }

  export type UnusedComponentUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UnusedComponentUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UnusedComponentUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}