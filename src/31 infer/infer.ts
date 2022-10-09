type IsArray<T> =
  T extends Array<any>
  ? 'array'
  : 'other';

type WithArray = IsArray<string[]>;
type WithNotArray = IsArray<number>;

type UnboxArray<T> =
  T extends Array<any>
  ? any //?
  : T;

type NotArray = UnboxArray<string>;
type UnboxedArray = UnboxArray<string[]>;