function error(): never {
  throw new Error('not implemented');
}

// const str: string = error();

// const verbose: string | never = 'hello';

// // null | never
// type OnlyNull<T> = T extends null ? null : never;
// type FilterNull = OnlyNull<null | string>;