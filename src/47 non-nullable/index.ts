export type StrOrNullOrUndefined = string | null | undefined;

type Result = Exclude<StrOrNullOrUndefined, null | undefined>;

type Union = { foo: number } | { bar: number };
type UnionIntersection = Union & { bas: number };
let example: UnionIntersection;
example = { foo: 123, bas: 456 };
example = { bar: 123, bas: 456 };

type NullObject = null & {};
type UndefinedObject = null & {};