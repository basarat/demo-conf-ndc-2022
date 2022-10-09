export type Person = {
  readonly name: string,
  email: string,
  phone?: string,
};

type ExampleMap<T> = {
  [K in keyof T]: T[K];
}

type ExampleResult = ExampleMap<Person>;