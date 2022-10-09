export type StrOrNullOrUndefined = string | null | undefined;

type Result = Exclude<StrOrNullOrUndefined, null | undefined>;
